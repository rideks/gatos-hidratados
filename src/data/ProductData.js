// ============================================================================
// ÍNDICE DE PRODUCTOS — fuente única del catálogo.
//
// Escala así: cada silo tiene su archivo en ./products/. Para abrir un silo
// nuevo (higiene, alimentación), crea ./products/higiene.js y añade una línea
// de import + spread abajo. Todo lo demás (filtros, helpers, schema, enlazado)
// sigue funcionando sin tocar nada.
// ============================================================================
export * from "./productTags.js";
import { getCategory, isCategoryId } from "./taxonomy.js";
import { aguaProducts } from "./products/agua.js";
import { comederosProducts } from "./products/comederos.js";
// import { higieneProducts } from "./products/higiene.js";           // futuro
// import { alimentacionProducts } from "./products/alimentacion.js"; // futuro

export const productos = [
  ...aguaProducts,
  ...comederosProducts,
  // ...higieneProducts,
  // ...alimentacionProducts,
];

// ── Validación (dev): avisa si un producto usa una categoría desconocida ─────
if (import.meta.env?.DEV) {
  for (const p of productos) {
    if (!isCategoryId(p.subcategory)) {
      console.warn(`⚠️ Producto "${p.slug}" tiene subcategory desconocida: "${p.subcategory}". Regístrala en data/taxonomy.js`);
    }
  }
}

// ── Silo de un producto (derivado de la taxonomía; no se duplica) ────────────
export const getProductSilo = (product) => getCategory(product?.subcategory)?.silo ?? null;

// ── Opciones de filtro derivadas (para catálogos/filtros) ────────────────────
const uniq = (arr) => [...new Set(arr.filter(Boolean))];
export const filterOptions = {
  silos: uniq(productos.map(getProductSilo)),
  categories: uniq(productos.map((p) => p.subcategory)),
  brands: uniq(productos.map((p) => p.brand)).sort(),
  materials: uniq(productos.map((p) => p.material)).sort(),
  tags: uniq(productos.flatMap((p) => p.tags || [])),
};

// ── Helpers de consulta ──────────────────────────────────────────────────────
export const getBySlug = (slug) => productos.find((p) => p.slug === slug);
export const getByTag = (tag) => productos.filter((p) => p.tags?.includes(tag));
export const getBySubcategory = (sub) => productos.filter((p) => p.subcategory === sub);
export const getBySilo = (siloId) => productos.filter((p) => getProductSilo(p) === siloId);
export const getByBrand = (brand) => productos.filter((p) => p.brand?.toLowerCase() === String(brand).toLowerCase());

// Productos relacionados: misma categoría, distinto id.
export const getRelated = (product, n = 3) =>
  productos.filter((p) => p.subcategory === product.subcategory && p.id !== product.id).slice(0, n);

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  COMPATIBILIDAD FILTRO ↔ FUENTE                                           ║
// ║                                                                           ║
// ║  Regla por defecto (cero config): un filtro encaja con las fuentes de su  ║
// ║  MISMA marca. Excepciones declaradas en el propio producto:               ║
// ║    • universal: true   → filtro genérico: encaja con cualquier fuente de  ║
// ║                          acero (fallback de última opción).               ║
// ║    • fitsSlugs: [slug] → match exacto de fuente (máxima prioridad; útil    ║
// ║                          cuando una marca tiene formatos incompatibles).  ║
// ║    • fitsBrands: [..]  → escape para filtros cuya marca ≠ marca de fuente. ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const _norm = (s) => String(s ?? "").trim().toLowerCase();
const _isFilter = (p) => p?.subcategory === "filtros-fuente";
const _isFountain = (p) => p?.subcategory === "fuentes-agua";
const _isSteel = (p) => /acero|inox|steel/i.test(`${p?.material ?? ""} ${p?.name ?? ""}`);
const _reviews = (p) => Number(String(p?.reviews ?? "0").replace(/\D/g, "")) || 0;

// Puntúa qué encaja mejor: 3 = slug exacto, 2 = misma marca, 1 = universal acero.
const _fitScore = (filter, fountain) => {
  if (filter.fitsSlugs?.includes(fountain.slug)) return 3;
  if (filter.fitsBrands?.some((b) => _norm(b) === _norm(fountain.brand))) return 2;
  if (!filter.exactOnly && !filter.universal && _norm(filter.brand) && _norm(filter.brand) === _norm(fountain.brand)) return 2;
  if (filter.universal && _isSteel(fountain)) return 1;
  return 0;
};

// Filtros que encajan con una fuente, ordenados por precisión y luego por
// nº de reseñas (desempata entre universales / mismo score).
export const getFiltersForFountain = (fountain) => {
  if (!_isFountain(fountain)) return [];
  return productos
    .filter(_isFilter)
    .map((f) => ({ f, s: _fitScore(f, fountain) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || _reviews(b.f) - _reviews(a.f))
    .map((x) => x.f);
};

// El mejor recambio para una fuente (o null si no hay ninguno compatible).
export const getRecommendedFilter = (fountain) => getFiltersForFountain(fountain)[0] ?? null;

// Fuentes en las que encaja un filtro (para la ficha del filtro).
export const getFountainsForFilter = (filter) => {
  if (!_isFilter(filter)) return [];
  return productos
    .filter(_isFountain)
    .filter((p) => _fitScore(filter, p) > 0)
    .sort((a, b) => _reviews(b) - _reviews(a));
};

// Con descuento real (para banners de ofertas; el % se calcula de los datos).
export const getDiscounted = () =>
  productos.filter((p) => p.originalPrice && Number(String(p.originalPrice).replace(",", ".")) > Number(String(p.price).replace(",", ".")));
