# Micifú — Sistema de diseño v2

**Concepto:** "El laboratorio felino independiente". Un producto digital de
confianza (banco de pruebas), no una web "cute" de gatos. Personalidad felina
con restricción: tipografía técnica, sistema de puntuación y un único felino
gráfico. Sin texturas ni adornos decorativos.

## Tokens (`src/styles/global.css`)
- **Tipografía:** Space Grotesk (display, técnica) · Inter (texto) · JetBrains
  Mono (datos: notas, precios, specs).
- **Color:** ink cálido `#161514` + lienzo hueso `#f7f5f1` + verde felino profundo
  (`brand-600 #166f5a` primario, `brand-400 #2fa587` acento) + ámbar solo en
  estrellas. Hairline cálida `--line #e3ded4`. Alto contraste, look editorial.
- **Botones:** `.btn` + `.btn-primary` (ink), `.btn-accent` (verde),
  `.btn-ghost`, `.btn-onink`. Estados hover/active/focus-visible consistentes.
- **Tarjetas:** `.card` + `.card-hover` (borde, radio 12px, sombra sutil, lift).
- **Kicker:** etiqueta mono en versalitas para secciones.

## Home (estructura pensada para conversión)
Hero con propuesta de valor clara + **tarjeta de puntuación** (storytelling:
"puntuamos productos") → barra de confianza (método/sin patrocinios) →
**"Cómo puntuamos"** (4 criterios, autoridad) → elección destacada → categorías →
ranking sobre ink → guías → CTA final. Jerarquía y CTAs en cada bloque.

## Componentes clave
Header sticky con mega-menú accesible y CTA; `ProductCard` (medalla, sellos,
estrellas, precio); `BestPick` (tarjeta oscura premium con nota /5 y pros);
`ReviewCard` (ficha de comparativa unificada); `FaqList` (acordeón); `PageHeader`;
`FooterApp` (4 columnas, disclosure). Todo responsive (móvil/tablet/escritorio).

## Rendimiento y accesibilidad
Animaciones solo CSS (respetan `prefers-reduced-motion`); foco visible; sin JS
extra por el diseño; contraste alto AA en texto principal.
