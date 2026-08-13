// ============================================================================
// FAQs de producto DINÁMICAS, de calidad y ÚNICAS por ficha.
//
// Criterio (post-mayo 2026: Google retiró el rich result de FAQ):
//  - El valor está en la UTILIDAD en página + la cita por motores de IA, no en
//    el snippet. Respuestas de 2-4 frases, personalizadas con los datos del
//    producto (marca, capacidad, material).
//  - Se prioriza lo DISTINTIVO (categoría + valoración editorial) para que dos
//    fichas no compartan el mismo bloque (riesgo de contenido duplicado).
//
// Orden final: manuales (product.faqs) → categoría → editorial → atributos.
// ============================================================================
import { PRODUCT_TAGS } from "./../data/productTags.js";
import { getEditorialScore } from "../data/EditorialScores.js";

const lower = (s) => (typeof s === "string" ? s.charAt(0).toLowerCase() + s.slice(1) : s);

// Preguntas específicas por categoría (lo que de verdad se pregunta de cada tipo).
function categoryFaqs(product, has) {
  const sub = product.subcategory;
  const out = [];

  if (sub === "fuentes-agua") {
    out.push({
      question: "¿Hace ruido? ¿Se puede tener cerca de donde duermo?",
      answer: has(PRODUCT_TAGS.SILENT)
        ? "Es de las silenciosas: la bomba trabaja por debajo del nivel que molesta de noche, siempre que mantengas el nivel de agua por encima del mínimo (una bomba a medio sumergir es la causa nº1 de ruido)."
        : "Como toda fuente con bomba, hace un ligero sonido de agua. Para minimizarlo, mantén el depósito lleno por encima del mínimo y limpia la bomba a menudo: casi todo el ruido viene de una bomba medio seca o con pelo.",
    });
    if (has(PRODUCT_TAGS.STAINLESS_STEEL)) {
      out.push({
        question: "¿El acero ayuda con el acné felino en la barbilla?",
        answer:
          "Sí. Al no ser poroso, el acero inoxidable no acumula bacterias en la zona de contacto como el plástico, y eso reduce el riesgo de acné felino. Aun así, límpiala con frecuencia y renueva el agua cada uno o dos días.",
      });
    }
    if (has(PRODUCT_TAGS.MULTI_CAT) || has(PRODUCT_TAGS.LARGE_CAPACITY)) {
      out.push({
        question: "¿Sirve para varios gatos?",
        answer: `Sí, está pensada para eso${product.capacity ? ` (${product.capacity})` : ""}. Con varios gatos, elige capacidad amplia y, si puedes, más de un punto de bebida para que ninguno monopolice la fuente.`,
      });
    }
  }

  if (sub === "filtros-fuente") {
    out.push({
      question: "¿Cómo sé si son compatibles con mi fuente?",
      answer:
        "Mídelos: la mayoría de fuentes redondas usan filtros de un diámetro estándar, pero no todas. Compara el diámetro del filtro que ya tienes con el de este recambio antes de comprar; es el error más habitual.",
    });
    out.push({
      question: "¿Cada cuánto hay que cambiarlos?",
      answer:
        "Como norma, cada 2 a 4 semanas, y antes si tienes varios gatos o el agua se enturbia. Un filtro saturado deja de filtrar y empeora el sabor, que es justo lo que hace que el gato pierda interés por beber.",
    });
  }

  return out;
}

// FAQ editorial: "¿merece la pena?" a partir de tu nota y pros/cons. Única por ficha.
function editorialFaq(product) {
  const ed = getEditorialScore(product.slug);
  const pros = product.highlights?.pros || [];
  const cons = product.highlights?.cons || [];
  if (!ed && pros.length === 0) return null;

  let answer = "";
  if (ed) answer += `En nuestro análisis le damos ${ed.rating}/5. `;
  if (pros.length) answer += `Destaca por ${lower(pros[0])}${pros[1] ? ` y ${lower(pros[1])}` : ""}. `;
  if (cons.length) answer += `Su punto flojo: ${lower(cons[0])}. `;
  answer += "Míralo con calma según tu caso (número de gatos, sitio y presupuesto).";

  return { question: `¿Merece la pena la ${product.brand || "fuente"}?`, answer: answer.trim() };
}

export function getProductFaqs(product) {
  if (!product) return [];
  const has = (t) => Array.isArray(product.tags) && product.tags.includes(t);
  const manual = Array.isArray(product.faqs) ? product.faqs : [];

  const attr = [];

  if (product.material) {
    attr.push({
      question: "¿De qué material está hecha?",
      answer: `Está fabricada en ${product.material.toLowerCase()}${has(PRODUCT_TAGS.BPA_FREE) ? ", libre de BPA" : ""}. El material influye en la higiene y en cuánto mantenimiento pide: acero y cerámica son más higiénicos, el plástico exige limpieza más frecuente.`,
    });
  }

  if (product.capacity) {
    attr.push({
      question: "¿Qué capacidad tiene?",
      answer: `${product.capacity}. Cuanta más capacidad, menos veces tendrás que rellenar; con varios gatos o calefacción, mejor pecar de amplio.`,
    });
  }

  if (has(PRODUCT_TAGS.WIRELESS) || has(PRODUCT_TAGS.BATTERY)) {
    attr.push({
      question: "¿Funciona sin enchufe?",
      answer:
        "Sí, es inalámbrica: lleva batería recargable, así que puedes colocarla donde no llegue un enchufe y evitas cables al alcance del gato. A cambio, tendrás que recargarla cada cierto tiempo.",
    });
  }

  // Ensamblado: prioriza lo distintivo (categoría + editorial) sobre lo genérico.
  const ordered = [
    ...manual,
    ...categoryFaqs(product, has),
    ...[editorialFaq(product)].filter(Boolean),
    ...attr,
  ];

  const seen = new Set();
  return ordered
    .filter((f) => {
      const k = (f?.question || "").trim().toLowerCase();
      if (!f?.question || !f?.answer || seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .slice(0, 6);
}
