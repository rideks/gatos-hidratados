// ============================================================================
// SILO COMEDEROS (APAGADO) — semilla de productos (gear: comederos/cuencos).
// Se activa poniendo SILOS.comederos.active = true en data/taxonomy.js.
//
// Mismo esquema que las fuentes: image y amazonUrl en blanco para completarlos.
// Datos de modelos REALES (Amazon.es); reseñas y pros/contras propios.
// ============================================================================
import { PRODUCT_TAGS as T } from "../productTags.js";

// Fechas por defecto para productos sin fecha propia (se calculan en cada build).
const _hoy = new Date();
const _iso = (d) => d.toISOString().slice(0, 10);
const FECHA_HOY = `${_iso(_hoy)}T00:00:00.000Z`;
const FECHA_SEMANA = _iso(new Date(_hoy.getTime() - 7 * 864e5));

const P = (p) => ({
  currency: "EUR",
  ...p,
  originalPrice: p.originalPrice ?? p.price,        // ← SIEMPRE presente (= price si no hay rebaja)
  datePublished: p.datePublished ?? FECHA_SEMANA,   // ← por defecto: hace una semana
  updatedAt: p.updatedAt ?? FECHA_HOY,              // ← por defecto: hoy
  amazonUrl: p.amazonUrl ?? "",
  sku: p.sku || p.asin || undefined,
});

export const comederosProducts = [
  // ── PREMIUM / APP ───────────────────────────────────────────────────────────
  P({
    id: "petkit-fresh-element-solo-3l",
    slug: "petkit-fresh-element-solo-3l",
    editorsPick: true,
    subcategory: "comederos-automaticos",
    brand: "PETKIT",
    name: "PETKIT Fresh Element Solo Comedero automático 3 L con app (WiFi)",
    metaTitle: "Comedero automático PETKIT 3 L con app para gatos",
    price: "69,99",
    material: "ABS alimentario + cubeta de acero inox. 304",
    capacity: "3 litros (~15 días para 1 gato)",
    color: "Blanco leche",
    image: "/images/comederos/petkit-fresh-element-solo-3l.webp",
    amazonUrl: "https://amzn.to/4hQdmxn",
    asin: "B0CD7NRW37",
    rating: "4.3",
    reviews: "4238",
    tags: [T.STAINLESS_STEEL, T.BPA_FREE],
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
      "El Fresh Element Solo es el comedero de la gama PETKIT pensado para emparejarse con sus fuentes, y se nota: se programa cómodo desde la app, la cubeta es de acero 304 (mejor higiene que el plástico) y el triple sellado con desecante mantiene el pienso crujiente. Con 3 L cubre unos quince días para un gato. Sus límites, con honestidad: solo va con pienso seco de grano pequeño, el adaptador y las pilas de respaldo se compran aparte, y al ser de un cuenco no distingue entre gatos. Para automatizar las raciones de un gato sin complicarte, cumple de sobra.",
    datePublished: "2026-08-20",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),

  // ── VALOR / 1 GATO ──────────────────────────────────────────────────────────
  P({
    id: "faroro-4l-comedero-acero",
    slug: "faroro-4l-comedero-acero",
    bestseller: true,
    subcategory: "comederos-automaticos",
    brand: "Faroro",
    name: "Faroro 4L Comedero automático con cuenco de acero y alimentación lenta",
    metaTitle: "Comedero automático Faroro 4L de acero para gatos",
    price: "30,86",
    originalPrice: "35,99",
    material: "Cuerpo ABS + cuenco de acero inoxidable",
    capacity: "4 litros",
    color: "Negro",
    image: "/images/comederos/faroro-4l-comedero-acero.webp",
    amazonUrl: "https://amzn.to/4wNpfbo",
    asin: "B0FCM9LLHV",
    rating: "4.3",
    reviews: "560",
    tags: [T.STAINLESS_STEEL],
    bestFor: "La opción más vendida para un gato: raciones controladas, cuenco de acero y modo de alimentación lenta a buen precio.",
    specs: {
      material: "Cuerpo ABS + cuenco de acero inoxidable",
      capacity: "4 L de pienso seco",
      flow: "1-6 comidas/día · hasta 30 raciones (10 g cada una)",
      feature: "Modo de alimentación lenta (evita atracones)",
      power: "Adaptador incluido + 3 pilas tipo D de respaldo (no incluidas)",
      cats: "1-2 gatos · pienso 2-15 mm",
    },
    highlights: {
      pros: [
        "Cuenco de acero inoxidable: más higiénico y aliado contra el acné felino",
        "Modo de alimentación lenta: reparte la ración para evitar que coma demasiado rápido",
        "Grabación de voz de 10 s y respaldo a pilas ante cortes de luz",
      ],
      cons: [
        "La tolva es de plástico (habitual en la categoría)",
        "Solo pienso seco",
        "Las pilas de respaldo no vienen incluidas",
      ],
    },
    features: [
      "1-6 comidas al día con hasta 30 raciones de 10 g",
      "Cuenco de acero inoxidable desmontable + modo de alimentación lenta",
      "Grabación de voz de 10 s y doble fuente de energía (adaptador + pilas)",
    ],
    dynamicReview:
      "El superventas de la categoría por un motivo sencillo: da lo esencial bien y barato. Cuenco de acero (mejor higiene que el plástico), programación de hasta seis comidas y un modo de alimentación lenta muy útil para gatos ansiosos que si no vomitan la ración. Suma grabación de voz y respaldo a pilas. Como todos, la tolva es de plástico y solo admite pienso seco, y las pilas se compran aparte. Para automatizar a un gato sin gastar de más, es una compra muy sensata.",
    datePublished: "2026-08-20",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "anykuu-4l-comedero-acero",
    slug: "anykuu-4l-comedero-acero",
    bestseller: true,
    subcategory: "comederos-automaticos",
    brand: "Anykuu",
    name: "Anykuu 4L Comedero automático con cuenco de acero (USB-C)",
    metaTitle: "Comedero automático Anykuu 4L de acero para gatos",
    price: "33.96",
    material: "ABS + cuenco de acero inoxidable",
    capacity: "4 litros",
    color: "Blanco",
    image: "/images/comederos/anykuu-4l-comedero-acero.webp",
    amazonUrl: "https://amzn.to/4ip0xKz",
    asin: "B0DJKV88PY",
    rating: "4.4",
    reviews: "1749",
    tags: [T.STAINLESS_STEEL],
    bestFor: "Alternativa de acero muy bien valorada, con salida antiatasco y carga USB-C.",
    specs: {
      material: "Cuerpo ABS + cuenco de acero inoxidable",
      capacity: "4 L de pienso seco",
      flow: "Hasta 6 comidas/día · hasta 20 raciones",
      feature: "Salida antibloqueo (croquetas 2-10 mm) + tapa hermética con desecante",
      power: "Cable USB-C + 3 pilas tipo D de respaldo (no incluidas)",
      cats: "1-2 gatos",
    },
    highlights: {
      pros: [
        "De las mejor valoradas de su tipo (4,4 con más de 1.700 reseñas)",
        "Salida antibloqueo y tapa hermética con desecante: dispensa sin atascos y mantiene el pienso seco",
        "Cuenco de acero inoxidable y carga por USB-C",
      ],
      cons: [
        "La tolva es de plástico",
        "Solo pienso seco (2-10 mm)",
        "Sin app (programación desde los botones del aparato)",
      ],
    },
    features: [
      "Hasta 6 comidas al día con porciones ajustables",
      "Salida antibloqueo para croquetas de 2-10 mm y tapa hermética con desecante",
      "Cuenco de acero inoxidable y alimentación dual (USB-C + pilas de respaldo)",
    ],
    dynamicReview:
      "Una de las alternativas de acero más redondas por debajo de los 35 €: se nota en su valoración (4,4 con miles de reseñas). Acierta en lo práctico —salida antibloqueo para que no se quede a medias, tapa hermética con desecante y cuenco de acero— y moderniza con carga USB-C. No trae app, así que se programa desde los botones, y como el resto es solo para pienso seco y con tolva de plástico. Si no necesitas el móvil de por medio, es tan buena opción como cualquiera.",
    datePublished: "2026-08-20",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),

  // ── MULTIGATO ───────────────────────────────────────────────────────────────
  P({
    id: "oneisall-5l-comedero-doble",
    slug: "oneisall-5l-comedero-doble",
    bestseller: true,
    subcategory: "comederos-automaticos",
    brand: "oneisall",
    name: "oneisall 5L Comedero automático doble (2 cuencos de acero) para varios gatos",
    metaTitle: "Comedero automático doble oneisall 5L para varios gatos",
    price: "69,99",
    material: "ABS + 2 cuencos de acero inoxidable",
    capacity: "5 litros",
    color: "Negro",
    image: "/images/comederos/oneisall-5l-comedero-doble.webp",
    amazonUrl: "https://amzn.to/4gr8s7Q",
    asin: "B0C772KDKT",
    rating: "4.4",
    reviews: "1408",
    tags: [T.STAINLESS_STEEL, T.MULTI_CAT, T.LARGE_CAPACITY],
    bestFor: "Hogares con dos gatos: reparte la ración a la vez en dos cuencos de acero con un divisor giratorio.",
    specs: {
      material: "Cuerpo ABS + 2 cuencos de acero inoxidable",
      capacity: "5 L de pienso seco",
      flow: "1-6 comidas/día · hasta 30 raciones (~7 g) · divisor giratorio a 2 cuencos",
      power: "Adaptador 5V + pilas de respaldo (no incluidas)",
      warranty: "Garantía de 2 años",
      cats: "2 gatos a la vez",
    },
    highlights: {
      pros: [
        "Dos cuencos de acero: alimenta a dos gatos a la vez sin que uno robe la ración del otro",
        "Divisor giratorio que reparte la comida con precisión entre ambos",
        "Grabación de voz, respaldo a pilas y 2 años de garantía (poco habitual)",
      ],
      cons: [
        "Ocupa más espacio que un comedero de un cuenco",
        "La tolva es de plástico",
        "Solo pienso seco",
      ],
    },
    features: [
      "Divisor giratorio que dispensa a dos cuencos de acero inoxidable",
      "1-6 comidas al día con hasta 30 raciones y grabación de voz",
      "Alimentación dual (adaptador + pilas) y 2 años de garantía",
    ],
    dynamicReview:
      "La solución más sensata para dos gatos: en vez de comprar dos comederos, este reparte la misma tolva en dos cuencos de acero mediante un divisor giratorio, así que cada uno tiene lo suyo y no hay peleas ni robos de ración. Suma voz, respaldo a pilas y una garantía de dos años que tranquiliza. A cambio, ocupa más y, como el resto, la tolva es de plástico y solo va con seco. Para hogares multigato, es de lo más práctico del catálogo.",
    datePublished: "2026-08-20",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),

  // ── GRAN CAPACIDAD / AUSENCIAS LARGAS ───────────────────────────────────────
  P({
    id: "faroro-7l-comedero",
    slug: "faroro-7l-comedero",
    bestseller: true,
    subcategory: "comederos-automaticos",
    brand: "Faroro",
    name: "Faroro 7L Comedero automático de gran capacidad (hasta 3 semanas)",
    metaTitle: "Comedero automático Faroro 7L gran capacidad para gatos",
    price: "37,99",
    originalPrice: "39,99",
    material: "Plástico ABS",
    capacity: "7 litros",
    color: "Gris",
    image: "/images/comederos/faroro-7l-comedero.webp",
    amazonUrl: "https://amzn.to/4wOmM01",
    asin: "B09CPPPPTS",
    rating: "4.4",
    reviews: "2773",
    tags: [T.LARGE_CAPACITY],
    bestFor: "Ausencias largas o varios gatos: 7 L de autonomía (15-21 días) con hélices para raciones grandes o pequeñas.",
    specs: {
      material: "Plástico ABS (sin cuenco de acero)",
      capacity: "7 L (~15-21 días de autonomía)",
      flow: "1-5 comidas/día · hasta 39 raciones · hélices S (5 g) y L (10 g)",
      power: "Adaptador + cable USB + 3 pilas tipo D de respaldo (no incluidas)",
      cats: "Gatos y perros pequeños/medianos",
    },
    highlights: {
      pros: [
        "7 L: la mayor autonomía del catálogo, ideal para vacaciones o fines de semana largos",
        "Dos hélices intercambiables (S y L) para adaptar el tamaño de la ración",
        "Tapa hermética antihumedad y respaldo a pilas",
      ],
      cons: [
        "Todo de plástico: no lleva cuenco de acero como otros modelos",
        "Voluminoso por su capacidad",
        "Solo pienso seco",
      ],
    },
    features: [
      "Depósito de 7 L con tapa hermética antihumedad",
      "1-5 comidas al día con hélices S/L para raciones de 5 o 10 g",
      "Alimentación dual (adaptador/USB + pilas de respaldo)",
    ],
    dynamicReview:
      "Cuando lo que necesitas es autonomía, este es el que más aguanta: 7 L dan para dos o tres semanas, así que es el típico para irte de vacaciones sin depender de nadie. Las hélices intercambiables (S y L) permiten ajustar la ración según el tamaño de tu mascota, y la tapa hermética protege el pienso de la humedad. El pero honesto: es todo de plástico —no trae cuenco de acero— y abulta lo suyo. Para ausencias largas, difícil de superar en relación capacidad/precio.",
    datePublished: "2026-08-20",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),

  // ── SIN ELECTRICIDAD / 2 EN 1 / BARATO ──────────────────────────────────────
  P({
    id: "nobleza-2en1-comedero-bebedero",
    slug: "nobleza-2en1-comedero-bebedero",
    subcategory: "comederos-automaticos",
    brand: "Nobleza",
    name: "Nobleza 2 en 1 Comedero y bebedero por gravedad (2,2 L comida + 1 L agua)",
    metaTitle: "Comedero y bebedero por gravedad Nobleza 2 en 1",
    price: "21,99",
    material: "Plástico PP",
    capacity: "2,2 L comida + 1 L agua",
    color: "Blanco y gris",
    image: "/images/comederos/nobleza-2en1-comedero-bebedero.webp",
    amazonUrl: "https://amzn.to/4xYyciZ",
    asin: "B0FM71H4PZ",
    rating: "3.8",
    reviews: "196",
    tags: [T.ACTIVATED_CARBON, T.LARGE_CAPACITY],
    bestFor: "Quien quiere comida y agua disponibles sin electricidad ni programación, para ausencias cortas y a bajo precio.",
    specs: {
      material: "Plástico PP desmontable",
      capacity: "2,2 L de comida + 1 L de agua",
      flow: "Por gravedad (sin electricidad, sin programar raciones)",
      filter: "Filtro de carbón activo en el agua",
      power: "Ninguna (funciona por gravedad)",
      cats: "Gatos y perros pequeños/medianos",
    },
    highlights: {
      pros: [
        "2 en 1: comida y agua siempre disponibles sin cables ni electricidad",
        "Filtro de carbón activo en el agua para reducir impurezas y olores",
        "Muy barato y con base antideslizante antiderrames",
      ],
      cons: [
        "Por gravedad: NO controla raciones (el gato come a discreción, mal para dietas)",
        "El agua queda estancada: menos apetecible que una fuente con bomba",
        "Plástico y valoración más baja (3,8) que los comederos programables",
      ],
    },
    features: [
      "Dispensación por gravedad de comida (2,2 L) y agua (1 L)",
      "Filtro de carbón activo en el depósito de agua",
      "Totalmente desmontable, sin electricidad, con base antideslizante",
    ],
    dynamicReview:
      "No es un comedero programable, es un dispensador por gravedad, y conviene tenerlo claro. Su gracia es resolver comida y agua a la vez, sin cables, por muy poco dinero: perfecto para una ausencia corta o para quien no quiere complicarse. Ahora, seamos honestos con sus límites, que son importantes: no controla raciones (el gato come lo que quiere, así que no sirve para dietas), el agua queda estancada —menos atractiva que una fuente con bomba— y su valoración es más floja (3,8). Como apaño barato para vacaciones puntuales, cumple; como solución diaria, mejor un programable.",
    datePublished: "2026-08-20",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
];