// ============================================================================
// Helpers de JSON-LD (SEO). Un único sitio para construir schema consistente y
// compliant. Principios:
//  - NUNCA aggregateRating con datos de Amazon (self-serving review abuse).
//  - Review editorial PROPIA con reviewRating solo si hay nota en EditorialScores.
//  - Offer con priceValidUntil a 28 días (Google penaliza ventanas largas).
//  - Todo referencia #website / #organization (definidos en SiteSchema.astro).
// ============================================================================
import { SITE, AUTHOR } from "../config/site.js";
import { getEditorialScore } from "../data/EditorialScores.js";
import { getImages } from "./product.js";

const SITE_URL = SITE.url.replace(/\/$/, "");
export const orgRef = { "@id": `${SITE_URL}/#organization` };
export const abs = (path) => (String(path).startsWith("http") ? path : new URL(path, SITE.url).href);

export function getPriceValidUntil(days = 28) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

const money = (v) => parseFloat(String(v).replace(",", ".")).toFixed(2);

// Offer rico: precio, rebaja (Sale/List), condición, disponibilidad, validez.
export function buildOffer(p, { url } = {}) {
  const price = money(p.price);
  const orig = p.originalPrice ? money(p.originalPrice) : null;
  const discounted = orig && Number(orig) > Number(price);
  return {
    "@type": "Offer",
    url: p.amazonUrl?.startsWith("http") ? p.amazonUrl : (url || abs(`/productos/${p.slug}/`)),
    priceCurrency: p.currency || "EUR",
    price,
    ...(discounted && {
      priceSpecification: [
        { "@type": "UnitPriceSpecification", price, priceCurrency: p.currency || "EUR", priceType: "https://schema.org/SalePrice" },
        { "@type": "UnitPriceSpecification", price: orig, priceCurrency: p.currency || "EUR", priceType: "https://schema.org/ListPrice" },
      ],
    }),
    itemCondition: "https://schema.org/NewCondition",
    availability: `https://schema.org/${p.availability === "OutOfStock" ? "OutOfStock" : "InStock"}`,
    priceValidUntil: getPriceValidUntil(),
    seller: { "@type": "Organization", name: "Amazon", url: "https://www.amazon.es" },
  };
}

// Review editorial propia. Solo si el slug tiene nota en EditorialScores.
export function buildEditorialReview(p) {
  const ed = getEditorialScore(p.slug);
  if (!ed) return null;
  const pros = p.highlights?.pros || [];
  const cons = p.highlights?.cons || [];
  return {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: String(ed.rating), bestRating: "5", worstRating: "1" },
    author: orgRef,
    datePublished: ed.date || p.datePublished,
    ...(p.dynamicReview && { reviewBody: String(p.dynamicReview).slice(0, 600) }),
    ...(pros.length && { positiveNotes: { "@type": "ItemList", itemListElement: pros.slice(0, 4).map((n, i) => ({ "@type": "ListItem", position: i + 1, name: n })) } }),
    ...(cons.length && { negativeNotes: { "@type": "ItemList", itemListElement: cons.slice(0, 3).map((n, i) => ({ "@type": "ListItem", position: i + 1, name: n })) } }),
  };
}

// Nodo Product completo (con @id, offer, review editorial, mainEntityOfPage).
export function buildProductNode(p, { pageUrl } = {}) {
  const url = pageUrl || abs(`/productos/${p.slug}/`);
  const images = getImages(p).map(abs);
  const review = buildEditorialReview(p);
  return {
    "@type": "Product",
    "@id": `${url}#product`,
    name: p.name,
    url,
    ...(images.length && { image: images }),
    description: p.dynamicReview || p.description || p.name,
    brand: { "@type": "Brand", name: p.brand || "Genérico" },
    ...(p.sku && { sku: p.sku }),
    ...(p.material && { material: p.material }),
    ...(p.color && { color: p.color }),
    ...(p.capacity && { additionalProperty: [{ "@type": "PropertyValue", name: "Capacidad", value: p.capacity }] }),
    offers: buildOffer(p, { url }),
    ...(review && { review }),
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
}

// ItemList con productos (para comparativas/categorías).
// En schema.js

export function buildItemListProducts(products, { id } = {}) {
  return {
    "@type": "ItemList",
    ...(id && { "@id": id }),
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => {
      // Usamos tu helper robusto para extraer la primera imagen disponible
      const images = getImages(p);
      const mainImage = images.length ? images[0] : null;

      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          url: abs(`/productos/${p.slug}/`),
          // CORRECCIÓN 1: Soluciona el problema crítico de la imagen
          ...(mainImage && { image: abs(mainImage) }),
          // CORRECCIÓN 2: Soluciona el aviso opcional de la descripción
          description: p.dynamicReview || p.description || p.name,
          brand: { "@type": "Brand", name: p.brand || "Genérico" },
          offers: buildOffer(p),
          ...(buildEditorialReview(p) && { review: buildEditorialReview(p) }),
        },
      };
    }),
  };
}

export function buildBreadcrumb(items, { id } = {}) {
  return {
    "@type": "BreadcrumbList",
    ...(id && { "@id": id }),
    itemListElement: items.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, item: abs(b.path) })),
  };
}

export function buildWebPage({ url, name, description, breadcrumbId, mainEntityId, datePublished, dateModified }) {
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "es-ES",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    ...(breadcrumbId && { breadcrumb: { "@id": breadcrumbId } }),
    ...(mainEntityId && { mainEntity: { "@id": mainEntityId } }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  };
}

// Persona (autor/revisor) para E-E-A-T. Devuelve null si no hay nombre real.
function personNode(p) {
  if (!p?.name) return null;
  return {
    "@type": "Person",
    name: p.name,
    ...(p.jobTitle && { jobTitle: p.jobTitle }),
    ...(p.url && { url: abs(p.url) }),
    ...(p.avatar && { image: abs(p.avatar) }),
    ...(p.identifier && { identifier: p.identifier }),
    ...(p.sameAs?.length && { sameAs: p.sameAs }),
  };
}

// Autor: Person si hay persona real configurada; si no, la Organización (marca).
const authorNode =
  personNode(AUTHOR.person) || { "@type": "Organization", name: AUTHOR.name, url: abs(AUTHOR.authorPath) };

export function buildArticle({ url, headline, description, datePublished, dateModified, image, section, citations }) {
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    inLanguage: "es-ES",
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Organization", name: AUTHOR.name, url: abs(AUTHOR.authorPath) },
    publisher: orgRef,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    ...(image && { image: abs(image) }),
    ...(section && { articleSection: section }),
    ...(citations?.length && {
      citation: citations.map((c) => ({
        "@type": "CreativeWork",
        name: c.title || c.name,
        url: c.url,
        ...(c.authors && { author: c.authors }),
        ...(c.year && { datePublished: String(c.year) }),
      })),
    }),
  };
}

export function buildFaqPage(faqs, { id } = {}) {
  const isPartOf = id && id.endsWith("#faq") ? { "@id": id.replace(/#faq$/, "#webpage") } : undefined;
  return {
    "@type": "FAQPage",
    ...(id && { "@id": id }),
    ...(isPartOf && { isPartOf }),
    inLanguage: "es-ES",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q || f.question,
      acceptedAnswer: { "@type": "Answer", text: f.a || f.answer },
    })),
  };
}

export function buildHowTo({ url, name, description, steps = [], totalTime, supply = [], tool = [] }) {
  if (!steps.length) return null;
  return {
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name,
    ...(description && { description }),
    inLanguage: "es-ES",
    ...(totalTime && { totalTime }), // formato ISO 8601, p. ej. "PT10M"
    ...(supply.length && { supply: supply.map((s) => ({ "@type": "HowToSupply", name: s })) }),
    ...(tool.length && { tool: tool.map((t) => ({ "@type": "HowToTool", name: t })) }),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url && { url: abs(s.url) }),
    })),
  };
}

export const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes.filter(Boolean) });
