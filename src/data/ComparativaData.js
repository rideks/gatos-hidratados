// ============================================================================
// Comparativas "versus" (material-vs-material o marca-vs-marca). Cada entrada
// genera sola la página /comparativas/[slug] (tabla + pros/cons + veredicto +
// FAQ + schema). Es un formato distinto al de las comparativas "mejores X".
// ============================================================================
export const ENTITIES = {
  acero: {
    type: "material",
    name: "Fuente de acero inoxidable",
    tagline: "Higiene máxima y cero biofilm.",
    pros: [
      "No poroso: no acumula la película viscosa que rechazan los gatos",
      "Muy fácil de limpiar; muchas piezas van al lavavajillas",
      "Duradero y difícil de volcar",
    ],
    cons: ["Precio algo más alto que el plástico", "Los depósitos internos suelen seguir siendo de plástico"],
  },
  plastico: {
    type: "material",
    name: "Fuente de plástico",
    tagline: "Barata y ligera, pero exige más mantenimiento.",
    pros: ["La más económica para empezar", "Ligera y con muchos modelos disponibles"],
    cons: [
      "Poroso: acumula biofilm y puede provocar acné felino",
      "Requiere limpieza más frecuente",
      "Menos duradera",
    ],
  },
  ceramica: {
    type: "material",
    name: "Fuente de cerámica",
    tagline: "La más higiénica y estable, también la más frágil.",
    pros: ["Superficie esmaltada muy higiénica", "Pesada: no la vuelca el gato", "Estéticamente la más cuidada"],
    cons: ["Frágil ante golpes", "Más cara y con menos recambios genéricos"],
  },
};

export const COMPARISONS = [
  {
    slug: "fuente-acero-vs-plastico-gatos",
    seo: {
      title: "Fuente de acero vs plástico para gatos: cuál elegir",
      description:
        "Comparamos fuentes de agua de acero inoxidable frente a plástico para gatos: higiene, acné felino, mantenimiento, durabilidad y precio.",
    },
    a: "acero",
    b: "plastico",
    rows: [
      { label: "Higiene / biofilm", a: "Excelente", b: "Regular", winner: "a" },
      { label: "Acné felino", a: "Baja incidencia", b: "Mayor riesgo", winner: "a" },
      { label: "Mantenimiento", a: "Fácil", b: "Frecuente", winner: "a" },
      { label: "Durabilidad", a: "Alta", b: "Media", winner: "a" },
      { label: "Precio", a: "Medio", b: "Bajo", winner: "b" },
    ],
    verdict:
      "Para casi todos los gatos, el acero inoxidable compensa: la higiene y la ausencia de biofilm reducen el riesgo de acné felino y de que el gato deje de beber. El plástico solo tiene sentido como puerta de entrada barata para comprobar si tu gato acepta una fuente.",
    cta: { label: "Ver las mejores fuentes de acero", path: "/fuentes-acero-inoxidable-gatos/" },
    subcategory: "fuentes-agua",
    faqs: [
      {
        q: "¿El acero previene el acné felino?",
        a: "Ayuda mucho. Al no ser poroso, no acumula bacterias en la zona de contacto con la barbilla, que es un factor asociado al acné felino. No es magia: hay que limpiarlo igualmente a menudo.",
      },
    ],
  },
];

export const getComparison = (slug) => COMPARISONS.find((c) => c.slug === slug);
