// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { productos, getProductSilo } from './src/data/ProductData.js';
import { CONTENT_INDEX } from './src/data/content.js';
import { SILOS, CATEGORIES, GUIDES } from './src/data/taxonomy.js';

// Rutas de silos APAGADOS (active:false): no deben entrar en el sitemap.
const inactiveSiloIds = new Set(
  Object.values(SILOS).filter((s) => !s.active).map((s) => s.id),
);
const INACTIVE_PATHS = new Set();
for (const s of Object.values(SILOS)) if (!s.active) INACTIVE_PATHS.add(s.path);
for (const c of CATEGORIES) {
  if (inactiveSiloIds.has(c.silo)) {
    if (c.hub) INACTIVE_PATHS.add(c.hub.path);
    if (c.comparativa) INACTIVE_PATHS.add(c.comparativa.path);
  }
}
for (const g of GUIDES) {
  const c = CATEGORIES.find((x) => x.id === g.category);
  if (c && inactiveSiloIds.has(c.silo)) INACTIVE_PATHS.add(g.path);
}
for (const p of productos) {
  if (inactiveSiloIds.has(getProductSilo(p))) INACTIVE_PATHS.add(`/productos/${p.slug}/`);
}

const LASTMOD = {
  ...Object.fromEntries(CONTENT_INDEX.map((e) => [e.path, e.updatedAt])),
  ...Object.fromEntries(productos.map((p) => [`/productos/${p.slug}/`, p.updatedAt])),
};

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        if (/\/(aviso-legal|politica-privacidad|politica-cookies)\//.test(path)) return false;
        if (INACTIVE_PATHS.has(path)) return false; // silos apagados fuera del sitemap
        return true;
      },
      serialize(item) {
        const path = new URL(item.url).pathname;
        const d = LASTMOD[path];
        if (d) item.lastmod = new Date(d).toISOString();
        return item;
      },
    }),
  ],
  site: 'https://micifu.es/',
});
