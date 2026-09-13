// ============================================================================
// SILO HIGIENE (APAGADO) — semilla de productos (arena + areneros).
// Se activa poniendo SILOS.higiene.active = true en data/taxonomy.js.
//
// Mismo esquema que agua/comederos. Rellena con modelos REALES de Amazon.es
// (image y amazonUrl en blanco hasta completarlos). Subcategorías válidas:
//   "arena-gatos" → arena/sustrato   ·   "areneros" → cajas/areneros
// ============================================================================
import { PRODUCT_TAGS as T } from "../productTags.js";

const _hoy = new Date();
const _iso = (d) => d.toISOString().slice(0, 10);
const FECHA_HOY = `${_iso(_hoy)}T00:00:00.000Z`;
const FECHA_SEMANA = _iso(new Date(_hoy.getTime() - 7 * 864e5));

const P = (p) => ({
  currency: "EUR",
  ...p,
  originalPrice: p.originalPrice ?? p.price,
  datePublished: p.datePublished ?? FECHA_SEMANA,
  updatedAt: p.updatedAt ?? FECHA_HOY,
  amazonUrl: p.amazonUrl ?? "",
  sku: p.sku || p.asin || undefined,
});

export const higieneProducts = [
  // Pendiente de curar modelos reales. Ejemplo de forma (cuando tengamos datos):
  //
  // P({
  //   id: "…", slug: "…", subcategory: "arena-gatos", brand: "…",
  //   name: "…", price: "…", image: "/images/higiene/….webp",
  //   amazonUrl: "", asin: "…", rating: "…", reviews: "…",
  //   tags: [T.LARGE_CAPACITY], bestFor: "…",
  //   specs: {}, highlights: { pros: [], cons: [] }, features: [],
  //   dynamicReview: "…",
  // }),
];

void P; // evita "unused" mientras la lista está vacía
void T;