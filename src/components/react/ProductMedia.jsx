import { useState, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import {
  getVariants,
  getVariantImages,
  getImages,
  getBuyInfo,
  formatEUR,
} from "../../utils/product.js";
import { trackAffiliateClick } from "../../utils/trackAffiliateClick.js";

/**
 * Isla de compra: galería + selector de variante + precio/descuento + CTA.
 *
 * Fuente de verdad ÚNICA (useState), sin store: al elegir variante cambian a la
 * vez la foto principal, las miniaturas, el precio, el descuento y el enlace de
 * afiliado. Astro renderiza el HTML inicial en servidor (SEO ok) y luego hidrata.
 *
 * La cabecera SEO (marca, <h1>, sellos, estrellas) va en Astro ENCIMA de esta
 * isla; aquí solo vive lo que cambia con la variante.
 *
 * Degrada bien: sin variantes oculta el selector; sin fotos muestra placeholder;
 * sin amazonUrl deja el botón inactivo.
 */
export default function ProductMedia({ product }) {
  const variants = getVariants(product);
  const [variant, setVariant] = useState(variants[0] ?? null);
  const [active, setActive] = useState(0);

  const images = useMemo(
    () => (variant ? getVariantImages(variant, product) : getImages(product)),
    [variant, product],
  );
  const buy = useMemo(() => getBuyInfo(product, variant), [product, variant]);

  const pickVariant = (v) => {
    setVariant(v);
    setActive(0); // al cambiar de color, vuelve a la primera foto
  };

  const main = images[active] ?? images[0] ?? null;
  const saving =
    buy.discount ? formatEUR(buy.discount.original - buy.discount.price) : null;

  return (
    <div className="grid sm:grid-cols-2 gap-6 items-start">
      {/* ── Galería ───────────────────────────────────────────────── */}
      <div className="space-y-3">
        <div className="relative rounded-xl border border-brand-200 bg-white overflow-hidden aspect-square">
          {buy.discount && (
            <span className="absolute top-2 left-2 z-10 inline-flex items-center rounded-md bg-red-600 text-white text-xs font-bold px-2 py-1 leading-none">
              −{buy.discount.pct} %
            </span>
          )}

          {main ? (
            <img
              key={main}
              src={main}
              alt={product.name}
              className="w-full h-full object-cover motion-safe:transition-opacity motion-safe:duration-300"
            />
          ) : (
            <div className="w-full h-full grid place-items-center text-brand-200" aria-hidden="true">
              {/* Placeholder mientras no hay foto (huellas) */}
              <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
                <path d="M12 10c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zm-6 1c1.1 0 2-1.34 2-3S7.1 5 6 5 4 6.34 4 8s.9 3 2 3zm12 0c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zm-6 2c-2.5 0-6 1.5-6 4.5 0 1.38 1.12 2.5 2.5 2.5h7c1.38 0 2.5-1.12 2.5-2.5 0-3-3.5-4.5-6-4.5z" />
              </svg>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {images.slice(0, 4).map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver imagen ${i + 1}`}
                aria-pressed={active === i}
                className={`rounded-lg border overflow-hidden aspect-square bg-white motion-safe:transition ${active === i
                  ? "border-brand-600 ring-2 ring-brand-600/30"
                  : "border-brand-200 hover:border-brand-400"
                  }`}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Variante + precio + CTA ───────────────────────────────── */}
      <div className="rounded-xl border border-brand-200 bg-white p-5">
        {variants.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-slate-500 mb-1.5">
              {variant?.color ? `Color: ${variant.color}` : "Elige una opción"}
            </p>
            <div className="flex flex-wrap gap-2">
              {variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => pickVariant(v)}
                  aria-pressed={variant?.id === v.id}
                  className={`rounded-full border px-3 py-1.5 text-sm font-semibold motion-safe:transition ${variant?.id === v.id
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-brand-200 text-ink hover:border-brand-400"
                    }`}
                >
                  {v.label ?? v.color ?? v.id}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Precio + descuento */}
        <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1">
          <span className="text-3xl font-display font-extrabold text-ink">
            {formatEUR(buy.price) ?? "—"}
          </span>
          {buy.discount && (
            <>
              <span className="text-lg text-slate-400 line-through">
                {formatEUR(buy.discount.original)}
              </span>
              <span className="inline-flex items-center rounded-md bg-red-50 text-red-700 border border-red-200 text-xs font-bold px-2 py-0.5">
                Ahorras {saving}
              </span>
            </>
          )}
        </div>

        {/* CTA afiliado */}
        <a
          href={buy.amazonUrl || "#"}
          target="_blank"
          rel="sponsored nofollow noopener"
          aria-disabled={!buy.amazonUrl}
          onClick={(e) => {
            if (!buy.amazonUrl) {
              e.preventDefault();
              return;
            }
            trackAffiliateClick({ location: "buybox", productName: product.name, price: buy.price });
          }}
          className={`mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full text-white font-bold px-5 py-3 motion-safe:transition ${buy.amazonUrl ? "btn-accent hover:bg-brand-700" : "bg-slate-300 pointer-events-none"
            }`}
        >
          Ver en Amazon <ExternalLink size={16} />
        </a>
        <p className="mt-2 text-xs text-slate-400 text-center">
          Precio orientativo. El definitivo se ve en Amazon.
        </p>
      </div>
    </div>
  );
}