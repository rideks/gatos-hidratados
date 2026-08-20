import { useState, useMemo } from "react";
import { ArrowUpDown, ExternalLink } from "lucide-react";
import { trackAffiliateClick } from "../../utils/trackAffiliateClick.js";

function Thumb({ src, alt }) {
  if (src) {
    return (
      <img src={src} alt={alt} width={48} height={48} loading="lazy"
        className="w-12 h-12 rounded-lg object-cover border border-line bg-paper-200 shrink-0" />
    );
  }
  return (
    <div className="w-12 h-12 rounded-lg border border-line bg-paper-200 shrink-0 flex items-center justify-center" aria-hidden="true">
      <svg viewBox="0 0 100 120" className="w-6 h-7 text-brand-300" fill="currentColor">
        <path d="M71 113c17-2 27-16 24-33-2-13-12-20-20-16 8 1 13 8 14 17 2 15-8 26-24 28 3 2 5 3 6 4z" />
        <path d="M50 47c-18 0-25 27-23 51 1 12 10 16 23 16s22-4 23-16c2-24-5-51-23-51z" />
        <circle cx="50" cy="38" r="19" />
        <path d="M33 27 29 7l18 12z" /><path d="M67 27 71 7 53 19z" />
      </svg>
    </div>
  );
}

const short = (v) => String(v ?? "—").split(/[(/]/)[0].trim();

export default function ProductComparison({ products = [] }) {
  const [asc, setAsc] = useState(true);
  const toNum = (v) => Number(String(v).replace(",", "."));

  const topSlug = useMemo(() => {
    let best = null;
    for (const p of products) if (p.nota != null && (!best || p.nota > best.nota)) best = p;
    return best?.slug;
  }, [products]);

  const sorted = useMemo(() => {
    const copy = [...products];
    copy.sort((a, b) => (asc ? toNum(a.price) - toNum(b.price) : toNum(b.price) - toNum(a.price)));
    return copy;
  }, [products, asc]);

  const Chip = ({ children }) => (
    <span className="u-data text-[11px] bg-brand-50 text-brand-700 rounded-full px-2.5 py-1 whitespace-nowrap">{children}</span>
  );

  return (
    <div className="rounded-2xl border border-line overflow-hidden bg-surface">
      <div className="flex items-center justify-between bg-paper-200 px-4 py-3 border-b border-line">
        <p className="font-display font-semibold text-ink">Comparativa rápida</p>
        <button
          onClick={() => setAsc((v) => !v)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          <ArrowUpDown size={15} /> Precio {asc ? "ascendente" : "descendente"}
        </button>
      </div>

      <ul className="divide-y divide-line">
        {sorted.map((p) => {
          const isTop = p.slug === topSlug;
          return (
            <li
              key={p.slug}
              className={
                "p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 " +
                (isTop ? "bg-paper-200/60" : "hover:bg-paper-200/40 transition-colors")
              }
            >
              {/* Bloque producto */}
              <div className="flex items-start gap-3 min-w-0 flex-1">
                <Thumb src={p.image} alt={p.name} />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    {isTop && (
                      <span className="u-data text-[10px] font-semibold bg-honey-500 text-[#2b1c08] rounded-full px-2 py-0.5">TOP</span>
                    )}
                    {p.nota != null && (
                      <span className="u-data text-[11px] font-semibold text-brand-700">{p.nota}/5</span>
                    )}
                  </div>
                  <a href={`/productos/${p.slug}/`} className="block font-semibold text-ink leading-snug hover:text-brand-700 mt-0.5">
                    {p.name}
                  </a>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <Chip>{short(p.material)}</Chip>
                    <Chip>{short(p.noise)}</Chip>
                    <Chip>{short(p.capacity)}</Chip>
                  </div>
                </div>
              </div>

              {/* Precio + CTA */}
              <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 shrink-0 pl-15 sm:pl-0">
                <span className="u-data text-lg font-semibold text-ink whitespace-nowrap">{p.price} €</span>
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  onClick={() => trackAffiliateClick({ location: "comparison", productName: p.name, price: p.price })}
                  className="btn-honey inline-flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap"
                >
                  Ver <ExternalLink size={14} />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}