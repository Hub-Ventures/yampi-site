# Yampi — Sitio Comercial (Astro 6)

Sitio comercial de **Yampi**, la plataforma todo-en-uno para operar inmobiliarias en Latinoamérica (comunicaciones, propiedades, contratos, cobros e IA). Home + 16 páginas de módulo generadas estáticamente desde un solo archivo de datos, con la identidad del Yampi Design System.

## Requisitos

- **Node 22+** (requisito de Astro 6)
- npm (o pnpm/yarn)

## Empezar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist (estático)
npm run preview  # sirve el build localmente
```

## Estructura

```
src/
├── data/
│   └── modules.json          ← ÚNICA fuente de contenido: 16 módulos + 4 categorías
├── styles/
│   ├── tokens.css            ← Tokens del Yampi Design System (colores, tipografía, espaciado)
│   └── site.css              ← Capa de marketing (nav, heros, secciones, footer)
├── lib/
│   └── categories.js         ← Orden y colores de las categorías Atiende/Vende/Cobra/Automatiza
├── layouts/
│   └── BaseLayout.astro      ← head + Nav + Footer + animación reveal
├── components/
│   ├── Nav.astro             ← Nav píldora con mega-menú generado desde modules.json
│   ├── Footer.astro          ← Footer con columnas por categoría
│   ├── Icon.astro            ← Iconos de línea (estilo Lucide)
│   ├── ShotPlaceholder.astro ← Marco de screenshot (placeholder o imagen real)
│   ├── CtaFinal.astro        ← Sección CTA oscura reutilizable
│   └── heroes/               ← Las 3 variantes de hero (Claro / Oscuro / Split)
└── pages/
    ├── index.astro           ← Home
    └── modulos/[slug].astro  ← 16 páginas generadas con getStaticPaths
```

## Tareas frecuentes

### Cambiar la variante de hero
En `src/pages/index.astro`:

```js
const HERO_VARIANT = 'claro'; // 'claro' | 'oscuro' | 'split'
```

### Poner screenshots reales
1. Guarda las imágenes en `public/screenshots/` (p. ej. `public/screenshots/tesoreria.png`).
2. Para una página de módulo, agrega el campo `shot` en `src/data/modules.json`:

```json
{ "slug": "tesoreria", "shot": "/screenshots/tesoreria.png", ... }
```

3. Para el hero del home, pasa `src` al componente en `index.astro`:

```astro
<HeroClaro src="/screenshots/dashboard.png" />
```

Los placeholders de capacidades del home aceptan lo mismo: `<ShotPlaceholder src="..." />`.

### Logos de clientes
Reemplaza los `<div class="logo-ph">` de `index.astro` por `<img>` con los logos reales (sugerido: SVG monocromos de ~48 px de alto).

### Editar copys de un módulo
Todo vive en `src/data/modules.json`: `h1` (titular imperativo), `sub`, `features` (hoja de funcionalidades), `benefits`, `versus` (por qué Yampi) y `cta`. No hay que tocar ninguna plantilla.

### Agregar un módulo nuevo
Agrega una entrada a `modules.json` con `slug`, `cat` (atiende/vende/cobra/automatiza), `icon` (ver `Icon.astro`) y los copys. La página, el mega-menú, el footer y las tarjetas del home se generan solos.

## Datos de contacto

Buscar y reemplazar en `src/components/CtaFinal.astro`:
- `ventas@yampi.ai` → email real de ventas
- `wa.me/573112345678` → WhatsApp real de ventas

## Notas Astro 6

- El sitio es 100% estático (`astro build` → `dist/`); se despliega en cualquier hosting estático (Cloudflare Pages, Netlify, Vercel).
- Cuando se agreguen formularios/analytics, conviene activar el CSP nativo en `astro.config.mjs`: `security: { csp: true }`.
- La tipografía Inter carga vía Google Fonts (`@import` en `tokens.css`); como mejora se puede migrar a la **Fonts API** de Astro 6 para self-hosting y preload automático.
- El único JS de cliente es el `IntersectionObserver` de la animación de entrada (en `BaseLayout.astro`).
