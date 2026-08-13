import { useState, useMemo } from "react";
import { ArrowUpDown, ExternalLink } from "lucide-react";
import { TAG_LABELS } from "../../data/ProductData.js";
import { trackAffiliateClick } from "../../utils/trackAffiliateClick.js";

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
    <div className="rounded-2xl border border-brand-200 overflow-hidden">
      <div className="flex items-center justify-between bg-slate-50 px-4 py-3 border-b border-brand-200">
        <p className="font-bold text-ink">Comparativa rápida</p>
        <button
          onClick={() => setAsc((v) => !v)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          <ArrowUpDown size={15} />
          Precio {asc ? "ascendente" : "descendente"}
        </button>
      </div>

      <ul className="divide-y divide-slate-100">
        {sorted.map((p, i) => (
          <li key={p.slug} className="flex items-center gap-3 p-4">
            <span className="text-sm font-black text-slate-400 w-6 text-center">{i + 1}</span>
            <img src={p.image} alt={p.name} width={56} height={56}
                 className="w-14 h-14 rounded-lg object-cover bg-slate-100 shrink-0" loading="lazy" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-ink truncate">{p.name}</p>
              <p className="text-xs text-slate-500 truncate">
                {(p.tags || []).map((t) => TAG_LABELS[t]).filter(Boolean).slice(0, 3).join(" · ")}
              </p>
            </div>
            <span className="font-black text-ink whitespace-nowrap">{p.price} €</span>
            <a
              href={p.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick({ location: "comparison", productName: p.name, price: p.price })}
              className="inline-flex items-center gap-1 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold px-3.5 py-2 rounded-full transition whitespace-nowrap"
            >
              Ver <ExternalLink size={14} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
