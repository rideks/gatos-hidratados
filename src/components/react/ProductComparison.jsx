import { useState, useMemo } from "react";
import { ArrowUpDown, ExternalLink } from "lucide-react";
import { TAG_LABELS } from "../../data/ProductData.js";
import { trackAffiliateClick } from "../../utils/trackAffiliateClick.js";

/**
 * Miniatura con placeholder felino cuando el producto aún no tiene foto
 * (image === ""). Replica la silueta de CatSilhouette.astro, que no se puede
 * importar dentro de una isla React.
 */
function Thumb({ src, alt }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width={56}
        height={56}
        loading="lazy"
        className="w-14 h-14 rounded-lg object-cover border border-line bg-paper-200 shrink-0"
      />
    );
  }
  return (
    <div
      className="w-14 h-14 rounded-lg border border-line bg-paper-200 shrink-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 120" className="w-7 h-8 text-brand-300" fill="currentColor">
        <path d="M71 113c17-2 27-16 24-33-2-13-12-20-20-16 8 1 13 8 14 17 2 15-8 26-24 28 3 2 5 3 6 4z" />
        <path d="M50 47c-18 0-25 27-23 51 1 12 10 16 23 16s22-4 23-16c2-24-5-51-23-51z" />
        <circle cx="50" cy="38" r="19" />
        <path d="M33 27 29 7l18 12z" />
        <path d="M67 27 71 7 53 19z" />
      </svg>
    </div>
  );
}

/**
 * Isla React: ranking de productos con orden por precio. Los datos llegan ya
 * serializados desde Astro, incluyendo la URL de afiliado construida con el tag.
 */
export default function ProductComparison({ products = [] }) {
  const [asc, setAsc] = useState(true);

  const toNum = (v) => Number(String(v).replace(",", "."));
  const sorted = useMemo(() => {
    const copy = [...products];
    copy.sort((a, b) => (asc ? toNum(a.price) - toNum(b.price) : toNum(b.price) - toNum(a.price)));
    return copy;
  }, [products, asc]);

  return (
    <div className="rounded-2xl border border-line overflow-hidden bg-white">
      <div className="flex items-center justify-between bg-paper-200 px-4 py-3 border-b border-line">
        <p className="font-display font-semibold text-ink">Comparativa rápida</p>
        <button
          onClick={() => setAsc((v) => !v)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          <ArrowUpDown size={15} />
          Precio {asc ? "ascendente" : "descendente"}
        </button>
      </div>

      <ul className="divide-y divide-line">
        {sorted.map((p, i) => (
          <li
            key={p.slug}
            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-paper-200/50 transition-colors"
          >
            <span className="u-data text-sm text-ink-500 w-5 text-center shrink-0">{i + 1}</span>
            <Thumb src={p.image} alt={p.name} />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-ink leading-snug line-clamp-2 sm:truncate">{p.name}</p>
              <p className="text-xs text-ink-500 mt-0.5 truncate">
                {(p.tags || []).map((t) => TAG_LABELS[t]).filter(Boolean).slice(0, 3).join(" · ")}
              </p>
            </div>
            <span className="u-data font-semibold text-ink whitespace-nowrap shrink-0">{p.price} €</span>
            <a
              href={p.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick({ location: "comparison", productName: p.name, price: p.price })}
              className="inline-flex items-center gap-1 btn-accent btn-accent:hover text-white text-sm font-semibold px-3.5 py-2 rounded-full transition whitespace-nowrap shrink-0"
            >
              Ver <ExternalLink size={14} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}