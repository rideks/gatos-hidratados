import { AMAZON } from "../config/site.js";

/**
 * Construye un enlace de afiliado limpio y siempre con tu tag.
 * Acepta:
 *  - Un shortlink amzn.to (se devuelve tal cual; el tag ya va dentro).
 *  - Un ASIN (B0XXXXXXXX) => /dp/ASIN?tag=...
 *  - Una URL completa de Amazon => se le fuerza el parámetro tag.
 */
export function buildAmazonUrl(input) {
  if (!input) return `https://www.${AMAZON.domain}/?tag=${AMAZON.tag}`;

  // Shortlinks: el tag ya está embebido, no tocar.
  if (/^https?:\/\/amzn\.to\//i.test(input)) return input;

  // ASIN suelto.
  if (/^[A-Z0-9]{10}$/.test(input)) {
    return `https://www.${AMAZON.domain}/dp/${input}?tag=${AMAZON.tag}`;
  }

  // URL completa: forzamos/normalizamos el tag.
  try {
    const u = new URL(input);
    u.searchParams.set("tag", AMAZON.tag);
    return u.toString();
  } catch {
    return `https://www.${AMAZON.domain}/?tag=${AMAZON.tag}`;
  }
}
