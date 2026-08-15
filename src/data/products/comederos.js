// ============================================================================
// SILO COMEDEROS (APAGADO) — semilla de productos (gear: comederos/cuencos).
// Se activa poniendo SILOS.comederos.active = true en data/taxonomy.js.
//
// Mismo esquema que las fuentes: image, amazonUrl y (a veces) asin en blanco
// para que los completes tú. Datos de modelos REALES; reseñas propias.
// ============================================================================
import { PRODUCT_TAGS as T } from "../productTags.js";

const P = (p) => ({
  currency: "EUR",
  ...p,
  amazonUrl: p.amazonUrl ?? "",
  sku: p.sku || p.asin || undefined,
});

export const comederosProducts = [
  /*P({
    id: "petkit-fresh-element-solo-3l",
    slug: "petkit-fresh-element-solo-3l",
    subcategory: "comederos-automaticos",
    brand: "PETKIT",
    name: "PETKIT Fresh Element Solo Comedero automático 3 L con app",
    price: "69,99",
    material: "ABS alimentario + cubeta de acero inox. 304",
    capacity: "3 litros (~15 días para 1 gato)",
    color: "Blanco leche",
    image: "",
    amazonUrl: "",
    asin: "B0CD7NRW37", // = sku en el schema
    rating: "4.4",
    reviews: "4218",
    tags: [T.STAINLESS_STEEL, T.BPA_FREE, T.BATTERY],
    bestFor: "Programar las raciones desde el móvil con cubeta de acero y respaldo a pilas por si se va la luz.",
    specs: {
      material: "ABS de calidad alimentaria + cubeta de acero inox. 304",
      capacity: "3 L (~1,33 kg de pienso, ~15 días para 1 gato)",
      flow: "Hasta 10 comidas/día · 10 g por ración, hasta 5 raciones/comida",
      power: "Cable USB + 3 pilas tipo D de respaldo (no incluidas)",
      cats: "1 gato (versión de un cuenco)",
    },
    highlights: {
      pros: [
        "Control por app (WiFi 2,4 GHz): horarios, raciones y registro de comidas desde el móvil",
        "Cubeta de acero inoxidable 304 desmontable: más higiénica que el plástico",
        "Triple sellado de frescura (desecante + tira selladora + salida autocierre) y respaldo a pilas",
      ],
      cons: [
        "Solo pienso seco (partículas < 12 mm): nada de comida húmeda",
        "El adaptador USB y las pilas de respaldo no vienen incluidos",
        "De un cuenco: en casa con varios gatos uno puede comerse la ración de otro",
      ],
    },
    features: [
      "Programación de 1 a 10 comidas al día con raciones de 10 g",
      "Cubeta de acero inoxidable 304 apta para lavavajillas",
      "Triple sistema de frescura y alimentación dual (USB + pilas de respaldo)",
    ],
    dynamicReview:
      "El Fresh Element Solo es el comedero de la gama PETKIT pensado para emparejarse con sus fuentes, y se nota: se programa cómodo desde la app, la cubeta es de acero 304 (mejor higiene que el plástico) y el triple sellado con desecante mantiene el pienso crujiente. Con 3 L cubre unos quince días para un gato. Es honesto decir sus límites: solo va con pienso seco de grano pequeño, el adaptador y las pilas de respaldo se compran aparte, y al ser de un cuenco no distingue entre gatos. Para automatizar las raciones de un gato sin complicarte, cumple de sobra.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-15T00:00:00.000Z",
  }),*/
];
