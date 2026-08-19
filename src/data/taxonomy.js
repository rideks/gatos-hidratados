// ============================================================================
// TAXONOMÍA CENTRAL — única fuente de verdad del sitio.
// silo → categoría → (hub / comparativa / guía) → productos.
//
// Abrir un silo o añadir una categoría se hace SOLO aquí: navegación,
// breadcrumbs, enlazado interno de fichas y validación de productos derivan
// de esta estructura. Los productos referencian `silo` + `subcategory` (id).
//
// Estrategia (ver informe SEO): empezamos SOLO por "Hidratación" (fuentes de
// agua + filtros). "Higiene" (arena/areneros) y "Alimentación" quedan apagados
// hasta ganar autoridad en el primer clúster.
// ============================================================================
import { Droplets, Filter, Trash2, Utensils, UtensilsCrossed } from "lucide-react";

// ── Silos ───────────────────────────────────────────────────────────────────
// URLs PLANAS: el silo no va en la carpeta de la URL; se comunica con
// breadcrumbs/menús/enlaces. `path` es la página pilar del silo.
export const SILOS = {
  hidratacion: {
    id: "hidratacion",
    name: "Hidratación",
    path: "/hidratacion-felina/",
    icon: Droplets,
    active: true,
  },
  comederos: {
    id: "comederos",
    name: "Comederos",
    path: "/comederos-para-gatos/",
    icon: UtensilsCrossed,
    active: false, // MONTADO pero APAGADO: se activa poniendo true (aparece en menús/sitemap)
  },
  higiene: {
    id: "higiene",
    name: "Higiene y areneros",
    path: "/higiene-del-gato/",
    icon: Trash2,
    active: false, // se abre tras ganar autoridad en Hidratación
  },
  alimentacion: {
    id: "alimentacion",
    name: "Alimentación",
    path: "/alimentacion-felina/",
    icon: Utensils,
    active: false,
  },
};

// ── Categorías ──────────────────────────────────────────────────────────────
// Cada categoría (= `subcategory` del producto) puede tener:
//  - hub:         página "hub" de término genérico (padre en breadcrumb)
//  - comparativa: comparativa long-tail principal
// (ambas opcionales; se rellenan a medida que publicas contenido).
export const CATEGORIES = [
  {
    id: "fuentes-agua",
    silo: "hidratacion",
    name: "Fuentes de agua",
    icon: Droplets,
    blurb: "Acero vs plástico, caudal, nivel de ruido y capacidad.",
    hub: { title: "Fuentes de agua para gatos", path: "/fuentes-de-agua-para-gatos/" },
    comparativa: { title: "Mejores fuentes de agua para gatos 2026", path: "/mejores-fuentes-agua-para-gatos/" },
  },
  {
    id: "filtros-fuente",
    silo: "hidratacion",
    name: "Filtros de recambio",
    icon: Filter,
    blurb: "Carbón activo y espuma: compatibilidad y frecuencia de cambio.",
    comparativa: { title: "Filtros de recambio para fuentes de gatos", path: "/filtros-recambio-fuentes-gatos/" },
  },

  // ── COMEDEROS (silo apagado) ────────────────────────────────────────────────
  {
    id: "comederos-automaticos",
    silo: "comederos",
    name: "Comederos automáticos",
    icon: UtensilsCrossed,
    blurb: "Programables, por gravedad y con app: capacidad, frescura y limpieza.",
    hub: { title: "Comederos para gatos", path: "/comederos-para-gatos/" },
    comparativa: { title: "Mejores comederos automáticos para gatos 2026", path: "/mejores-comederos-automaticos-gatos-2026/" },
  },
];

// ── Guías informativas (registro editorial) ─────────────────────────────────
// `category` conecta la guía con su categoría (para el enlazado de fichas);
// null = guía transversal (aparece en el menú pero no cuelga de una categoría).
export const GUIDES = [
  { title: "Cómo limpiar la fuente de agua de tu gato paso a paso", short: "Cómo limpiar la fuente", path: "/como-limpiar-fuente-agua-gatos/", category: "fuentes-agua" },
  { title: "¿Cada cuánto hay que cambiar el filtro de la fuente?", short: "Cada cuánto cambiar el filtro", path: "/cada-cuanto-cambiar-filtro-fuente-gato/", category: "filtros-fuente" },
  { title: "Mi gato no bebe de la fuente: causas y soluciones", short: "Mi gato no bebe de la fuente", path: "/mi-gato-no-bebe-de-la-fuente/", category: "fuentes-agua" },
  { title: "¿Cuánta agua debe beber un gato al día? (tabla por peso)", short: "Cuánta agua debe beber", path: "/cuanta-agua-debe-beber-un-gato/", category: "fuentes-agua" },
  { title: "Fuente de agua vs cuenco: ¿de verdad bebe más tu gato?", short: "Fuente vs cuenco", path: "/fuente-de-agua-vs-cuenco-gatos/", category: "fuentes-agua" },
  { title: "¿Por qué mi gato no bebe agua? Causas y cómo animarle a beber", short: "Por qué mi gato no bebe agua", path: "/por-que-mi-gato-no-bebe-agua/", category: "fuentes-agua" },
  { title: "Filtro original vs genérico para fuente de gatos", short: "Filtro original vs genérico", path: "/filtro-original-vs-generico-fuente-gatos/", category: "filtros-fuente" },
  { title: "Acné felino y cuencos de plástico: por qué el acero es mejor", short: "Acné felino y plástico", path: "/acne-felino-cuencos-plastico/", category: "fuentes-agua" },
  {
    title: "Agua y problemas urinarios en gatos: cistitis, cristales y urgencias",
    short: "Agua y problemas urinarios",
    path: "/agua-problemas-urinarios-gatos/",
    category: null,
  },
];

// ── Helpers de taxonomía ─────────────────────────────────────────────────────
export const getCategory = (id) => CATEGORIES.find((c) => c.id === id);
export const getCategoriesBySilo = (siloId) => CATEGORIES.filter((c) => c.silo === siloId);
export const getActiveSilos = () => Object.values(SILOS).filter((s) => s.active);
export const isCategoryId = (id) => CATEGORIES.some((c) => c.id === id);
export const getGuideByCategory = (id) => GUIDES.find((g) => g.category === id);
