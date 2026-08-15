// ============================================================================
// Feed RSS 2.0 de las GUÍAS (contenido informativo) de silos ACTIVOS.
// Sin dependencias externas: XML a mano con escapado seguro. Astro lo
// prerenderiza a /rss.xml en la salida estática.
//
// Ubicación: src/pages/rss.xml.js
// ============================================================================
import { SITE } from "../config/site.js";
import { GUIDES, CATEGORIES, SILOS } from "../data/taxonomy.js";
import { CONTENT_INDEX } from "../data/content.js";

const abs = (path) => new URL(path, SITE.url).href;

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Fecha por ruta desde el índice del sitemap (fallback: ahora).
const dateByPath = Object.fromEntries(CONTENT_INDEX.map((e) => [e.path, e.updatedAt]));
const isActive = (siloId) => SILOS[siloId]?.active;

export async function GET() {
  const items = GUIDES.filter((g) => {
    const cat = CATEGORIES.find((c) => c.id === g.category);
    return !cat || isActive(cat.silo); // no filtra guías de silos apagados
  })
    .map((g) => ({
      title: g.title,
      link: abs(g.path),
      date: dateByPath[g.path] ? new Date(dateByPath[g.path]) : new Date(),
      desc: g.short || g.title,
    }))
    .sort((a, b) => b.date - a.date);

  const body = items
    .map(
      (it) => `    <item>
      <title>${esc(it.title)}</title>
      <link>${esc(it.link)}</link>
      <guid isPermaLink="true">${esc(it.link)}</guid>
      <pubDate>${it.date.toUTCString()}</pubDate>
      <description>${esc(it.desc)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.name)} — Guías</title>
    <link>${esc(SITE.url)}</link>
    <description>${esc(SITE.description)}</description>
    <language>es-ES</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${esc(abs("/rss.xml"))}" rel="self" type="application/rss+xml" />
${body}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}