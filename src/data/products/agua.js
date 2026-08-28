// ============================================================================
// SILO HIDRATACIÓN — productos REALES del mercado (Amazon.es).
//
// Datos (marca, modelo, material, capacidad, specs) tomados de fichas reales
// del mercado. `dynamicReview`, pros y contras son texto editorial PROPIO
// (no reproducen descripciones ni reseñas de Amazon).
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
  updatedAt: FECHA_HOY,          // ← por defecto: hoy
  amazonUrl: p.amazonUrl ?? "",
  sku: p.sku || p.asin || undefined,
});

export const aguaProducts = [
  // ── CON MONITORIZACIÓN / 1 GATO ────────────────────────────────────────────
  P({
    id: "petkit-eversweet-solo-2",
    slug: "petkit-eversweet-solo-2",
    editorsPick: true,
    subcategory: "fuentes-agua",
    brand: "PETKIT",
    name: "PETKIT Eversweet Solo 2 (silenciosa, con app)",
    price: "55,99",
    material: "Plástico sin BPA",
    capacity: "1,8 litros",
    color: "Blanco",
    images: [
      "/images/fuentes/petkit-eversweet-solo-2-1.webp",
      "/images/fuentes/petkit-eversweet-solo-2-2.webp",
    ],
    amazonUrl: "https://amzn.to/4gfO4Xa",
    asin: "B0B4W8FDBV",
    rating: "4.5",
    reviews: "1788",
    tags: [T.BPA_FREE, T.SILENT, T.LOW_LEVEL_SHUTOFF, T.LED],
    bestFor: "Un gato del que quieres controlar cuánto bebe (mayor o con riesgo renal).",
    specs: {
      material: "Plástico sin BPA",
      capacity: "1,8 L",
      noise: "Ultrasilenciosa (nivel sueño)",
      pump: "Sumergible USB con reserva de pilas",
      flow: "Modo continuo / intermitente",
      filter: "Carbón activo + resina + malla antipelo",
      power: "USB (con respaldo de pilas ante apagones)",
      cats: "1 gato",
    },
    highlights: {
      pros: [
        "Muy silenciosa y con modos de trabajo (continuo o intermitente para ahorrar)",
        "App con estadísticas de consumo: ideal para vigilar a un gato mayor o renal",
        "Respaldo de pilas: sigue funcionando ante un corte de luz",
      ],
      cons: [
        "Plato de plástico: exige limpieza frecuente frente al acero",
        "1,8 L: pensada para un solo gato",
        "Algunas funciones dependen de la app",
      ],
    },
    features: [
      "Bomba ultrasilenciosa con modos continuo/intermitente",
      "App con estadísticas de cuántas veces bebe el gato",
      "Filtro de carbón + resina + malla a prueba de pelo",
    ],
    dynamicReview:
      "La más equilibrada para un solo gato y la que recomendamos si quieres vigilar su hidratación: la app te dice cuántas veces bebe, un dato muy valioso para gatos mayores o con problemas renales que puedes enseñar al veterinario. Es silenciosa y tiene respaldo de pilas ante apagones. Su límite es el habitual del plástico (más limpieza) y la capacidad para un gato. Para el 90% de hogares con un gato, cumple de sobra.",
    datePublished: "2026-08-06",
    updatedAt: "2026-08-10T00:00:00.000Z",
  }),

  P({
    id: "giotohun-acero-22l",
    slug: "giotohun-acero-inoxidable-22l",
    bestseller: true,
    subcategory: "fuentes-agua",
    brand: "GIOTOHUN",
    name: "GIOTOHUN Fuente de acero inoxidable 2,2 L con ventana de nivel",
    metaTitle: "Fuente de agua acero GIOTOHUN 2,2 L para gatos",
    price: "27,99",
    material: "Acero inoxidable 304",
    capacity: "2,2 litros",
    color: "Plata",
    images: [
      "/images/fuentes/giotohun-acero-22l-1.webp",
      "/images/fuentes/giotohun-acero-22l-2.webp",
    ],
    amazonUrl: "https://amzn.to/4worP7v",
    asin: "B0G5PM19RG",
    rating: "4.4",
    reviews: "18011",
    tags: [T.STAINLESS_STEEL, T.SILENT, T.LED, T.LOW_LEVEL_SHUTOFF],
    bestFor: "Quien quiere acero con ventana de nivel para vigilar el agua de un vistazo.",
    specs: {
      material: "Acero inox. 304",
      capacity: "2,2 L / 74 oz",
      noise: "< 25 dB",
      pump: "Sumergible USB con luz LED",
      flow: "Chorro tipo grifo",
      filter: "Algodón + resina + carbón activo (+ esponja)",
      power: "Cable USB",
      cats: "1-2 gatos (5-7 días de agua)",
    },
    highlights: {
      pros: [
        "Acero inoxidable 304: higiénico y resistente, sin el biofilm que forma el plástico",
        "Ventana de nivel de agua: lo controlas de un vistazo y evitas que la bomba trabaje en seco",
        "Muy silenciosa (< 25 dB) y con luz LED para que el gato beba de noche",
      ],
      cons: [
        "2,2 L se queda algo justo para varios gatos",
        "El filtro es específico (búscalo por \"GIOTOHUN filtro\")",
        "Funciona con cable, no con batería",
      ],
    },
    features: [
      "Depósito de 2,2 L con ventana de nivel de agua",
      "Bomba silenciosa (< 25 dB) con luz LED",
      "Filtro de algodón + resina de intercambio iónico + carbón activo, más esponja",
    ],
    dynamicReview:
      "Una fuente de acero 304 superventas por un motivo muy práctico: la ventana de nivel de agua. Ver de un vistazo cuánta queda evita el despiste que hace trabajar la bomba en seco (la avería más común). Es silenciosa (por debajo de 25 dB), lleva LED para que el gato la localice de noche y se desmonta fácil para limpiar. Con 2,2 L cubre 5-7 días para un gato. Como toda de acero, gana en higiene al plástico; su filtro es específico, así que compra recambios de la marca.",
    datePublished: "2026-08-11",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "feelneedy-acero-28l",
    slug: "feelneedy-acero-inoxidable-28l",
    bestseller: true,
    subcategory: "fuentes-agua",
    brand: "FEELNEEDY",
    name: "FEELNEEDY Fuente de acero inoxidable 2,8 L (3 filtros)",
    metaTitle: "Fuente de agua acero FEELNEEDY 2,8 L para gatos",
    price: "24,99",
    originalPrice: "29,99",
    material: "Acero inoxidable",
    capacity: "2,8 litros",
    color: "Acero inoxidable",
    images: [
      "/images/fuentes/feelneedy-acero-28l-1.webp",
      "/images/fuentes/feelneedy-acero-28l-2.webp",
    ],
    amazonUrl: "https://amzn.to/4fX0Evs",
    asin: "B0FF48X5N8",
    rating: "4.3",
    reviews: "2606",
    tags: [T.STAINLESS_STEEL, T.SILENT, T.DISHWASHER_SAFE, T.BPA_FREE, T.LED],
    bestFor: "Acero apto para lavavajillas a buen precio, con doble flujo para gatos exigentes.",
    specs: {
      material: "Acero inox. (sin BPA)",
      capacity: "2,8 L",
      noise: "< 25 dB",
      pump: "5V DC ultrasilenciosa (LED azul)",
      flow: "2 diseños: flor / chorro suave",
      filter: "4 capas: carbón + resina + tela no tejida + esponja",
      power: "Cable USB 5V",
      cats: "1-2 gatos (autonomía ~10 días)",
    },
    highlights: {
      pros: [
        "Acero inoxidable sin BPA y apta para lavavajillas: limpieza muy cómoda",
        "Bomba ultrasilenciosa (< 25 dB) con dos diseños de flujo",
        "Filtración de 4 capas y ventana de nivel con luz LED azul",
      ],
      cons: [
        "El filtro es específico (ref. B0FF4CCPXK), cámbialo cada 2-3 semanas",
        "2,8 L es correcto, pero no destaca para hogares con muchos gatos",
        "Funciona con cable, no con batería",
      ],
    },
    features: [
      "Acero inoxidable sin BPA, apta para lavavajillas",
      "Bomba < 25 dB con dos modos de flujo (flor y suave)",
      "Filtración de 4 capas con ventana de nivel y LED azul",
    ],
    dynamicReview:
      "Acero inoxidable sin BPA, apta para lavavajillas y a un precio muy ajustado. La bomba baja de 25 dB y ofrece dos diseños de flujo (flor y chorro suave) para dar con el que enganche a tu gato. La filtración es de cuatro capas (carbón, resina, tela no tejida y esponja) y la ventana con LED azul ayuda a ver el nivel y guía al gato de noche. Con 2,8 L aguanta bien varios días; recuerda cambiar el filtro cada 2-3 semanas.",
    newerModel: {
      name: "FEELNEEDY 2,8 L (modelo W22X)",
      slug: "feelneedy-acero-inoxidable-28l-w22x",
      asin: "B0GCZV4SFZ",
      price: "23,99",
      note: "versión más reciente y aún más silenciosa (por debajo de 20 dB)",
    },
    datePublished: "2026-08-11",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "feelneedy-sin-cable-32l",
    slug: "feelneedy-sin-cable-32l",
    bestseller: true,
    subcategory: "fuentes-agua",
    brand: "FEELNEEDY",
    name: "FEELNEEDY Fuente sin cable 3,2 L con sensor (acero, batería)",
    metaTitle: "Fuente de agua sin cable FEELNEEDY 3,2 L acero",
    price: "39,99",
    originalPrice: "49,99",
    material: "Acero inoxidable",
    capacity: "3,2 litros",
    color: "Acero inoxidable",
    images: [
      "/images/fuentes/feelneedy-sin-cable-32l-1.webp",
      "/images/fuentes/feelneedy-sin-cable-32l-2.webp",
    ],
    amazonUrl: "https://amzn.to/4qhODnW",
    asin: "B0F9WQGMH7",
    rating: "4.6",
    reviews: "2354",
    tags: [T.WIRELESS, T.BATTERY, T.MOTION_SENSOR, T.STAINLESS_STEEL, T.DISHWASHER_SAFE, T.LARGE_CAPACITY],
    bestFor: "Sin cable, con sensor y acero; ideal para colocarla libre y ver el filtro sin desmontar.",
    specs: {
      material: "Acero inox.",
      capacity: "3,2 L",
      noise: "Silenciosa",
      pump: "Inalámbrica (batería 4000 mAh, ~45 días)",
      flow: "3 modos: sensor / temporizador / continuo",
      filter: "Multicapa: carbón + resina + tela + esponja",
      power: "Batería recargable + enchufable",
      cats: "1-2 gatos (autonomía ~10 días)",
    },
    highlights: {
      pros: [
        "Sin cable con batería de 4000 mAh (~6 semanas) y opción de uso enchufada",
        "Acero inoxidable apto para lavavajillas: ayuda contra la \"barbilla negra\" (acné felino)",
        "Filtro transparente para ver cuándo cambiarlo + 3 modos (sensor/temporizador/continuo)",
      ],
      cons: [
        "Hay que recordar recargar la batería",
        "Precio más alto que una fuente con cable",
        "Cambio de filtro cada 2 semanas",
      ],
    },
    features: [
      "Batería recargable de 4000 mAh (~45 días) y uso también enchufada",
      "Sensor de movimiento, temporizador (20 s/15 min) y flujo continuo",
      "Filtro transparente para ver su estado sin desmontar",
    ],
    dynamicReview:
      "La sin cable más completa que hemos fichado: acero inoxidable, 3,2 L y batería de 4000 mAh que aguanta unas 6 semanas, además de poder usarse enchufada. Trae tres modos (sensor de movimiento, temporizador cada 15 min y flujo continuo) y, lo más útil, un filtro transparente para ver cuándo toca cambiarlo sin desmontar nada. Al ser inalámbrica, la colocas donde quieras y evitas cables. Por higiene y comodidad, muy recomendable; solo tendrás que recargar la batería de vez en cuando.",
    newerModel: {
      name: "FEELNEEDY 3,2 L sin cable con 6 filtros",
      asin: "",
      price: "50,53",
      note: "la misma fuente, pero con 6 filtros incluidos",
    },
    datePublished: "2026-08-11",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "nenozi-plastico-22l",
    slug: "nenozi-plastico-22l",
    bestseller: true,
    subcategory: "fuentes-agua",
    brand: "Nenozi",
    name: "Nenozi Fuente automática 2,2 L ultrasilenciosa (plástico)",
    metaTitle: "Fuente de agua silenciosa Nenozi 2,2 L para gatos",
    price: "18,98",
    material: "Plástico",
    capacity: "2,2 litros",
    color: "Negro",
    images: [
      "/images/fuentes/nenozi-plastico-22l-1.webp",
      "/images/fuentes/nenozi-plastico-22l-2.webp",
    ],
    amazonUrl: "https://amzn.to/4bPxOL6",
    asin: "B0CSCVBB38",
    rating: "4.2",
    reviews: "2948",
    tags: [T.SILENT, T.LED, T.LOW_LEVEL_SHUTOFF],
    bestFor: "La más barata para comprobar si tu gato adopta una fuente, y muy silenciosa.",
    specs: {
      material: "Plástico",
      capacity: "2,2 L",
      noise: "≤ 20 dB (muy silenciosa)",
      pump: "5V USB con LED",
      flow: "Doble flujo",
      filter: "Triple filtrado (carbón activo)",
      power: "Cable USB (no pilas)",
      cats: "1-2 gatos",
    },
    highlights: {
      pros: [
        "Precio muy bajo: ideal para probar sin arriesgar",
        "De las más silenciosas (≤ 20 dB) y con doble flujo",
        "Indicador de nivel con LED y triple filtrado",
      ],
      cons: [
        "Plástico poroso: pide limpieza más frecuente para evitar biofilm y acné felino",
        "Menos duradera que acero o cerámica",
        "Solo funciona con cable USB (no pilas)",
      ],
    },
    features: [
      "2,2 L con indicador de nivel y luz LED",
      "Bomba de 5V muy silenciosa (≤ 20 dB) con doble flujo",
      "Triple sistema de filtrado con carbón activo",
    ],
    dynamicReview:
      "La opción más económica para probar si tu gato acepta una fuente. Es de plástico, pero destaca por lo silenciosa (≤ 20 dB, de las más bajas) y por el doble flujo, que suele animar a beber. Lleva indicador de nivel con LED y triple filtrado de carbón. Como toda de plástico, pide limpieza más frecuente para evitar biofilm y no durará como una de acero; por el precio, es una puerta de entrada estupenda. Funciona con USB, no con pilas.",
    datePublished: "2026-08-11",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),

  // ── NUEVAS (2ª tanda, datos reales Amazon.es) ──────────────────────────────
  P({
    id: "amazon-basics-gravedad-38l",
    slug: "amazon-basics-dispensador-gravedad-38l",
    subcategory: "fuentes-agua",
    brand: "Amazon Basics",
    name: "Amazon Basics Dispensador de agua por gravedad 3,8 L",
    metaTitle: "Dispensador de agua por gravedad Amazon Basics 3,8 L",
    price: "18,10",
    originalPrice: "21,06",
    material: "Base PP + botella PET",
    capacity: "3,8 litros",
    color: "Gris",
    images: [
      "/images/fuentes/amazon-basics-gravedad-38l-1.webp",
      "/images/fuentes/amazon-basics-gravedad-38l-2.webp",
    ],
    amazonUrl: "https://amzn.to/4bS2Kdz",
    asin: "B07227RQJ9",
    rating: "4.5",
    reviews: "34587",
    tags: [T.SILENT, T.LARGE_CAPACITY, T.BPA_FREE],
    bestFor: "Quien no quiere bomba, ni ruido, ni recambios de filtro: agua por gravedad.",
    specs: {
      material: "Base PP + botella PET",
      capacity: "3,8 L",
      noise: "Totalmente silencioso (sin bomba)",
      flow: "Por gravedad (agua estancada)",
      filter: "Sin filtro",
      power: "Sin electricidad",
      cats: "1-2 gatos",
    },
    highlights: {
      pros: [
        "Cero ruido y cero electricidad: es un dispensador por gravedad, no una fuente con bomba",
        "3,8 L de autonomía y sin filtros que comprar: mantenimiento muy barato",
        "Muy fiable y bien valorado (4,6), difícil que se estropee",
      ],
      cons: [
        "Agua estancada: a muchos gatos les atrae menos que el agua en movimiento",
        "Sin filtración: hay que lavarlo y renovar el agua a menudo para evitar biofilm",
        "El plástico pide limpieza frecuente",
      ],
    },
    features: [
      "Dispensador por gravedad de 3,8 L (sin bomba ni cable)",
      "Boca ancha e indicadores de nivel transparentes",
      "Sin consumibles: no usa filtros",
    ],
    dynamicReview:
      "No es una fuente, es un dispensador por gravedad, y por eso resuelve bien un caso concreto: quien quiere cero ruido, cero cables y cero recambios. Es silencioso al 100%, tiene 3,8 L y apenas se estropea. La contraparte es importante: el agua queda estancada (a muchos gatos les motiva menos que el chorro de una fuente) y no filtra, así que hay que lavarlo y cambiar el agua a menudo. Como opción sin bomba, para gatos que ya beben bien o para ausencias, cumple y es baratísimo.",
    datePublished: "2026-08-11",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "giotohun-plastico-2l",
    slug: "giotohun-plastico-2l",
    bestseller: true,
    subcategory: "fuentes-agua",
    brand: "GIOTOHUN",
    name: "GIOTOHUN Fuente 2 L (plástico, superventas)",
    price: "19,99",
    material: "Plástico ABS",
    capacity: "2 litros",
    color: "Negro",
    images: [
      "/images/fuentes/giotohun-plastico-2l-1.webp",
      "/images/fuentes/giotohun-plastico-2l-2.webp",
    ],
    amazonUrl: "https://amzn.to/4htIzq2",
    asin: "B0BGL2GTTM",
    rating: "4.2",
    reviews: "25762",
    tags: [T.SILENT, T.LED, T.LOW_LEVEL_SHUTOFF],
    bestFor: "La fuente de plástico más vendida y barata para probar (25.000+ reseñas).",
    specs: {
      material: "Plástico ABS",
      capacity: "2 L / 64 oz",
      noise: "≤ 40 dB",
      pump: "1,5 W (~1 kWh/mes)",
      flow: "2 modos (grifo / fuente)",
      filter: "Triple: carbón + algodón + esponja",
      power: "Cable USB",
      cats: "1-2 gatos (4-6 días)",
    },
    highlights: {
      pros: [
        "Superventas absoluto (más de 25.000 reseñas) y muy barata: la referencia para empezar",
        "Dos modos de flujo (grifo y fuente) y luz LED de nivel",
        "Garantía de 2 años en la bomba (poco habitual a este precio)",
      ],
      cons: [
        "Plástico ABS poroso: más limpieza para evitar biofilm y acné felino",
        "Su ruido (≤ 40 dB) es mayor que el de las de acero silenciosas (< 25 dB)",
        "El filtro hay que reponerlo cada 2-4 semanas",
      ],
    },
    features: [
      "2 L con dos modos de flujo (grifo y fuente) y LED de nivel",
      "Bomba de bajo consumo (1,5 W) con 2 años de garantía",
      "Triple filtración: carbón activo + algodón + esponja",
    ],
    dynamicReview:
      "Probablemente la fuente más vendida de Amazon.es, con más de 25.000 reseñas: barata, con dos modos de flujo y una garantía de bomba de 2 años que sorprende a este precio. Como banco de pruebas honesto, dos avisos: es de plástico (más limpieza, peor para el acné felino que el acero) y su nivel de ruido (≤ 40 dB) está lejos de las de acero que prometen < 25 dB. Como primera fuente barata para ver si tu gato la adopta, es una apuesta segura.",
    datePublished: "2026-08-11",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "apauk-acero-32l",
    slug: "apauk-acero-inoxidable-32l",
    bestseller: true,
    subcategory: "fuentes-agua",
    brand: "APAUK",
    name: "APAUK Fuente de acero inoxidable 3,2 L con ventana LED",
    metaTitle: "Fuente de agua acero APAUK 3,2 L para gatos",
    price: "25,99",
    material: "Acero inoxidable 304",
    capacity: "3,2 litros",
    color: "Plateado",
    images: [
      "/images/fuentes/apauk-acero-32l-1.webp",
      "/images/fuentes/apauk-acero-32l-2.webp",
    ],
    amazonUrl: "https://amzn.to/4qemC0i",
    asin: "B0FG2LQQLC",
    rating: "4.5",
    reviews: "3023",
    tags: [T.STAINLESS_STEEL, T.SILENT, T.DISHWASHER_SAFE, T.LED, T.LARGE_CAPACITY],
    bestFor: "Acero 3,2 L a buen precio, con recambios garantizados en la UE 2 años.",
    specs: {
      material: "Acero inox. 304 (sin BPA)",
      capacity: "3,2 L",
      noise: "< 25 dB",
      pump: "Sumergible 5V",
      flow: "Circulación fluida",
      filter: "Carbón activo + esponjas redondas",
      power: "Cable USB",
      cats: "1-2 semanas de agua",
    },
    highlights: {
      pros: [
        "Acero inoxidable 304 sin BPA y componentes aptos para lavavajillas",
        "3,2 L de capacidad con ventana de nivel y luz LED azul",
        "Bomba silenciosa (< 25 dB) y 2 años de disponibilidad de recambios en la UE",
      ],
      cons: [
        "El filtro es específico (redondo): compra recambios de la marca",
        "Con 3,2 L, la limpieza a fondo lleva algo más de tiempo",
        "Funciona con cable, no con batería",
      ],
    },
    features: [
      "Acero inoxidable 304 con ventana de nivel y LED azul",
      "3,2 L de gran capacidad para varias mascotas",
      "Filtro de carbón activo + esponjas; recambios en la UE 2 años",
    ],
    dynamicReview:
      "Una de las mejores relaciones capacidad/precio en acero: 3,2 L, acero 304 sin BPA, ventana de nivel y bomba silenciosa por debajo de 25 dB. Un detalle a favor poco habitual es la disponibilidad garantizada de recambios en la UE durante 2 años, que da tranquilidad con los filtros. Como toda de acero, gana en higiene al plástico; su filtro es específico, así que compra recambios de la marca.",
    datePublished: "2026-08-11",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "balimopet-acero-26l",
    slug: "balimopet-acero-inoxidable-26l",
    bestseller: true,
    subcategory: "fuentes-agua",
    brand: "BalimoPet",
    name: "BalimoPet Fuente de acero inoxidable 2,6 L estilo grifo",
    metaTitle: "Fuente de agua acero BalimoPet 2,6 L (grifo)",
    price: "24,69",
    originalPrice: "25,99",
    material: "Acero inoxidable 304",
    capacity: "2,6 litros",
    color: "Plata",
    images: [
      "/images/fuentes/balimopet-acero-26l-1.webp",
      "/images/fuentes/balimopet-acero-26l-2.webp",
    ],
    amazonUrl: "https://amzn.to/3S98qt6",
    asin: "B0FN3K2DTK",
    rating: "4.6",
    reviews: "596",
    tags: [T.STAINLESS_STEEL, T.BPA_FREE, T.SILENT, T.LED, T.LOW_LEVEL_SHUTOFF],
    bestFor: "Acero 304 a precio contenido, con caño tipo grifo y bandeja de emergencia por si se va la luz.",
    specs: {
      material: "Acero inox. 304 (sin BPA)",
      capacity: "2,6 L (~6-8 días)",
      noise: "Modo susurro (< 25 dB)",
      pump: "Sumergible con corte por nivel bajo",
      flow: "Caño estilo grifo, circulación 24 h",
      filter: "Cuádruple: algodón + resina + carbón activo",
      power: "Cable USB (requiere adaptador, no incluido)",
      cats: "1-2 gatos",
    },
    highlights: {
      pros: [
        "Acero inoxidable 304 sin BPA a precio de fuente de plástico",
        "Caño estilo grifo que atrae a muchos gatos, con luz LED para la noche",
        "Bandeja de emergencia de 150 ml: el gato bebe aunque se corte la luz",
        "Ventana de nivel para vigilar el agua y evitar que la bomba trabaje en seco",
      ],
      cons: [
        "Solo funciona con cable USB (no lleva batería) y el adaptador no viene incluido",
        "Modelo reciente: aún acumula pocas reseñas frente a los superventas",
        "Como casi todas, el depósito interno sigue siendo de plástico",
      ],
    },
    features: [
      "Bandeja de acero inoxidable 304 sin BPA con caño tipo grifo",
      "Bandeja de emergencia de 150 ml para cortes de luz",
      "Filtración en cuatro etapas y ventana de nivel de agua",
    ],
    dynamicReview:
      "Una de las formas más baratas de pasarte al acero sin renunciar a nada: 304 sin BPA, caño tipo grifo que engancha a muchos gatos y, como detalle poco común, una bandeja de emergencia que mantiene agua disponible si se va la luz. Funciona por debajo de 25 dB y trae ventana de nivel para que la bomba no trabaje en seco. Los peros son honestos: va solo con cable (sin opción de batería) y el adaptador no viene en la caja, y al ser un modelo nuevo todavía tiene pocas reseñas. Si quieres acero, silencio y caño de grifo sin gastar de más, es una apuesta muy sensata.",
    datePublished: "2026-08-13",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "pawpoll-plastico-22l",
    slug: "pawpoll-plastico-22l",
    bestseller: true,
    subcategory: "fuentes-agua",
    brand: "PawPoll",
    name: "PawPoll Fuente 2,2 L (plástico) silenciosa con LED",
    price: "18,99",
    originalPrice: "19,99",
    material: "Plástico PP",
    capacity: "2,2 litros",
    color: "Negro",
    images: [
      "/images/fuentes/pawpoll-plastico-22l-1.webp",
      "/images/fuentes/pawpoll-plastico-22l-2.webp",
    ],
    amazonUrl: "https://amzn.to/4qen1jk",
    asin: "B0D9BPB2V5",
    rating: "4.4",
    reviews: "2889",
    tags: [T.SILENT, T.LED, T.LOW_LEVEL_SHUTOFF],
    bestFor: "Plástico económico y silencioso (≤ 25 dB), con reserva de agua de emergencia.",
    specs: {
      material: "Plástico PP",
      capacity: "2,2 L",
      noise: "≤ 25 dB",
      pump: "1,5 W (bajo consumo)",
      flow: "Doble flujo (grifo / fuente)",
      filter: "Cuádruple filtración",
      power: "Cable USB",
      cats: "1-2 gatos (~7 días); reserva 150 ml",
    },
    highlights: {
      pros: [
        "Muy silenciosa para ser de plástico (≤ 25 dB) y de bajo consumo (1,5 W)",
        "Reserva de 150 ml para cortes de luz y ventana de nivel con LED",
        "Precio bajo y buena valoración (4,4)",
      ],
      cons: [
        "Plástico PP: pide limpieza más frecuente que el acero (biofilm, acné felino)",
        "Menos duradera que acero o cerámica",
        "Filtro de recambio periódico",
      ],
    },
    features: [
      "2,2 L con doble flujo (grifo y fuente) y LED de nivel",
      "Bomba de 1,5 W silenciosa (≤ 25 dB) con reserva de 150 ml",
      "Sistema de cuádruple filtración",
    ],
    dynamicReview:
      "De las plásticas económicas, una de las más redondas: silenciosa de verdad para su categoría (≤ 25 dB), doble flujo y una reserva de 150 ml muy útil si se va la luz. Como toda de plástico PP, pide más limpieza para evitar biofilm y no durará como una de acero. Para quien quiere gastar poco pero con buena experiencia de uso, es una compra sensata.",
    datePublished: "2026-08-11",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "feelneedy-sin-cable-4l",
    slug: "feelneedy-sin-cable-4l",
    bestseller: true,
    subcategory: "fuentes-agua",
    brand: "FEELNEEDY",
    name: "FEELNEEDY Fuente sin cable 4 L con sensor (batería 4000 mAh)",
    metaTitle: "Fuente de agua sin cable FEELNEEDY 4 L para gatos",
    price: "46,59",
    originalPrice: "57,85",
    material: "ABS + cuenco de acero 304",
    capacity: "4 litros",
    color: "Blanco",
    images: [
      "/images/fuentes/feelneedy-sin-cable-4l-1.webp",
      "/images/fuentes/feelneedy-sin-cable-4l-2.webp",
    ],
    amazonUrl: "https://amzn.to/3SyoHrC",
    asin: "B0BWJ6JNXM",
    rating: "4.6",
    reviews: "10092",
    tags: [T.WIRELESS, T.BATTERY, T.MOTION_SENSOR, T.LARGE_CAPACITY, T.MULTI_CAT, T.STAINLESS_STEEL],
    bestFor: "Gran capacidad (4 L) sin cable, para 1-3 gatos o ausencias largas.",
    specs: {
      material: "ABS + cuenco de acero 304",
      capacity: "4 L (+210 ml cuenco)",
      noise: "< 35 dB",
      pump: "Inalámbrica (batería 4000 mAh, ~45 días)",
      flow: "3 modos: sensor / temporizador / continuo",
      filter: "5 capas (carbón de coco + resina + esponja)",
      power: "Batería recargable USB-C + enchufable",
      cats: "1-3 gatos (7-10 días)",
    },
    highlights: {
      pros: [
        "4 L: la mayor autonomía de la selección, ideal para varios gatos o viajes",
        "Sin cable con sensor de movimiento y avisos de batería y de cambio de filtro",
        "Cuenco de acero 304 muy amplio (210 ml) y más de 10.000 reseñas (4,6)",
      ],
      cons: [
        "Cuerpo de ABS (solo el cuenco es de acero)",
        "< 35 dB: no llega al silencio de las de < 25 dB",
        "Hay que recargar la batería y no mojar la electrónica",
      ],
    },
    features: [
      "4 L de capacidad con cuenco de acero 304 de 210 ml",
      "Inalámbrica (4000 mAh, ~45 días) con sensor de movimiento",
      "Filtración de 5 capas con aviso de cambio de filtro",
    ],
    dynamicReview:
      "La opción de gran capacidad: 4 L y un cuenco de acero muy amplio, con funcionamiento sin cable por sensor de movimiento y avisos de batería y de filtro. Con más de 10.000 reseñas y 4,6 estrellas, es de las sin cable más probadas. Matices honestos: el cuerpo es de ABS (solo el cuenco es de acero) y su ruido (< 35 dB) no iguala a las más silenciosas. Para hogares con varios gatos o ausencias largas, es difícil de superar en autonomía.",
    datePublished: "2026-08-11",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "petkit-eversweet-max-2",
    slug: "petkit-eversweet-max-2-3l",
    editorsPick: true,
    subcategory: "fuentes-agua",
    brand: "PETKIT",
    name: "PETKIT Eversweet Max 2 (3 L, sin cable, sensor y app)",
    metaTitle: "PETKIT Eversweet Max 2: fuente 3 L sin cable",
    price: "94,99",
    material: "Bandeja de acero inox. 304 + cuerpo PPO resistente al calor",
    capacity: "3 litros",
    color: "Plata / acero",
    images: [
      "/images/fuentes/petkit-eversweet-max-2-1.webp",
      "/images/fuentes/petkit-eversweet-max-2-2.webp",
    ],
    amazonUrl: "https://amzn.to/4gjRoAG",
    asin: "B0FJFDPZ6X",
    rating: "4.2",
    reviews: "207",
    tags: [T.WIRELESS, T.BATTERY, T.MOTION_SENSOR, T.STAINLESS_STEEL, T.DISHWASHER_SAFE, T.SILENT, T.LARGE_CAPACITY],
    bestFor: "Hogar multigato que quiere fuente premium sin cable, mucha autonomía y datos de consumo por app.",
    specs: {
      material: "Bandeja acero inox. 304 + PPO (hasta 100 °C)",
      capacity: "3 L (varios gatos)",
      noise: "Ultrasilenciosa (< 25 dB)",
      pump: "Inalámbrica, batería 5000 mAh (hasta ~83 días)",
      flow: "3 modos + modo sensor (se activa a menos de 10 cm)",
      filter: "Algodón de alta densidad + carbón activo sinterizado",
      power: "Batería recargable USB (adaptador no incluido)",
      cats: "Varios gatos",
    },
    highlights: {
      pros: [
        "3 L y batería de larga duración (hasta ~83 días): muchísima autonomía sin cables",
        "App para programar los modos y ver cuánto bebe el gato: útil con historial renal",
        "Bandeja de acero inoxidable 304 y cuerpo PPO resistente al calor, apto para lavavajillas",
        "Modo sensor que activa el flujo solo cuando el gato se acerca y ahorra batería",
      ],
      cons: [
        "Precio alto: es de las fuentes más caras del catálogo",
        "Solo la bandeja va al lavavajillas; bomba, base, módulo y filtro no",
        "Depende de la app y de recargar la batería periódicamente",
        "Modelo reciente: todavía con pocas reseñas acumuladas",
      ],
    },
    features: [
      "Bomba inalámbrica con batería de 5000 mAh (hasta ~83 días de uso)",
      "Control por app: modos de flujo, modo sensor y seguimiento del consumo",
      "Bandeja de acero inoxidable 304 y cuerpo PPO resistente al calor",
    ],
    dynamicReview:
      "La fuente más completa de PETKIT y, con diferencia, la más cara del catálogo. Lo que pagas de más se nota: 3 L para varios gatos, una batería que aguanta semanas sin cable y una app que no solo programa el flujo, sino que te dice cuánto bebe tu gato, un dato valiosísimo si tiene historial renal. Suma bandeja de acero 304 y un cuerpo que resiste el lavavajillas. Siendo honestos, no todo va al lavavajillas (bomba, base y filtro, no), depende de la app y de recargarla, y al ser reciente aún tiene pocas reseñas. Si el presupuesto no es problema y quieres lo más avanzado sin cables, es la referencia.",
    datePublished: "2026-08-13",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "filtros-petkit-30",
    slug: "filtros-petkit-30",
    subcategory: "filtros-fuente",
    brand: "PETKIT",
    name: "PETKIT Filtros 3.0 (pack de 5)",
    price: "19,99",
    material: "Carbón activo + resina",
    capacity: "Pack de 5",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-petkit-3-0.webp",
    amazonUrl: "https://amzn.to/4xzRI5c",
    asin: "B0BK923TZY", // = sku en el schema (modelo W5-Lv)
    rating: "4.7",
    reviews: "6189",
    // La Solo 2 usa el filtro 3.0. La Max 2, según su propia ficha, monta otro
    // filtro (carbón sinterizado): por eso exactOnly evita que se le recomiende
    // este. Confirma la compatibilidad y ajusta fitsSlugs si hace falta.
    fitsSlugs: ["petkit-eversweet-solo-2"],
    exactOnly: true,
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "Fuentes PETKIT Eversweet 2.0/3.0 y CYBERTAIL (la Solo 1.0 antigua necesita la bandeja).",
    specs: {
      material: "4 capas: doble algodón + carbón de coco + resina de intercambio iónico (purolita)",
      capacity: "5 unidades (cambio cada 1-3 meses)",
      filter: "Compatible con Eversweet 2.0/3.0 y CYBERTAIL",
      cats: "Cambio cada 3 meses en modo SMART / 1 mes en modo NORMAL",
    },
    highlights: {
      pros: [
        "Filtro 3.0 con material de purolita: más filtración que las versiones antiguas",
        "Cuatro capas (doble algodón + carbón de coco + resina) que ablandan y dan mejor sabor",
        "Recambio oficial y de los mejor valorados de su tipo (4,7)",
      ],
      cons: [
        "Solo para fuentes PETKIT compatibles (Eversweet 2.0/3.0 y CYBERTAIL)",
        "La Solo 1.0 antigua necesita además la bandeja adaptadora",
        "El carbón no se lava para reutilizar una vez saturado",
      ],
    },
    features: [
      "Unidad de filtro PETKIT 3.0 con material de purolita (más filtración)",
      "Cuatro capas: doble algodón, carbón de cáscara de coco y resina de intercambio iónico",
      "Cambio cada 3 meses en modo SMART o cada mes en modo NORMAL",
    ],
    dynamicReview:
      "El recambio oficial de las Eversweet de PETKIT y uno de los mejor valorados de su categoría. La versión 3.0 usa material de purolita y combina cuatro capas —doble algodón, carbón de coco y resina de intercambio iónico— que ablanda el agua y ayuda a que el gato beba más. El pack de cinco cubre varios meses. Confirma tu modelo antes de comprar: encaja en Eversweet 2.0 y 3.0 y en la CYBERTAIL; si tienes una Solo 1.0 antigua, necesitas la bandeja adaptadora. Cámbialo a tiempo: un filtro saturado empeora el sabor y ahí es cuando dejan de beber.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),


  // ── GIOTOHUN Filtros acero 2,2 L (variantes 6+6 / 12+12) ─────────────────────
  P({
    id: "filtros-giotohun-acero",
    slug: "filtros-giotohun-acero",
    bestseller: true,
    subcategory: "filtros-fuente",
    brand: "GIOTOHUN",
    name: "GIOTOHUN Filtros para fuente de acero 2,2 L (carbón + esponja)",
    // Nivel superior = variante por defecto (6+6).
    price: "19,99",
    material: "Carbón activo + resina + esponja",
    capacity: "6+6 o 12+12",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-giotohun-acero-2-2l.webp",
    amazonUrl: "https://amzn.to/4wXpAch",
    asin: "B0DFMBP2BJ", // = sku en el schema (variante 6+6, S11-6+6)
    rating: "4.4",
    reviews: "18011",
    fitsSlugs: ["giotohun-acero-inoxidable-22l"],
    exactOnly: true, // solo la de acero 2,2 L (no otras GIOTOHUN)
    // Variantes de pack. Cada una: { label, price, asin, amazonUrl }.
    // (Si tu ProductMedia usa otra clave para el nombre —p. ej. `name`—, renómbrala.)
    /*variants: [
      { label: "6 filtros + 6 esponjas", price: "19,99", asin: "B0DFMBP2BJ", amazonUrl: "" },
      { label: "12 filtros + 12 esponjas", price: "29,99", asin: "B0DDC9J9VJ", amazonUrl: "" },
    ],*/
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "El recambio original de la fuente GIOTOHUN de acero 2,2 L (la de la ventana de nivel).",
    specs: {
      material: "Carbón activo + resina de intercambio iónico + esponja",
      capacity: "6+6 (3-6 meses) o 12+12 (6-8 meses)",
      filter: "Original GIOTOHUN, para la fuente de acero 2,2 L",
      cats: "Carbón cada 2-4 semanas · esponja más espaciada",
    },
    highlights: {
      pros: [
        "Recambio original de la GIOTOHUN de acero 2,2 L: encaje seguro (nº1 en ventas)",
        "Elige pack: 6+6 para 3-6 meses o 12+12 para 6-8 meses (mejor precio por unidad)",
        "Doble pieza (carbón + esponja): la esponja frena el pelo y protege la bomba",
      ],
      cons: [
        "Específico de la GIOTOHUN de acero: los genéricos no encajan igual",
        "El carbón no se lava para reutilizar una vez saturado",
        "Conviene enjuagarlo antes del primer uso para soltar el polvo de carbón",
      ],
    },
    features: [
      "Carbón activo + resina de intercambio iónico + esponja de prefiltro",
      "Disponible en pack de 6+6 o de 12+12",
      "Recambio original para la fuente GIOTOHUN de acero 2,2 L",
    ],
    dynamicReview:
      "El recambio que encaja en la GIOTOHUN de acero 2,2 L (la de la ventana de nivel), y de los más vendidos del momento. Trae dos piezas: el filtro de carbón con resina, que mejora el sabor y retiene cal y metales, y una esponja que atrapa el pelo antes de que llegue a la bomba (la avería más típica). Puedes elegir pack: el de 6+6 cubre unos meses y el de 12+12 sale más a cuenta si quieres reservas para medio año. Es específico de la marca, así que evita los genéricos, y cambia el carbón cada 2-4 semanas.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
  P({
    id: "filtros-feelneedy-w22",
    slug: "filtros-feelneedy-w22",
    bestseller: true,
    subcategory: "filtros-fuente",
    brand: "FEELNEEDY",
    name: "FEELNEEDY Filtros 6+6 (4 capas) para fuente de acero 2,8 L (FN-W22)",
    price: "15,99",
    material: "Algodón + resina + carbón de coco",
    capacity: "6 filtros + 6 esponjas",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-feelneedy-acero-2-8l.webp",
    amazonUrl: "https://amzn.to/4clZTd2",
    asin: "B0FF4CCPXK", // modelo FN-W22-LX6
    rating: "4.6",
    reviews: "329",
    fitsSlugs: ["feelneedy-acero-inoxidable-28l", "feelneedy-acero-inoxidable-28l-w22x"],
    exactOnly: true,
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "El recambio original de las FEELNEEDY de acero 2,8 L (modelo FN-W22, base y W22X).",
    specs: {
      material: "4 capas: algodón de alta densidad + resina de intercambio iónico + carbón de coco",
      capacity: "6 filtros + 6 esponjas (2-4 semanas)",
      filter: "Original FEELNEEDY, para la fuente de acero 2,8 L FN-W22",
      cats: "Cambio cada 2-4 semanas",
    },
    highlights: {
      pros: [
        "Recambio original de las FEELNEEDY de acero 2,8 L (FN-W22): encaje garantizado",
        "Filtración de 4 capas (algodón + resina + carbón de coco): ablanda y da mejor sabor",
        "Muy bien valorado (4,6) y a menudo en oferta flash",
      ],
      cons: [
        "Solo para las FEELNEEDY de acero 2,8 L FN-W22 (no las sin cable)",
        "Pocas reseñas todavía",
        "El carbón no se lava para reutilizar una vez saturado",
      ],
    },
    features: [
      "6 filtros de 4 capas + 6 esponjas de bomba",
      "Filtración de algodón + resina de intercambio iónico + carbón de coco",
      "Recambio original para la fuente FEELNEEDY de acero 2,8 L FN-W22",
    ],
    dynamicReview:
      "El recambio que encaja en las FEELNEEDY de acero 2,8 L (modelo FN-W22, tanto la base como la W22X). Cuatro capas —algodón denso, resina de intercambio iónico y carbón de cáscara de coco— que ablandan el agua, retienen cal y mejoran el sabor; la esponja frena el pelo antes de la bomba. Suele caer en oferta flash. Es específico de esa fuente, así que evita los genéricos y cámbialo cada 2-4 semanas.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),


  // ── FEELNEEDY FN-W17 → fuente sin cable 3,2 L (variantes 6+6 / 12+12) ─────────
  P({
    id: "filtros-feelneedy-w17",
    slug: "filtros-feelneedy-w17",
    bestseller: true,
    subcategory: "filtros-fuente",
    brand: "FEELNEEDY",
    name: "FEELNEEDY Filtros para fuente sin cable 3,2 L (FN-W17)",
    price: "17,99",
    material: "Algodón + resina + carbón de coco",
    capacity: "6+6 o 12+12",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-feelneedy-sin-cable-3-2l.webp",
    amazonUrl: "https://amzn.to/4qjJtrl",
    asin: "B0F9WVZBF7", // modelo FN-W17LX6 (variante 6+6)
    rating: "4.6",
    reviews: "2354",
    fitsSlugs: ["feelneedy-sin-cable-32l"],
    exactOnly: true,
    variants: [
      { label: "6 filtros + 6 esponjas", price: "14,92", asin: "B0F9WVZBF7", amazonUrl: "" },
      { label: "12 filtros + 12 esponjas", price: "28,13", asin: "", amazonUrl: "" }, // ⚠️ pega el ASIN del 12+12
    ],
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "El recambio original de la FEELNEEDY sin cable de 3,2 L (modelo FN-W17).",
    specs: {
      material: "4 capas: algodón de alta densidad + resina de intercambio iónico + carbón de coco",
      capacity: "6+6 o 12+12 (cambio cada 2-4 semanas)",
      filter: "Original FEELNEEDY, para la fuente sin cable 3,2 L FN-W17",
      cats: "Cambio cada 2-4 semanas",
    },
    highlights: {
      pros: [
        "Recambio original de la FEELNEEDY sin cable 3,2 L (FN-W17)",
        "Elige pack: 6+6 o 12+12 (mejor precio por unidad)",
        "Filtración de 4 capas + esponja de bomba, muy bien valorado (4,6)",
      ],
      cons: [
        "Solo para la FEELNEEDY FN-W17 de 3,2 L (no las de 2,8 L ni la de 4 L)",
        "El carbón no se lava para reutilizar una vez saturado",
        "Conviene enjuagarlo antes del primer uso",
      ],
    },
    features: [
      "Filtración de 4 capas + esponja de bomba",
      "Disponible en pack de 6+6 o de 12+12",
      "Recambio original para la FEELNEEDY sin cable 3,2 L FN-W17",
    ],
    dynamicReview:
      "El recambio de la FEELNEEDY sin cable de 3,2 L (modelo FN-W17). Filtración de cuatro capas —algodón, resina de intercambio iónico y carbón de coco— que reduce cal y mejora el sabor, con esponja para proteger la bomba. Puedes elegir pack 6+6 o 12+12 si prefieres reservas. Es específico de esa fuente; confírmalo y cámbialo cada 2-4 semanas.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),


  // ── FEELNEEDY YPD-C004 → fuente sin cable 4 L (variantes 6 / 10) ──────────────
  P({
    id: "filtros-feelneedy-ypd",
    slug: "filtros-feelneedy-ypd-c004",
    bestseller: true,
    subcategory: "filtros-fuente",
    brand: "FEELNEEDY",
    name: "FEELNEEDY Filtros (5 capas) para fuente 4 L (YPD-C004)",
    price: "18,99",
    material: "Algodón + resina + carbón de coco",
    capacity: "6 o 10 filtros",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-feelneedy-4l.webp",
    amazonUrl: "https://amzn.to/4qePXI0",
    asin: "B0BWMLPMTF", // FEELNEEDY-Filter-6-Pack (variante 6)
    rating: "4.6",
    reviews: "10092",
    fitsSlugs: ["feelneedy-sin-cable-4l"],
    exactOnly: true,
    variants: [
      { label: "6 filtros", price: "17,14", asin: "B0BWMLPMTF", amazonUrl: "" },
      { label: "10 filtros", price: "21,84", asin: "", amazonUrl: "" }, // ⚠️ pega el ASIN del pack de 10
    ],
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "El recambio original de la FEELNEEDY de 4 L (modelo YPD-C004).",
    specs: {
      material: "5 capas: algodón de alta densidad + resina de intercambio iónico + carbón de coco",
      capacity: "6 filtros (+ esponjas prefiltro y de bomba) o 10 filtros",
      filter: "Original FEELNEEDY, para la fuente de 4 L YPD-C004",
      cats: "Cambio cada 2-4 semanas",
    },
    highlights: {
      pros: [
        "Recambio original de la FEELNEEDY de 4 L (YPD-C004): encaje garantizado",
        "Filtración de 5 capas e incluye esponjas de prefiltro y de bomba",
        "Muy vendido y valorado (4,6 con más de 10.000 reseñas)",
      ],
      cons: [
        "Solo para la FEELNEEDY de 4 L YPD-C004",
        "El carbón no se lava para reutilizar una vez saturado",
        "Conviene enjuagarlo antes del primer uso",
      ],
    },
    features: [
      "Filtración de 5 capas con esponjas de prefiltro y de bomba",
      "Disponible en pack de 6 o de 10 filtros",
      "Recambio original para la fuente FEELNEEDY de 4 L YPD-C004",
    ],
    dynamicReview:
      "El recambio original de la FEELNEEDY de 4 L (modelo YPD-C004), y de los más vendidos de su tipo con miles de reseñas. Cinco capas de filtración —algodón denso, resina de intercambio iónico y carbón de coco— más esponjas de prefiltro y de bomba, así que protege bien y mejora el sabor. Elige pack de 6 o de 10. Específico de esa fuente; cámbialo cada 2-4 semanas.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),


  // ── Nenozi 9+9 → Nenozi 2,2 L ────────────────────────────────────────────────
  P({
    id: "filtros-nenozi",
    slug: "filtros-nenozi",
    subcategory: "filtros-fuente",
    brand: "Nenozi",
    name: "Nenozi Filtros 9+9 (triple filtración) para fuente 2,2 L",
    price: "19,88",
    material: "Algodón + carbón activo + resina",
    capacity: "9 filtros + 9 esponjas",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-nenozi-2-2l.webp",
    amazonUrl: "https://amzn.to/4xNN0AZ",
    asin: "B0CZ3TJZXH",
    rating: "4.7",
    reviews: "510",
    fitsSlugs: ["nenozi-plastico-22l"],
    exactOnly: true,
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "El recambio original de la fuente Nenozi de 2,2 L (74 oz).",
    specs: {
      material: "Triple filtración: algodón + carbón activo + resina de intercambio iónico",
      capacity: "9 filtros + 9 esponjas",
      filter: "Original Nenozi, para la fuente de 2,2 L",
      cats: "Carbón cada 2-4 semanas · esponja cada 2 meses",
    },
    highlights: {
      pros: [
        "Recambio original de la Nenozi de 2,2 L: encaje seguro",
        "Pack grande (9+9) con esponja antipelo que protege la bomba",
        "Triple filtración que retiene metales y mejora el sabor",
      ],
      cons: [
        "Solo para la fuente Nenozi de 2,2 L",
        "El carbón no se lava para reutilizar una vez saturado",
        "Conviene enjuagarlo 3-5 min antes del primer uso",
      ],
    },
    features: [
      "9 filtros de triple filtración + 9 esponjas antipelo",
      "Carbón activo + resina de intercambio iónico + capa de algodón",
      "Recambio original para la fuente Nenozi de 2,2 L",
    ],
    dynamicReview:
      "El recambio de la Nenozi de 2,2 L, en un pack generoso de 9+9. Triple filtración —algodón, carbón activo y resina de intercambio iónico— que retiene pelo y metales pesados y mejora el sabor; la esponja protege la bomba. Es específico de la marca, así que compra el oficial, y enjuágalo unos minutos antes del primer uso.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),


  // ── GIOTOHUN H1 → GIOTOHUN plástico 2 L (variantes 6+6 / 12+12) ──────────────
  P({
    id: "filtros-giotohun-2l",
    slug: "filtros-giotohun-2l",
    bestseller: true,
    subcategory: "filtros-fuente",
    brand: "GIOTOHUN",
    name: "GIOTOHUN Filtros H1 (4 capas) para fuente de 2 L / 3,2 L",
    price: "13,99",
    originalPrice: "16,99",
    material: "Algodón + carbón de coco + resina",
    capacity: "6+6 o 12+12",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-giotohun-h1-plastico.webp",
    amazonUrl: "https://amzn.to/3UzSIb3",
    asin: "B0FVSZM9ZX", // modelo H1-6filters (variante 6+6)
    rating: "4.2",
    reviews: "25762",
    fitsSlugs: ["giotohun-plastico-2l"],
    exactOnly: true,
    variants: [
      { label: "6 filtros + 6 esponjas", price: "13,99", asin: "B0FVSZM9ZX", amazonUrl: "" },
      { label: "12 filtros + 12 esponjas", price: "19,99", asin: "", amazonUrl: "" }, // ⚠️ pega el ASIN del 12+12
    ],
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "El recambio original H1 de la fuente GIOTOHUN de 2 L (la de plástico superventas).",
    specs: {
      material: "4 capas: filtro microporoso + carbón de coco + resina catiónica",
      capacity: "6+6 o 12+12 (cambio cada 2 semanas)",
      filter: "Original GIOTOHUN H1, para la fuente de 2 L / 3,2 L",
      cats: "Cambio cada 2 semanas",
    },
    highlights: {
      pros: [
        "Recambio original H1 de la GIOTOHUN de 2 L: encaje garantizado (25.000+ reseñas)",
        "Elige pack 6+6 o 12+12 (mejor precio por unidad)",
        "4 capas: microporoso + carbón de coco + resina catiónica contra metales y cal",
      ],
      cons: [
        "Específico del formato H1 (2 L / 3,2 L): confirma tu modelo",
        "Cambio recomendado cada 2 semanas (algo más frecuente que otros)",
        "El carbón no se lava para reutilizar una vez saturado",
      ],
    },
    features: [
      "Filtración de 4 capas (microporoso + carbón de coco + resina catiónica)",
      "Disponible en pack de 6+6 o de 12+12",
      "Recambio original GIOTOHUN H1 para la fuente de 2 L / 3,2 L",
    ],
    dynamicReview:
      "El recambio H1 de la GIOTOHUN de 2 L (la de plástico superventas), con más de 25.000 reseñas. Cuatro capas —filtro microporoso, carbón de coco y resina catiónica— que retienen pelo, olores y metales que provocan cálculos. Elige pack 6+6 o 12+12. Enjuágalo 3-5 min antes de usarlo y cámbialo cada dos semanas para mantener el agua apetecible.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),


  // ── APAUK APFSS-3201 → APAUK acero 3,2 L ─────────────────────────────────────
  P({
    id: "filtros-apauk",
    slug: "filtros-apauk",
    subcategory: "filtros-fuente",
    brand: "APAUK",
    name: "APAUK Filtros 4+4 (triple filtración) para fuente 3,2 L (APFSS-3201)",
    price: "16,99",
    material: "Algodón + carbón activo + resina",
    capacity: "4 filtros + 4 esponjas",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-apauk-acero-3-2l.webp",
    amazonUrl: "https://amzn.to/3SvXrKm",
    asin: "B0FG7MJB6F", // modelo APFSS-3201
    rating: "4.5",
    reviews: "3023",
    fitsSlugs: ["apauk-acero-inoxidable-32l"],
    exactOnly: true,
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "El recambio original de la fuente APAUK de 3,2 L (modelo APFSS-3201).",
    specs: {
      material: "Triple filtración: algodón + carbón activo + resina iónica",
      capacity: "4 filtros + 4 esponjas",
      filter: "Original APAUK, únicamente para la fuente APFSS-3201 (3,2 L)",
      cats: "Cambio cada 2-4 semanas",
    },
    highlights: {
      pros: [
        "Recambio original de la APAUK de 3,2 L (APFSS-3201): encaje garantizado",
        "Triple filtración (algodón + carbón + resina) que suaviza el agua y mejora el sabor",
        "Cada pieza empaquetada por separado",
      ],
      cons: [
        "Solo para la APAUK APFSS-3201: no sirve para otras fuentes",
        "Pack de 4: menos autonomía que los de 12",
        "El carbón no se lava para reutilizar una vez saturado",
      ],
    },
    features: [
      "4 filtros de triple filtración + 4 esponjas",
      "Algodón + carbón activo + resina de intercambio iónico",
      "Recambio original para la fuente APAUK de 3,2 L (APFSS-3201)",
    ],
    dynamicReview:
      "El recambio original de la APAUK de 3,2 L (modelo APFSS-3201). Triple filtración —algodón, carbón activo y resina iónica— que retiene pelo e impurezas, ablanda el agua y mejora el sabor. Es específico de esa fuente, así que compra el oficial; el pack de 4 cunde algo menos que los grandes, pero cumple. Cámbialo cada 2-4 semanas.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),


  // ── BalimoPet BP03 → BalimoPet acero 2,6 L ───────────────────────────────────
  P({
    id: "filtros-balimopet",
    slug: "filtros-balimopet",
    subcategory: "filtros-fuente",
    brand: "BalimoPet",
    name: "BalimoPet Filtros 6+6 (cuádruple filtración) para fuente 2,6 L",
    price: "18,99",
    material: "Algodón + carbón activo + resina + espuma",
    capacity: "6 filtros + 6 esponjas",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-balimopet-acero-2-6l.webp",
    amazonUrl: "https://amzn.to/4g071hz",
    asin: "B0FN2Z5RK3", // modelo BP03
    rating: "4.8",
    reviews: "84",
    fitsSlugs: ["balimopet-acero-inoxidable-26l"],
    exactOnly: true,
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "El recambio original de la fuente BalimoPet de acero 2,6 L: los de otras marcas no encajan.",
    specs: {
      material: "Cuádruple: algodón de alta densidad + carbón activo + resina + espuma",
      capacity: "6 filtros + 6 esponjas (3-6 meses)",
      filter: "Original BalimoPet, para la fuente de acero 2,6 L",
      cats: "Filtro cada 2-4 semanas · espuma cada 1-2 meses",
    },
    highlights: {
      pros: [
        "Recambio original de la BalimoPet de 2,6 L: encaje garantizado (los genéricos no valen)",
        "Cuádruple filtración con esponja antipelo que protege la bomba",
        "Nota altísima (4,8), aunque con pocas reseñas todavía",
      ],
      cons: [
        "Solo para la fuente BalimoPet de acero 2,6 L",
        "Pocas reseñas aún (producto reciente)",
        "El carbón no se lava para reutilizar una vez saturado",
      ],
    },
    features: [
      "6 filtros de cuádruple filtración + 6 esponjas",
      "Algodón de alta densidad + carbón activo + resina de intercambio iónico + espuma",
      "Recambio original para la fuente BalimoPet de acero 2,6 L",
    ],
    dynamicReview:
      "El recambio original de la BalimoPet de acero 2,6 L, y la marca avisa: los de otras marcas no encajan. Cuádruple filtración —algodón denso, carbón activo, resina de intercambio iónico y espuma— que retiene pelo y metales y mejora el sabor. La nota es excelente, aunque con pocas reseñas todavía. Remójalo 5 min antes de usarlo y cambia el filtro cada 2-4 semanas.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),


  // ── PawPoll PW-D02 → PawPoll plástico 2,2 L (variantes 6+6 / 12+12) ──────────
  P({
    id: "filtros-pawpoll",
    slug: "filtros-pawpoll",
    subcategory: "filtros-fuente",
    brand: "PawPoll",
    name: "PawPoll Filtros para fuente 2,2 L (carbón + esponja)",
    price: "17,99",
    material: "Algodón + carbón activo + resina",
    capacity: "6+6 o 12+12",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-pawpoll-2-2l.webp",
    amazonUrl: "https://amzn.to/4x8mBxW",
    asin: "B0D9BPB9MX", // modelo PW-D02 (variante 6+6)
    rating: "4.7",
    reviews: "470",
    fitsSlugs: ["pawpoll-plastico-22l"],
    exactOnly: true,
    variants: [
      { label: "6 filtros + 6 esponjas", price: "17,99", asin: "B0D9BPB9MX", amazonUrl: "" },
      { label: "12 filtros + 12 esponjas", price: "29,99", asin: "", amazonUrl: "" }, // ⚠️ pega el ASIN del 12+12
    ],
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "El recambio original de las fuentes PawPoll de 2,2 L: los de otras marcas no encajan.",
    specs: {
      material: "Algodón de alta densidad + carbón activo + resina de intercambio iónico",
      capacity: "6+6 o 12+12 (cambio cada 2-4 semanas)",
      filter: "Original PawPoll, para la fuente de 2,2 L",
      cats: "Filtro cada 2-4 semanas · esponja cada 1-2 meses",
    },
    highlights: {
      pros: [
        "Recambio original de la PawPoll de 2,2 L: encaje garantizado",
        "Elige pack 6+6 o 12+12 (mejor precio por unidad)",
        "Nota altísima (4,8) con esponja antipelo que protege la bomba",
      ],
      cons: [
        "Solo para las fuentes PawPoll (los genéricos no valen)",
        "El carbón no se lava para reutilizar una vez saturado",
        "Remójalo antes del primer uso para soltar el polvo de carbón",
      ],
    },
    features: [
      "Algodón de alta densidad + carbón activo + resina de intercambio iónico",
      "Disponible en pack de 6+6 o de 12+12",
      "Recambio original para la fuente PawPoll de 2,2 L",
    ],
    dynamicReview:
      "El recambio original de la PawPoll de 2,2 L, muy bien valorado (4,8). Combina algodón denso, carbón activo y resina de intercambio iónico para retener pelo y metales y mejorar el sabor, con esponja que protege la bomba. Elige pack 6+6 o 12+12 según cuánta reserva quieras. Es específico de la marca; remójalo antes de usarlo y cámbialo cada 2-4 semanas.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),


  // ── PETKIT Eversweet MAX → PETKIT Eversweet Max 2 (carbón sinterizado) ───────
  P({
    id: "filtros-petkit-max",
    slug: "filtros-petkit-max",
    subcategory: "filtros-fuente",
    brand: "PETKIT",
    name: "PETKIT Filtros (pack de 5) para Eversweet MAX (carbón sinterizado)",
    price: "19,99",
    material: "Algodón + carbón activo sinterizado",
    capacity: "Pack de 5",
    color: "Blanco",
    image: "/images/filtros/filtros-fuente-petkit-eversweet-max.webp",
    amazonUrl: "https://amzn.to/4zf5sEd",
    asin: "B0CXPHZVHH", // modelo CT-W3-Lv-EU (unidad RECT)
    rating: "4.8",
    reviews: "787",
    fitsSlugs: ["petkit-eversweet-max-2-3l"],
    exactOnly: true, // la Max 2 usa ESTE (no el 3.0)
    tags: [T.REPLACEMENT_FILTER, T.ACTIVATED_CARBON],
    bestFor: "El recambio específico de la PETKIT Eversweet MAX (no compatible con otras PETKIT).",
    specs: {
      material: "Algodón de alta densidad + carbón activo sinterizado",
      capacity: "5 unidades (cambio cada 2-4 semanas)",
      filter: "Unidad RECT, solo para la Eversweet MAX inalámbrica",
      cats: "Cambio cada 2-4 semanas (aviso por app)",
    },
    highlights: {
      pros: [
        "Recambio específico de la Eversweet MAX: encaje garantizado",
        "Carbón activo sinterizado que adsorbe cloro y olores para mejor sabor",
        "Excelente valoración (4,8) y aviso de cambio desde la app",
      ],
      cons: [
        "Solo para la Eversweet MAX: NO es compatible con otras fuentes PETKIT",
        "El carbón no se lava para reutilizar una vez saturado",
        "Requiere activar el cartucho en agua 5 min antes de usarlo",
      ],
    },
    features: [
      "Unidad de filtro RECT con carbón activo sinterizado",
      "Algodón de alta densidad que retiene el pelo",
      "Recambio específico para la PETKIT Eversweet MAX inalámbrica",
    ],
    dynamicReview:
      "El recambio propio de la PETKIT Eversweet MAX, distinto del filtro 3.0 del resto de la gama. Usa carbón activo sinterizado que adsorbe cloro y olores, con algodón denso que retiene el pelo, y la app te avisa cuándo cambiarlo. Importante: es específico de la MAX y no encaja en otras PETKIT. Activa el cartucho en agua 5 minutos antes de montarlo y cámbialo cada 2-4 semanas.",
    datePublished: "2026-08-15",
    updatedAt: "2026-08-28T00:00:00.000Z",
  }),
];