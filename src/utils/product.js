// ============================================================================
// Acceso BLINDADO a los productos. Usa estos helpers en vez de leer campos
// opcionales directamente (product.highlights.pros, product.image, v.price...):
// así un producto (o una variante) al que le falte un campo nunca rompe la
// página.
//
// Modelo de imágenes: cualquier ENTIDAD —producto O variante— puede llevar
//   image:  "/ruta.jpg"                 (una)
//   images: ["/a.jpg", "/b.jpg"]        (varias)
// Una variante SIN foto hereda las del producto: solo añades imágenes a las
// variantes que de verdad se ven distintas (colores).
// ============================================================================

// ── Utilidades numéricas / formato ───────────────────────────────────────────
// Número seguro desde "36,99" | "36.99" | 36.99 → 36.99 (o null si no aplica).
const num = (v) => {
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isNaN(n) ? null : n;
};

// "36,99 €" listo para pintar (o null si no hay número válido).
export const formatEUR = (v) => {
  const n = num(v);
  return n == null ? null : `${n.toFixed(2).replace(".", ",")} €`;
};

// ── Variantes ─────────────────────────────────────────────────────────────────
export const getVariants = (p) => (Array.isArray(p?.variants) ? p.variants : []);
export const hasVariants = (p) => getVariants(p).length > 0;

// ── Imágenes ─────────────────────────────────────────────────────────────────
// Normaliza a array cualquier entidad (producto O variante) con `images`
// (array) o `image` (string), sin duplicados ni huecos.
const imagesOf = (x) => {
  const arr =
    Array.isArray(x?.images) && x.images.length
      ? x.images
      : x?.image
        ? [x.image]
        : [];
  return [...new Set(arr.filter(Boolean))];
};

// Imágenes propias del producto (nivel raíz). Compatible con lo anterior.
export const getImages = (p) => imagesOf(p);

// Imágenes de UNA variante; si no trae foto propia, hereda las del producto.
export const getVariantImages = (variant, product) => {
  const own = imagesOf(variant);
  return own.length ? own : getImages(product);
};

// TODAS las imágenes (raíz + todas las variantes), sin duplicar.
// Úsalo para el schema (Product.image) y para una galería "muéstralo todo".
export const getAllImages = (p) => [
  ...new Set([...getImages(p), ...getVariants(p).flatMap(imagesOf)].filter(Boolean)),
];

// Imagen principal GARANTIZADA: raíz → primera variante con foto → null.
// Para OG y fallback de schema (nunca vacío si hay al menos UNA foto).
export const getMainImage = (p) => getAllImages(p)[0] ?? null;

// ── Pros / contras ────────────────────────────────────────────────────────────
export const getPros = (p) => (Array.isArray(p?.highlights?.pros) ? p.highlights.pros : []);
export const getCons = (p) => (Array.isArray(p?.highlights?.cons) ? p.highlights.cons : []);
export const hasProsCons = (p) => getPros(p).length > 0 || getCons(p).length > 0;

// ── Precio y descuento ───────────────────────────────────────────────────────
// Descuento REAL de una entidad (producto o variante). null si no hay rebaja.
// Devuelve { price, original, pct } — pct redondeado, listo para "−23 %".
// (Sustituye al `pct` inline de ofertas.astro: getDiscount(p)?.pct ?? 0.)
export const getDiscount = (x) => {
  const price = num(x?.price);
  const original = num(x?.originalPrice);
  if (price == null || original == null || original <= price) return null;
  return { price, original, pct: Math.round(((original - price) / original) * 100) };
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
  return r.from ? `desde ${formatEUR(r.min)}` : formatEUR(r.min);
};

// ── Compra activa (producto + variante seleccionada) ─────────────────────────
// La variante MANDA si fija su propio `price` (usa entonces SU `originalPrice`,
// o ninguno; no hereda el del producto para no pintar un tachado erróneo). Si
// no fija precio, hereda precio y originalPrice del producto. El enlace/ASIN de
// la variante tienen prioridad; si no, los del producto.
export const getBuyInfo = (product, variant = null) => {
  const ownPrice = variant && variant.price != null;
  const price = ownPrice ? variant.price : product?.price;
  const originalPrice = ownPrice ? variant.originalPrice : product?.originalPrice;
  const amazonUrl = (variant && variant.amazonUrl) || product?.amazonUrl || "";
  const asin = (variant && variant.asin) || product?.asin || "";
  return { price, originalPrice, amazonUrl, asin, discount: getDiscount({ price, originalPrice }) };
};