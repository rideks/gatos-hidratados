// ============================================================================
// Notas editoriales PROPIAS (E-E-A-T). Son TUYAS, no de Amazon: solo con esto
// el schema emite una Review firmada por el autor (nunca aggregateRating ajeno).
//
// CÓMO SE CALCULAN (sé transparente y que la copia de "Cómo puntuamos" lo diga):
// nota = análisis por CRITERIOS OBJETIVOS, no una prueba a ciegas:
//   1) Material (acero 304 íntegro / cerámica > bandeja de acero + cuerpo ABS >
//      plástico sin BPA). Es el mayor factor de higiene y durabilidad.
//   2) Filtrado (multi-etapa con resina de intercambio iónico > solo carbón).
//   3) Ruido declarado (< 25 dB > < 30 > < 35 > ~40).
//   4) Fiabilidad (corte por nivel bajo, ventana de nivel, calidad de bomba).
//   5) Marca y recambios (soporte y disponibilidad de filtros a largo plazo).
//
// TECHO: 4.7 es el máximo por análisis. El 4.8–5.0 se reserva para una unidad
// que hayas PROBADO físicamente y te haya convencido de verdad.
//
// ⚠️ RESERVA la palabra "probado" / el sello "probado en casa" SOLO para las
// unidades que tengas físicamente y hayas medido. Hasta entonces esto es un
// análisis honesto por criterios, no un test.
// ============================================================================
const SCORES = {
  // ── Calidad real: acero 304 íntegro / cerámica + marca con soporte ─────────
  "petlibro-acero-inoxidable-2l": { rating: 4.7, date: "2026-08-01" },        // Acero 304 íntegro, marca sólida, caudal regulable. La referencia.
  "petkit-eversweet-max-2-3l": { rating: 4.6, date: "2026-08-11" },           // 304 + PPO, sin cable, app, batería 5000 mAh (contras: precio, app, PPO no es acero)
  "catit-pixi-acero-inoxidable": { rating: 4.5, date: "2026-08-02" },         // Parte de acero + triple filtro con resina, recambios oficiales
  "petkit-eversweet-3-pro-inalambrica": { rating: 4.5, date: "2026-08-04" },  // Bandeja de acero, sin cable, app de consumo (capacidad justa 1,6 L)
  "ipettie-ceramica-21l": { rating: 4.4, date: "2026-08-07" },                // Cerámica (máxima higiene); resta fragilidad y menos recambios
  "veken-acero-32l-varios-gatos": { rating: 4.4, date: "2026-08-03" },        // Acero, 3,2 L, incluye filtros; buena para multigato

  // ── Buen acero, pero marca genérica (soporte de recambios con interrogante) ─
  "feelneedy-sin-cable-32l": { rating: 4.3, date: "2026-08-11" },             // Acero + sin cable + filtro visible; la mejor de las genéricas
  "apauk-acero-inoxidable-32l": { rating: 4.3, date: "2026-08-11" },          // Acero 304 + recambios garantizados UE (plus real para una genérica)
  "giotohun-acero-inoxidable-22l": { rating: 4.2, date: "2026-08-11" },       // Acero 304 + ventana de nivel; filtro específico, marca genérica
  "feelneedy-acero-inoxidable-28l": { rating: 4.1, date: "2026-08-11" },      // Acero, pero su propia ficha ya apunta a un modelo más nuevo (rev. superada)
  "petkit-eversweet-solo-2": { rating: 4.1, date: "2026-08-06" },             // Plato de plástico (techo de material), pero marca fiable + app de consumo

  // ── "Acero parcial": bandeja/cuenco de acero + cuerpo ABS (no es acero) ─────
  "balimopet-acero-inoxidable-26l": { rating: 4.0, date: "2026-08-11" },      // Bandeja de acero pero cuerpo ABS; salva la reserva de emergencia y el LED
  "feelneedy-sin-cable-4l": { rating: 3.9, date: "2026-08-11" },              // Gran capacidad (4 L), pero cuerpo mayormente ABS y < 35 dB (menos silenciosa)

  // ── Plástico de marca sólida (ergonomía/recambios por encima del genérico) ──
  "catit-flower-fountain-3l": { rating: 4.0, date: "2026-08-08" },            // Plástico, pero marca con recambios + ergonomía real para gato senior

  // ── Populares por precio, no por calidad: plástico genérico ────────────────
  "giotohun-plastico-2l": { rating: 3.8, date: "2026-08-11" },                // Plástico genérico; el volumen de reseñas es popularidad, no calidad
  "pawpoll-plastico-22l": { rating: 3.7, date: "2026-08-11" },                // Plástico genérico correcto, pero poroso y sin soporte de marca
  "nenozi-plastico-22l": { rating: 3.7, date: "2026-08-11" },                 // La más barata; plástico genérico

  // ── Categoría distinta: NO es una fuente ───────────────────────────────────
  "amazon-basics-dispensador-gravedad-38l": { rating: 3.6, date: "2026-08-11" }, // Fiable, pero por gravedad: agua estancada, sin filtrado. Etiquétalo aparte.

  // NOTA: `petkit-sin-cable-sensor-3l` era un placeholder que se solapa con la
  // Eversweet Max 2. Si lo sustituyes por la Max 2, ELIMINA esta línea. Si lo
  // mantienes como producto distinto (plato de plástico), ronda 4.0:
  // "petkit-sin-cable-sensor-3l": { rating: 4.0, date: "2026-08-05" },

  // ── Filtros de recambio (oficiales; cumplen bien su función) ───────────────
  "filtros-catit-triple-accion": { rating: 4.4, date: "2026-08-06" },         // Con resina de intercambio iónico (agua dura)
  "filtros-petkit-30": { rating: 4.4, date: "2026-08-06" },
  "filtros-petlibro-dockstream": { rating: 4.3, date: "2026-08-06" },
  "filtros-cat-mate-cartuchos": { rating: 4.3, date: "2026-08-06" },
  "prefiltros-espuma-petsafe": { rating: 4.1, date: "2026-08-06" },           // Solo filtrado mecánico: complemento, no sustituto del carbón

  // ── Comederos (silo apagado) — sin recalibrar aquí ─────────────────────────
  "petkit-comedero-automatico-28l": { rating: 4.5, date: "2026-08-11" },
  "honeyguaridan-a36-comedero-acero": { rating: 4.4, date: "2026-08-11" },
  "nobleza-2en1-comedero-bebedero": { rating: 3.9, date: "2026-08-11" },
};

export const getEditorialScore = (slug) => SCORES[slug] || null;