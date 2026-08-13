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

// Con descuento real (para banners de ofertas; el % se calcula de los datos).
export const getDiscounted = () =>
  productos.filter((p) => p.originalPrice && Number(String(p.originalPrice).replace(",", ".")) > Number(String(p.price).replace(",", ".")));
