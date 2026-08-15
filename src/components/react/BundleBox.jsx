// ============================================================================
// BundleBox.jsx — Isla React "Comprados juntos habitualmente".
//
// Replica el bloque de Amazon (fuente + filtro + accesorio) con casillas,
// total en vivo y un botón "Añadir N a la cesta" que usa el formulario oficial
// Add-to-Cart de Amazon (/gp/aws/cart/add.html) con tu tag de afiliado.
//
// Se monta desde BundleBox.astro, que resuelve los slugs y le pasa `items`
// como objetos planos (serializables). NO importa de product.js ni de los
// datos: recibe todo por props para que la isla sea ligera.
//
// Uso (vía wrapper): <BundleBox client:visible ... />
// ============================================================================
import { useMemo, useState } from "react";

// "19,99" | 19.99 -> 19.99 (Number). Devuelve 0 si no se puede parsear.
const toNum = (v) => {
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isNaN(n) ? 0 : n;
};

// 19.99 -> "19,99 €"
const eur = (n) => `${n.toFixed(2).replace(".", ",")} €`;

// Enlace de afiliado por producto: usa amazonUrl si lo pusiste; si no, lo
// construye desde el ASIN + tag; y si no hay ASIN, cae a la ficha interna.
const itemHref = (it, tag) => {
  if (it.amazonUrl && it.amazonUrl.startsWith("http")) return it.amazonUrl;
  if (it.asin) return `https://www.amazon.es/dp/${it.asin}?tag=${tag}`;
  return it.href || "#";
};

// Etiqueta corta y distinguible para el enlace "Ver … suelto".
// Evita repetir la marca cuando fuente y filtro son de la misma (p. ej. GIOTOHUN):
// preferimos "la fuente" / "el filtro" y, si no, un recorte del nombre.
const shortLabel = (it) => {
  const n = (it.name || "").toLowerCase();
  if (/filtro|recambio|esponja|cartucho/.test(n)) return "el filtro";
  if (/fuente|bebedero|dispensador/.test(n)) return "la fuente";
  const words = (it.name || it.brand || "").split(/\s+/).slice(0, 3).join(" ");
  return words || it.brand || "este";
};

// Placeholder de imagen (huella) cuando el producto aún no tiene foto.
const Paw = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-brand-300" fill="currentColor" aria-hidden="true">
    <path d="M12 14.5c-2.4 0-4.5 1.7-4.5 3.8 0 1.5 1.3 2.2 2.7 2.2.9 0 1.2-.3 1.8-.3s.9.3 1.8.3c1.4 0 2.7-.7 2.7-2.2 0-2.1-2.1-3.8-4.5-3.8zM6.2 12.6c1 0 1.7-1.1 1.5-2.5C7.5 8.7 6.6 7.8 5.6 8c-1 .2-1.5 1.4-1.3 2.7.2 1.1 1 1.9 1.9 1.9zm11.6 0c.9 0 1.7-.8 1.9-1.9.2-1.3-.3-2.5-1.3-2.7-1-.2-1.9.7-2.1 2.1-.2 1.4.5 2.5 1.5 2.5zM9.6 9.2c1 0 1.7-1.1 1.5-2.5C10.9 5.4 10 4.5 9 4.7c-1 .2-1.5 1.4-1.3 2.7.2 1.1 1 1.8 1.9 1.8zm4.8 0c.9 0 1.7-.7 1.9-1.8.2-1.3-.3-2.5-1.3-2.7-1-.2-1.9.7-2.1 2.1-.2 1.4.6 2.4 1.5 2.4z" />
  </svg>
);

const Thumb = ({ it }) => (
  <div className="w-full aspect-square rounded-xl bg-paper-200 border border-line overflow-hidden flex items-center justify-center">
    {it.image ? (
      // eslint-disable-next-line
      <img src={it.image} alt={it.name} loading="lazy" className="w-full h-full object-contain p-2" />
    ) : (
      <Paw />
    )}
  </div>
);

export default function BundleBox({
  items = [],
  tag = "micifu-21",
  title = "Comprados juntos habitualmente",
  cartBase = "https://www.amazon.es/gp/aws/cart/add.html",
}) {
  if (!items.length) return null;

  // El primero (la fuente/producto principal) va marcado y bloqueado.
  // Todo marcado por defecto (muestra el precio combinado); todo desmarcable.
  // ¿Prefieres el recambio APAGADO por defecto? Cambia `() => true` por
  // `(_, i) => i === 0` (solo el principal marcado de salida).
  const [checked, setChecked] = useState(() => items.map(() => true));

  const toggle = (i) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  const selected = items.filter((_, i) => checked[i]);
  const total = useMemo(
    () => selected.reduce((sum, it) => sum + toNum(it.price), 0),
    [selected]
  );
  const withAsin = selected.filter((it) => it.asin);
  const canCart = withAsin.length > 0;

  // URL oficial Add-to-Cart de Amazon con tu tag.
  const cartUrl = useMemo(() => {
    if (!canCart) return null;
    const params = withAsin
      .map((it, i) => `ASIN.${i + 1}=${it.asin}&Quantity.${i + 1}=1`)
      .join("&");
    return `${cartBase}?AssociateTag=${tag}&${params}`;
  }, [withAsin, tag, cartBase, canCart]);

  const onCTA = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "affiliate_click", {
        affiliate_location: "bundle",
        product_name: selected.map((it) => it.name).join(" + "),
        price: total.toFixed(2),
      });
    }
  };

  const n = selected.length;

  return (
    <section className="card p-5 sm:p-6" aria-label={title}>
      <div className="flex items-center gap-2 mb-5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-400" />
        <h2 className="font-display font-extrabold text-ink text-xl sm:text-2xl">{title}</h2>
      </div>

      {/* Fila de productos con "+" entre ellos */}
      <div className="flex flex-col sm:flex-row sm:items-stretch gap-3 sm:gap-2">
        {items.map((it, i) => (
          <div key={it.slug || i} className="contents sm:flex sm:items-center sm:gap-2">
            <label
              className={[
                "group relative flex sm:flex-col gap-3 sm:gap-2 rounded-xl border p-3 cursor-pointer transition-colors sm:w-40 sm:shrink-0",
                checked[i] ? "border-brand-300 bg-brand-50/60" : "border-line bg-white hover:border-brand-200",
              ].join(" ")}
            >
              <span className="absolute top-2 left-2 z-10">
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() => toggle(i)}
                  className="w-4 h-4 accent-brand-600"
                  aria-label={`Incluir ${it.name}`}
                />
              </span>

              <div className="w-20 sm:w-full shrink-0">
                <Thumb it={it} />
              </div>

              <div className="min-w-0 sm:mt-1">
                {it.brand && (
                  <p className="text-[10px] font-semibold text-brand-700 uppercase tracking-wide">{it.brand}</p>
                )}
                <p className="text-xs text-ink leading-snug line-clamp-2 mt-0.5">
                  {it.href ? (
                    <a href={it.href} className="hover:text-brand-700">{it.name}</a>
                  ) : (
                    it.name
                  )}
                </p>
                <p className="u-data text-sm font-semibold text-ink mt-1">
                  {eur(toNum(it.price))}
                  {it.originalPrice && (
                    <span className="u-data text-xs text-ink-500 line-through ml-1.5">{eur(toNum(it.originalPrice))}</span>
                  )}
                </p>
              </div>
            </label>

            {i < items.length - 1 && (
              <span className="hidden sm:flex items-center justify-center text-ink-500 text-2xl font-light select-none" aria-hidden="true">+</span>
            )}
          </div>
        ))}
      </div>

      {/* Total + CTA */}
      <div className="mt-5 pt-5 border-t border-line flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
        <p className="text-ink">
          Precio total{" "}
          <span className="u-data text-2xl font-bold text-ink ml-1">{eur(total)}</span>
          <span className="block text-xs text-ink-500 mt-0.5">
            {n} artículo{n === 1 ? "" : "s"} · precios de Amazon, pueden variar
          </span>
        </p>

        {canCart ? (
          <a
            href={cartUrl}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={onCTA}
            data-affiliate-location="bundle"
            className="btn btn-accent w-full sm:w-auto justify-center"
          >
            Añadir {withAsin.length} a la cesta
          </a>
        ) : (
          <span className="text-xs text-ink-500 sm:text-right max-w-[16rem]">
            {n === 0
              ? "Marca al menos un producto para añadirlo a la cesta."
              : "Añade el ASIN a estos productos para activar el botón de cesta conjunta."}
          </span>
        )}
      </div>

      {/* Enlaces individuales (fallback + accesibilidad) */}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {selected.map((it, i) => (
          <a
            key={it.slug || i}
            href={itemHref(it, tag)}
            target="_blank"
            rel="sponsored nofollow noopener"
            data-affiliate-location="bundle-item"
            data-product-name={it.name}
            className="text-xs font-semibold text-brand-700 hover:text-brand-800 hover:underline"
          >
            Ver {shortLabel(it)} suelto{it.brand ? ` (${it.brand})` : ""} ↗
          </a>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-ink-500">
        Enlaces de afiliado: si compras a través de ellos, Felinlab se lleva una pequeña comisión sin coste para ti.
      </p>
    </section>
  );
}