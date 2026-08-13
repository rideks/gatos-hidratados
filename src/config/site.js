// ============================================================================
// Configuración central del sitio. Cambia estos valores y todo el sitio se
// actualiza (Layout, Header, Footer, schema, enlaces de afiliado, legales).
// ============================================================================

export const SITE = {
  name: "Micifú",
  domain: "micifu.es",
  url: "https://micifu.es",
  tagline: "Cuidado felino probado de verdad, sin humo",
  description:
    "Guías y comparativas honestas de productos de cuidado felino. Empezamos por la hidratación (fuentes de agua y filtros): probamos de verdad y señalamos también los defectos.",
  locale: "es_ES",
  lang: "es",
  themeColor: "#221f1b",
  defaultOgImage: "/og-default.jpg",
};

export const AUTHOR = {
  name: "Micifú",
  // Persona/editor que firma las notas editoriales (E-E-A-T). Sustituye por una
  // persona real (mejor aún, con revisión veterinaria): da mucha credibilidad.
  editor: "Redacción",
  email: "hola@micifu.es",
  authorPath: "/quienes-somos/#author",
};

// ── Afiliación Amazon ───────────────────────────────────────────────────────
// Tu ID de asociado (tag). TODOS los enlaces se construyen con esto vía
// utils/amazon.js, así que nunca lo escribas a mano en las fichas.
export const AMAZON = {
  tag: "micifu-21", // <-- CAMBIA por tu tag real de Asociado Amazon
  domain: "amazon.es",
};

export const AMAZON_AFFILIATE_DISCLOSURE =
  "Como Asociado de Amazon, obtenemos ingresos por las compras adscritas que cumplen los requisitos.";

// ── Analítica ───────────────────────────────────────────────────────────────
// GA solo se carga TRAS consentimiento (ver CookieBanner). Déjalo vacío y no se
// cargará nada; pon tu ID "G-XXXXXXXXXX" cuando quieras activar Analytics.
export const ANALYTICS = {
  gaId: "", // p. ej. "G-XXXXXXXXXX"
};

// ── Taxonomía (silos + categorías) — fuente única en data/taxonomy.js ────────
import {
  SILOS,
  CATEGORIES,
  GUIDES,
  getCategory,
  getGuideByCategory,
} from "../data/taxonomy.js";
export { SILOS };

// Menú simple heredado (por compatibilidad); la navegación real se deriva de la
// taxonomía en config/navigationData.js.
export const NAV = [
  { label: "Inicio", path: "/" },
  { label: SILOS.hidratacion.name, path: SILOS.hidratacion.path },
  { label: "Quiénes somos", path: "/quienes-somos/" },
];

// ── Enlazado interno del silo (DERIVADO de la taxonomía) ─────────────────────
// Jerarquía: Pilar (silo) > Categoría (hub) > Comparativa > Ficha. Estos mapas
// los consumen las fichas de producto para breadcrumb + "Sigue leyendo".
export const CATEGORY_BY_SUBCATEGORY = Object.fromEntries(
  CATEGORIES.filter((c) => c.hub).map((c) => [c.id, { title: c.hub.title, path: c.hub.path }]),
);

export const COMPARATIVA_BY_SUBCATEGORY = Object.fromEntries(
  CATEGORIES.filter((c) => c.comparativa).map((c) => [
    c.id,
    { title: c.comparativa.title, path: c.comparativa.path },
  ]),
);

export const GUIA_BY_SUBCATEGORY = Object.fromEntries(
  CATEGORIES.map((c) => {
    const g = getGuideByCategory(c.id);
    return g ? [c.id, { title: g.title, path: g.path }] : null;
  }).filter(Boolean),
);
