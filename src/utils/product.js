// ============================================================================
// Acceso BLINDADO a los productos. Usa estos helpers en vez de leer campos
// opcionales directamente (product.highlights.pros, product.image...): así un
// producto al que le falte un campo nunca rompe la página.
// ============================================================================

// Imágenes normalizadas: usa `images` (array) si existe; si no, `image`.
export const getImages = (p) => {
  const arr =
    Array.isArray(p?.images) && p.images.length
      ? p.images
      : p?.image
        ? [p.image]
        : [];
  return [...new Set(arr.filter(Boolean))];
};

export const getMainImage = (p) => getImages(p)[0] ?? null;

// Pros / contras seguros (array vacío si no hay).
export const getPros = (p) => (Array.isArray(p?.highlights?.pros) ? p.highlights.pros : []);
export const getCons = (p) => (Array.isArray(p?.highlights?.cons) ? p.highlights.cons : []);
export const hasProsCons = (p) => getPros(p).length > 0 || getCons(p).length > 0;

// Variantes seguras.
export const getVariants = (p) => (Array.isArray(p?.variants) ? p.variants : []);
export const hasVariants = (p) => getVariants(p).length > 0;

// Precio numérico seguro.
const num = (v) => {
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isNaN(n) ? null : n;
};

// Rango de precio: si hay variantes, min–max; si no, el del producto.
export const getPriceRange = (p) => {
  const prices = (hasVariants(p) ? getVariants(p).map((v) => v.price) : [p?.price])
    .map(num)
    .filter((n) => n !== null);
  if (!prices.length) return null;
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return { min, max, from: min !== max };
};

// Etiqueta de precio lista para mostrar ("7,99 €" o "desde 3,90 €").
export const getPriceLabel = (p) => {
  const r = getPriceRange(p);
  if (!r) return null;
  const fmt = (n) => `${n.toFixed(2).replace(".", ",")} €`;
  return r.from ? `desde ${fmt(r.min)}` : fmt(r.min);
};
