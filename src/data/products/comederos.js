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
  P({
    id: "petkit-comedero-automatico-28l",
    slug: "petkit-comedero-automatico-28l",
    subcategory: "comederos-automaticos",
    brand: "PETKIT",
    name: "PETKIT Comedero automático 2,8 L con cuenco de acero y app",
    price: "49,99", // ORIENTATIVO: verifica el precio actual
    material: "ABS + cuenco de acero inoxidable",
    capacity: "2,8 litros",
    color: "Blanco",
    image: "",
    amazonUrl: "",
    asin: "B08GS1CPHH", // ASIN del producto (= sku en el schema)
    editorsPick: true,
    tags: [T.STAINLESS_STEEL, T.BPA_FREE, T.LED, T.DISHWASHER_SAFE],
    bestFor: "Programar la comida del gato desde el móvil con cuenco de acero higiénico.",
    specs: {
      material: "ABS + cuenco de acero inox.",
      capacity: "2,8 L (~15 días para 1 gato)",
      flow: "Hasta 10 comidas/día, porciones 5-50 g",
      power: "Cable USB + pilas de respaldo",
      cats: "1 gato (versión de 1 cuenco)",
    },
    highlights: {
      pros: [
        "Control por app (WiFi 2,4 GHz): programa comidas y raciones desde el móvil",
        "Cuenco de acero inoxidable extraíble: más higiénico que el plástico",
        "Doble sellado de frescura y sensor de peso que avisa cuando se vacía",
      ],
      cons: [
        "Requiere adaptador USB (no siempre incluido) y depende algo de la app",
        "Solo pienso seco (no comida húmeda)",
        "Para 1 gato: en hogares multigato uno puede comerse la ración de otro",
      ],
    },
    features: [
      "Programación de 1 a 10 comidas al día (raciones 5-50 g)",
      "Cuenco de acero inoxidable apto para lavavajillas",
      "Sistema de doble sellado antihumedad y energía de respaldo con pilas",
    ],
    dynamicReview:
      "De los comederos automáticos, uno de los más equilibrados: se programa cómodo desde la app, el cuenco es de acero (mejor higiene que el plástico) y el doble sellado mantiene el pienso crujiente. Honestamente, es solo para pienso seco y está pensado para un gato; en casas con varios, valora un modelo de doble cuenco o con reconocimiento por chip. Buena compra si quieres automatizar las raciones sin complicarte.",
    datePublished: "2026-08-11",
    updatedAt: "2026-08-11T00:00:00.000Z",
  }),
  P({
    id: "honeyguaridan-a36-acero",
    slug: "honeyguaridan-a36-comedero-acero",
    subcategory: "comederos-automaticos",
    brand: "HoneyGuaridan",
    name: "HoneyGuaridan A36 Comedero automático con cuenco de acero",
    price: "54,99", // ORIENTATIVO: verifica el precio actual
    material: "Acero inoxidable + ABS",
    capacity: "Cuenco 600 g / depósito programable",
    color: "Blanco",
    image: "",
    amazonUrl: "",
    asin: "", // añade el ASIN cuando lo tengas
    editorsPick: true,
    tags: [T.STAINLESS_STEEL, T.BPA_FREE, T.BATTERY],
    bestFor: "Quien quiere un comedero robusto con sensor infrarrojo y buen acabado.",
    specs: {
      material: "Cuenco de acero inoxidable",
      capacity: "Cuenco 600 g",
      flow: "Programable, control de porciones",
      power: "Red + pilas (tipo D)",
      cats: "1 gato",
    },
    highlights: {
      pros: [
        "Cuenco de acero inoxidable resistente y buen acabado de construcción",
        "Sensor infrarrojo que detecta si la comida se ha servido bien (evita atascos)",
        "Protección antihumedad con desecante para mantener el pienso fresco",
      ],
      cons: [
        "Usa pilas tipo D (menos habituales y más caras)",
        "Solo pienso seco",
        "Para 1 gato",
      ],
    },
    features: [
      "Cuenco de acero inoxidable de 600 g",
      "Sensor infrarrojo de dispensación y sistema desecante antihumedad",
      "Programación de porciones y varias comidas al día",
    ],
    dynamicReview:
      "Un comedero automático bien construido, con cuenco de acero y un sensor infrarrojo que confirma que la comida ha caído (menos atascos que los básicos). Su pega más señalada es que funciona con pilas tipo D, poco estándar y algo caras. Si priorizas robustez y acabado sobre la conectividad, es una opción sólida.",
    datePublished: "2026-08-11",
    updatedAt: "2026-08-11T00:00:00.000Z",
  }),
  P({
    id: "nobleza-2en1-comedero-bebedero",
    slug: "nobleza-2en1-comedero-bebedero",
    subcategory: "comederos-automaticos",
    brand: "Nobleza",
    name: "Nobleza 2 en 1: comedero + bebedero automático por gravedad",
    price: "25,99", // ORIENTATIVO: verifica el precio actual
    material: "Plástico (PP)",
    capacity: "2,2 L comida + 1 L agua",
    color: "Gris",
    image: "",
    amazonUrl: "",
    asin: "B0FM71H4PZ", // ASIN del producto (= sku en el schema)
    rating: "3.9",
    reviews: "185",
    tags: [T.LARGE_CAPACITY],
    bestFor: "Combinar comida y agua para ausencias cortas de 1-2 días con 1-2 gatos.",
    specs: {
      material: "Plástico PP",
      capacity: "2,2 L comida + 1 L agua",
      flow: "Por gravedad (no programable)",
      power: "Sin electricidad",
      cats: "1-2 gatos (ausencias cortas)",
    },
    highlights: {
      pros: [
        "2 en 1: dispensa comida y agua por gravedad, sin cables ni programación",
        "Doble depósito de buena capacidad (2,2 L + 1 L)",
        "Diseño antiderrames y fácil de cargar y limpiar",
      ],
      cons: [
        "Por gravedad: no controla raciones (el gato come a demanda)",
        "El agua queda estancada y sin filtrar (menos apetecible e higiénica que una fuente)",
        "Valoración media más baja (3,9): calidad justa",
      ],
    },
    features: [
      "Comedero por gravedad de 2,2 L + bebedero de 1 L",
      "Diseño antiderrames y antihair",
      "Sin electricidad: solo rellenar",
    ],
    dynamicReview:
      "Un 2 en 1 barato y práctico para ausencias cortas: rellena y olvídate un par de días. Ahora bien, seamos honestos: al ser por gravedad no controla raciones (mal para gatos que comen sin freno) y el agua queda estancada y sin filtrar, así que para hidratación de verdad una fuente le gana. Su nota media (3,9) refleja una calidad justa. Como apaño para viajes cortos, cumple.",
    datePublished: "2026-08-11",
    updatedAt: "2026-08-11T00:00:00.000Z",
  }),
];
