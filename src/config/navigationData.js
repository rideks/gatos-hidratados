// Navegación DERIVADA de la taxonomía. Solo muestra categorías/guías de silos
// ACTIVOS: los silos apagados (active:false) no aparecen en el menú.
import { CATEGORIES, GUIDES, SILOS } from "../data/taxonomy.js";

const isActive = (siloId) => SILOS[siloId]?.active;
const activeCats = CATEGORIES.filter((c) => isActive(c.silo));
const activeGuides = GUIDES.filter((g) => {
  const cat = CATEGORIES.find((c) => c.id === g.category);
  return !cat || isActive(cat.silo);
});

const withHub = activeCats.filter((c) => c.hub);
const withComparativa = activeCats.filter((c) => c.comparativa);

export const megaMenu = {
  label: SILOS.hidratacion.name,
  columns: [
    {
      title: "Categorías",
      links: withHub.map((c) => ({ name: c.hub.title, href: c.hub.path, icon: c.icon, bold: true })),
    },
    {
      title: "Comparativas",
      links: withComparativa.map((c) => ({ name: c.name, href: c.comparativa.path, icon: c.icon })),
    },
    {
      title: "Guías",
      links: activeGuides.map((g) => ({ name: g.short, href: g.path })),
    },
  ],
  featured: {
    eyebrow: "Empieza aquí",
    title: "Guía de hidratación felina",
    desc: "Por qué el agua en movimiento cambia cuánto bebe tu gato.",
    href: SILOS.hidratacion.path,
  },
};

export const primaryLinks = [
  { name: "Catálogo", href: "/catalogo/" },
  { name: "Comparativas", href: "/comparativas/" },
  { name: "Ofertas", href: "/ofertas/" },
  { name: "Guía", href: SILOS.hidratacion.path },
];
