# Micifú — Web de afiliados de Amazon (Astro + React + Cloudflare)

Web de afiliados **mobile-first** (marca **Micifú**, paraguas de cuidado felino) para el nicho de **hidratación felina**, empezando por
**fuentes de agua para gatos** (siguiendo la priorización del informe SEO: fuentes →
arena → comida húmeda). Calca la arquitectura de la web hermana de conservación.

Stack: **Astro 5** (salida estática), **React 19** solo para islas interactivas,
**Tailwind v4**, tipografía self-hosted (Bricolage Grotesque + Inter), **lucide-react**.

## 1. Arranque
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (estático)
npm run preview
```
Requiere Node 20.19+ (o 22+). Astro 7.

## 2. Despliegue (Cloudflare Workers, static assets)
100% estático, sin adapter. `npx wrangler login` y `npm run deploy`. Config en
`wrangler.jsonc` (sin `main`). También válido en Cloudflare Pages (build `npm run build`,
output `dist`).

## 3. Configúralo (un solo sitio)
> ⚠️ **Nombre/dominio:** la marca es **Micifú** (`micifu.es` como valor por defecto).
> Antes de comprar, **verifica la disponibilidad del dominio y la marca**. Para
> cambiarlo, edita `SITE` en `src/config/site.js` y `site` en `astro.config.mjs`.

Casi todo en **`src/config/site.js`**: `SITE`, `AMAZON.tag` (**tu ID de asociado**),
`AUTHOR`, `ANALYTICS.gaId`. Los enlaces de Amazon se construyen SIEMPRE con tu tag en
`src/utils/amazon.js` (pasa un ASIN, un `amzn.to/...` o una URL completa).

## 4. Arquitectura de datos (para escalar)
Todo deriva de **`src/data/taxonomy.js`** (fuente única): `SILOS`
(hidratacion activa; higiene/alimentacion apagados), `CATEGORIES` y `GUIDES`. De aquí
salen solos el mega-menú (`config/navigationData.js`), el enlazado interno
(`config/site.js`) y la validación de productos.

- `src/data/productTags.js` — etiquetas y labels.
- `src/data/products/agua.js` — productos del silo de hidratación (fuentes + filtros).
- `src/data/ProductData.js` — índice + helpers (`getBySlug`, `getBySubcategory`,
  `getBySilo`, `getByTag`, `getRelated`, `getDiscounted`).
- `src/data/EditorialScores.js` — tus notas propias (E-E-A-T; alimentan la Review del schema).
- `src/data/ComparativaData.js` — comparativas "versus" (material vs material).
- `src/data/content.js` — índice para el `lastmod` del sitemap.

**Cómo añadir cosas:**
- *Un producto:* una entrada en `products/agua.js`.
- *Una categoría/comparativa/guía:* una entrada en `taxonomy.js` + su página.
- *Abrir un silo nuevo (arena, comida):* crea `products/higiene.js`, añade el silo en
  `taxonomy.js` (`active: true`), añade import + spread en `ProductData.js`.

## 5. Sistema de FAQs
`src/utils/productFaqs.js` genera FAQs **únicas por ficha** (manuales → categoría →
editorial → atributos), adaptadas a fuentes y filtros. Las comparativas y guías llevan
sus propias FAQ con schema `FAQPage`.

## 6. Cumplimiento (guardarraíles)
- **No copiar reseñas de Amazon:** `dynamicReview` es texto editorial TUYO.
- El schema **no** emite `aggregateRating` con datos de Amazon; usa tu Review propia
  (solo si el slug tiene nota en `EditorialScores.js`).
- Pros y contras equilibrados en cada producto (defectos reales).
- Metodología visible en `/quienes-somos/#author`.

## 7. Contenido publicado (silo Hidratación)
Pilar `/hidratacion-felina/` (con cifras veterinarias reales: 50-60 ml/kg/día, señales de
deshidratación, evidencia honesta sobre fuentes y señales de alarma), hub
`/fuentes-de-agua-para-gatos/`, comparativas (`mejores-fuentes-agua-para-gatos-2026` con
guía de decisión + metodología + ficha técnica por producto, `fuentes-acero-inoxidable-gatos`,
`fuentes-agua-silenciosas-gatos`, `filtros-recambio-fuentes-gatos`), 1 versus
(`comparativas/fuente-acero-vs-plastico-gatos`), 3 guías, 7 fichas (con `specs` y `bestFor`),
ofertas, catálogo.

### Enfoque de contenido (E-E-A-T)
El contenido es **preciso y honesto**, no marketing: se citan cifras veterinarias reales,
se reconoce que la evidencia sobre si las fuentes aumentan la ingesta es **mixta** y se
explica a quién le sirve de verdad una fuente. Componentes reutilizables para esto:
`KeyFacts.astro` (respuesta rápida), `VetDisclaimer.astro` (aviso YMYL), `SpecTable.astro`
(ficha técnica comparable). Cada producto tiene `bestFor` (para quién es) y `specs`
(material/grado, capacidad, ruido, bomba, caudal, filtro, alimentación, nº de gatos).

## Silos apagados (montados pero no live)
El proyecto soporta silos "en construcción": creados pero **fuera de menús,
sitemap y buscadores** (noindex), listos para activar con **una sola línea**.

- **Comederos** ya está montado y **APAGADO**: hub `/comederos-para-gatos/`,
  comparativa `/mejores-comederos-automaticos-gatos-2026/` y 3 productos
  (PETKIT 2,8 L, HoneyGuaridan A36, Nobleza 2en1).
- **Activarlo:** en `src/data/taxonomy.js`, pon `SILOS.comederos.active = true`.
  Al recompilar, aparece en menús/footer, entra en el sitemap y sus páginas
  pasan a `index`. (Igual para `higiene` y `alimentacion` cuando toque.)

## 8. Productos (REALES) — lo que debes completar
El catálogo (`src/data/products/agua.js`) ya trae **13 productos reales del
mercado** (8 fuentes + 5 filtros): PETLIBRO acero 2 L, Catit PIXI acero, Veken
acero 3,2 L, PETKIT Eversweet 3 Pro (inalámbrica), PETKIT sin cable con sensor,
PETKIT Eversweet Solo 2, iPettie cerámica 2,1 L, Catit Flower 3 L; y filtros
Catit Triple Action, PETKIT 3.0, PETLIBRO Dockstream, Cat Mate y prefiltros
PetSafe. Marca, modelo, material, capacidad y specs son de fichas reales; las
reseñas, pros y contras son texto editorial propio.

En cada producto quedan **dos campos vacíos a propósito** para que los rellenes:
- `image: ""`      → ruta de la foto en `public/images/fuentes/...`
- `amazonUrl: ""`  → tu enlace de afiliado (ASIN, `amzn.to/...` o URL con tu tag)

Mientras `amazonUrl` esté vacío, los botones "Ver en Amazon" no llevan a ningún
sitio (apuntan a `""`). En cuanto pegues el ASIN o el enlace, funcionan solos.
Revisa también `price` (son orientativos y cambian a menudo en Amazon).

> Nota: no se han inventado valoraciones de Amazon (nº de reseñas/estrellas). La
> estrella que se muestra es NUESTRA nota editorial (`EditorialScores.js`),
> independiente de Amazon. Ajústala tras probar cada producto.

## 9. Pendiente antes de publicar
- [ ] Poner tu `AMAZON.tag` real en `src/config/site.js`.
- [ ] Rellenar `amazonUrl` (ASIN o `amzn.to/...`) e `image` de cada producto en `products/agua.js`.
- [ ] Reemplazar los placeholders de `public/images/fuentes/*.jpg` por fotos reales.
- [ ] Convertir `public/og-default.svg` en un JPG 1200×630 (`og-default.jpg`).
- [ ] Completar los datos del titular en las páginas legales (LSSI-CE).
- [ ] (Opcional) `ANALYTICS.gaId` para activar GA tras consentimiento.
