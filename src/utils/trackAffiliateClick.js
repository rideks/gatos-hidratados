/**
 * Evento GA4 unificado para clics de afiliado. Se dispara desde CTAs estáticos
 * (Astro) y desde islas React. GA solo existe si el usuario aceptó cookies.
 */
export function trackAffiliateClick({ location, productName, price } = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "affiliate_click", {
    affiliate_location: location || "unknown",
    product_name: productName || "unknown",
    price: price || null,
  });
}
