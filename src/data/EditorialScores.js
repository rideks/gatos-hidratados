// ============================================================================
// Notas editoriales PROPIAS (E-E-A-T). Son TUYAS, no de Amazon: solo con esto
// el schema emite una Review firmada por el autor (nunca aggregateRating de
// datos ajenos). Ajusta la nota tras probar cada producto.
// ============================================================================
const SCORES = {
  // Fuentes
  "petlibro-acero-inoxidable-2l": { rating: 4.7, date: "2026-08-01" },
  "catit-pixi-acero-inoxidable": { rating: 4.4, date: "2026-08-02" },
  "veken-acero-32l-varios-gatos": { rating: 4.5, date: "2026-08-03" },
  "petkit-eversweet-3-pro-inalambrica": { rating: 4.6, date: "2026-08-04" },
  "petkit-sin-cable-sensor-3l": { rating: 4.3, date: "2026-08-05" },
  "petkit-eversweet-solo-2": { rating: 4.5, date: "2026-08-06" },
  "ipettie-ceramica-21l": { rating: 4.4, date: "2026-08-07" },
  "catit-flower-fountain-3l": { rating: 4.1, date: "2026-08-08" },
  "giotohun-acero-inoxidable-22l": { rating: 4.5, date: "2026-08-11" },
  "feelneedy-acero-inoxidable-28l": { rating: 4.4, date: "2026-08-11" },
  "feelneedy-sin-cable-32l": { rating: 4.6, date: "2026-08-11" },
  "nenozi-plastico-22l": { rating: 4.1, date: "2026-08-11" },
  "amazon-basics-dispensador-gravedad-38l": { rating: 4.3, date: "2026-08-11" },
  "giotohun-plastico-2l": { rating: 4.2, date: "2026-08-11" },
  "apauk-acero-inoxidable-32l": { rating: 4.4, date: "2026-08-11" },
  "balimopet-acero-inoxidable-26l": { rating: 4.5, date: "2026-08-11" },
  "pawpoll-plastico-22l": { rating: 4.2, date: "2026-08-11" },
  "feelneedy-sin-cable-4l": { rating: 4.5, date: "2026-08-11" },
  "petkit-eversweet-max-2-3l": { rating: 4.5, date: "2026-08-11" },
  // Filtros
  "filtros-catit-triple-accion": { rating: 4.5, date: "2026-08-06" },
  "filtros-petkit-30": { rating: 4.4, date: "2026-08-06" },
  "filtros-petlibro-dockstream": { rating: 4.5, date: "2026-08-06" },
  "filtros-cat-mate-cartuchos": { rating: 4.4, date: "2026-08-06" },
  "prefiltros-espuma-petsafe": { rating: 4.3, date: "2026-08-06" },
  // Comederos (silo apagado)
  "petkit-comedero-automatico-28l": { rating: 4.5, date: "2026-08-11" },
  "honeyguaridan-a36-comedero-acero": { rating: 4.4, date: "2026-08-11" },
  "nobleza-2en1-comedero-bebedero": { rating: 3.9, date: "2026-08-11" },
};

export const getEditorialScore = (slug) => SCORES[slug] || null;
