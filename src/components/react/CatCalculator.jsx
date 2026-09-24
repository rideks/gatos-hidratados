import { useState } from "react";
import { Droplets, UtensilsCrossed, Clock } from "lucide-react";

const CLAMP = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

export default function CatCalculator() {
  const [peso, setPeso] = useState(4);
  const [dieta, setDieta] = useState("seco");

  const p = CLAMP(Number(peso) || 0, 0.5, 12);
  const aguaLow = Math.round(p * 50);
  const aguaHigh = Math.round(p * 60);
  const comidaLow = Math.round(p * 12);
  const comidaHigh = Math.round(p * 14);

  const notaDieta = {
    seco: "Con pienso seco, casi toda esa agua tiene que beberla tu gato. Facilítale el acceso: varios puntos de agua y, si le cuesta, una fuente.",
    mixta: "Con dieta mixta, parte del agua llega con la comida húmeda; el resto tendrá que beberla. Un punto de agua atractivo ayuda.",
    humeda: "Con comida húmeda, cubre gran parte del agua con la propia dieta (la lata es ~80 % agua), así que beberá poco del cuenco. Es normal.",
  }[dieta];

  const dietas = [
    { id: "seco", label: "Solo seco" },
    { id: "mixta", label: "Mixta" },
    { id: "humeda", label: "Solo húmeda" },
  ];

  return (
    <div className="card p-5 sm:p-6">
      <p className="kicker mb-1">Calculadora</p>
      <h2 className="font-display font-semibold text-ink text-xl sm:text-2xl mb-4">
        ¿Cuánta agua y comida necesita tu gato?
      </h2>

      <label htmlFor="peso" className="block text-sm font-semibold text-ink-700 mb-1">
        Peso de tu gato: <span className="u-data text-brand-700">{p} kg</span>
      </label>
      <input
        id="peso"
        type="range"
        min="0.5"
        max="12"
        step="0.5"
        value={p}
        onChange={(e) => setPeso(e.target.value)}
        className="w-full accent-brand-600"
      />
      <div className="flex justify-between text-xs text-ink-400 u-data mt-1">
        <span>0,5 kg</span>
        <span>12 kg</span>
      </div>

      <p className="text-sm font-semibold text-ink-700 mt-5 mb-2">Tipo de comida</p>
      <div className="grid grid-cols-3 gap-2" role="group" aria-label="Tipo de comida">
        {dietas.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setDieta(d.id)}
            aria-pressed={dieta === d.id}
            className={
              "rounded-lg border px-3 py-2 text-sm font-semibold transition-colors " +
              (dieta === d.id
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-line bg-surface text-ink hover:border-brand-400")
            }
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mt-6">
        <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
          <span className="inline-flex items-center gap-1.5 kicker !text-brand-700">
            <Droplets className="w-3.5 h-3.5" /> Agua al día
          </span>
          <p className="u-data text-2xl font-semibold text-ink mt-1">
            {aguaLow}–{aguaHigh} <span className="text-base text-ink-500">ml</span>
          </p>
          <p className="text-xs text-ink-500 mt-1">
            Líquido total, incluyendo el que aporta la comida.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-paper-200/60 p-4">
          <span className="inline-flex items-center gap-1.5 kicker">
            <UtensilsCrossed className="w-3.5 h-3.5" /> Comida (pienso seco)
          </span>
          <p className="u-data text-2xl font-semibold text-ink mt-1">
            {comidaLow}–{comidaHigh} <span className="text-base text-ink-500">g</span>
          </p>
          <p className="text-xs text-ink-500 mt-1">
            Orientativo. Manda la tabla del saco para su peso.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-paper-200/60 p-4">
          <span className="inline-flex items-center gap-1.5 kicker">
            <Clock className="w-3.5 h-3.5" /> Tomas al día
          </span>
          <p className="u-data text-2xl font-semibold text-ink mt-1">2–4</p>
          <p className="text-xs text-ink-500 mt-1">
            Reparte la ración en varias tomas.{" "}
            <a href="/cuantas-veces-come-un-gato/" className="text-brand-700 underline underline-offset-2">
              Cómo repartirlas
            </a>
            .
          </p>
        </div>
      </div>

      <p className="text-sm text-ink-700 bg-surface border border-line rounded-lg px-3.5 py-3 mt-4">
        {notaDieta}
      </p>

      <p className="text-xs text-ink-400 mt-3">
        Cifras orientativas para un gato adulto sano. La edad, la actividad, la
        castración o cualquier enfermedad las cambian: úsalas como guía, no como
        norma, y consúltalo con tu veterinario.
      </p>
    </div>
  );
}