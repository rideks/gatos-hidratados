// Navegación DERIVADA de la taxonomía. Un desplegable por SILO ACTIVO, cada uno
// con SUS categorías, comparativas y guías. Los silos apagados no aparecen.
import { CATEGORIES, SILOS, getActiveGuides } from "../data/taxonomy.js";

const GUIAS_EN_MENU = 6; // tope por silo; el resto vive en "Ver todas las guías"
const activeGuides = getActiveGuides();

// Guías de un silo: las de sus categorías + las transversales (category null),
// que colgamos del silo de hidratación (pilar de salud del sitio).
const guidesForSilo = (siloId) =>
  activeGuides.filter((g) => {
    const c = CATEGORIES.find((x) => x.id === g.category);
    return c ? c.silo === siloId : siloId === "hidratacion";
  });

export const megaMenus = Object.values(SILOS)
  .filter((s) => s.active)
  .map((silo) => {
    const cats = CATEGORIES.filter((c) => c.silo === silo.id);
    const guides = guidesForSilo(silo.id);

    const guideLinks = guides
      .slice(0, GUIAS_EN_MENU)
      .map((g) => ({ name: g.short, href: g.path }));
    if (guides.length > GUIAS_EN_MENU) {
      guideLinks.push({ name: "Ver todas las guías", href: silo.path, more: true });
    }

    const columns = [
      {
        title: "Categorías",
        links: cats
          .filter((c) => c.hub)
          .map((c) => ({ name: c.hub.title, href: c.hub.path, bold: true })),
      },
      {
        title: "Comparativas",
        links: cats
          .filter((c) => c.comparativa)
          .map((c) => ({ name: c.name, href: c.comparativa.path })),
      },
      { title: "Guías", links: guideLinks },
    ].filter((col) => col.links.length > 0);

    return { id: silo.id, label: silo.name, path: silo.path, columns };
  });

export const primaryLinks = [
  { name: "Catálogo", href: "/catalogo/" },
  { name: "Comparativas", href: "/comparativas/" },
  { name: "Ofertas", href: "/ofertas/" },
];