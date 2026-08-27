# Yampi — Sitio Comercial (Astro 6)

Sitio comercial de **Yampi**, la plataforma todo-en-uno para operar inmobiliarias en Latinoamérica. Seis páginas estáticas que siguen la arquitectura real del producto: un **sistema base** transversal, **tres suites** por rol y **Livia**, la IA que las atraviesa.

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
├── lib/
│   ├── platform.js           ← ÚNICA fuente de la arquitectura: sistema base, 3 suites, Livia
│   ├── logos.js              ← Logos de terceros de las filas "Reemplaza"
│   └── site-copy.js          ← Copys del hero, URLs de app, calendario y WhatsApp
├── styles/
│   ├── tokens.css            ← Tokens del Yampi Design System (colores, tipografía, espaciado)
│   └── site.css              ← Capa de marketing (nav, heros, secciones, footer)
├── layouts/
│   └── BaseLayout.astro      ← head + Nav + Footer + animación reveal
├── components/
│   ├── Nav.astro             ← Nav píldora con mega-menú generado desde platform.js
│   ├── Footer.astro          ← Footer con las mismas columnas del mega-menú
│   ├── PageHero.astro        ← Hero de página interna, con acento por suite
│   ├── FlowRow.astro         ← Momento numerado: copia + captura + fila "Reemplaza"
│   ├── Swap.astro            ← Comparativa "Hoy" / "Con Yampi"
│   ├── NextCards.astro       ← Bloque "Qué sigue" al cierre de cada página
│   ├── Replaces.astro        ← Fila de logos de herramientas reemplazadas
│   ├── Shot.astro            ← Marco de captura (imagen real o placeholder etiquetado)
│   ├── CtaFinal.astro        ← Sección CTA oscura reutilizable
│   ├── Button.astro          ← Botón/enlace con las variantes del sistema
│   ├── Icon.astro            ← Iconos de línea (estilo Lucide)
│   └── Logo.astro            ← Logotipo oficial
└── pages/
    ├── index.astro           ← Home
    ├── livia.astro           ← /livia/
    ├── sistema-base.astro    ← /sistema-base/
    └── suites/
        ├── comercial.astro       ← /suites/comercial/
        ├── servicio.astro        ← /suites/servicio/
        └── administrativa.astro  ← /suites/administrativa/
```

## Tareas frecuentes

### Agregar o mover un módulo

Edita `src/lib/platform.js`. El mega-menú, el panel móvil, el footer y el bloque de arquitectura del home se generan desde ahí: no hay que tocar ninguna plantilla.

### Poner una captura real

1. Guarda el PNG en `public/screenshots/` (las del handoff son 919×511 y se sirven a ~1104 px de ancho).
2. Pásalo como `src` al componente `Shot`:

```astro
<Shot src="/screenshots/mi-pantalla.png" alt="Descripción de lo que se ve" />
```

Sin `src`, `Shot` deja un marco etiquetado del mismo tamaño (`label="..."`), así que el layout no cambia cuando entre la definitiva.

**Marcos pendientes de captura real:**

| Página | Marco |
| --- | --- |
| `/sistema-base/` | hero (inventario de propiedades) y "Los documentos son de todos" |
| `/suites/servicio/` | hero (bandeja de requerimientos), "Clasificar decide todo lo demás" y "La autorización queda registrada" |
| `/suites/administrativa/` | "Se firma por WhatsApp" y "Quién pagó y quién no" |

### Herramientas de la fila "Reemplaza"

Los logotipos viven en `public/logos/` y se mapean en `src/lib/logos.js`. Un nombre sin entrada en ese mapa se muestra solo como texto.

### Logos de clientes

La franja está apagada hasta tener logos reales: cambia `MOSTRAR_LOGOS` en `src/pages/index.astro` y reemplaza los `<div class="logo-ph">` por `<img>` (sugerido: SVG monocromos de ~48 px de alto).

## Datos de contacto y demo

El botón "Agenda una demo" abre el popup del calendario de la app (`YampiCalendar`). El slug y la URL base están en `src/lib/site-copy.js` (`YAMPI_CALENDAR`).

## Deploy (Docker)

Sitio estático: `astro build` → `dist/` servido por nginx.

```bash
cp .env.example .env   # HOST_PORT=4321
docker compose up -d --build
# → http://localhost:4321
```

| Comando | Qué hace |
|---|---|
| `npm run deploy` | `docker compose up -d --build` |
| `npm run deploy:docker` | Solo `docker compose build` |
| `HOST_PORT=4321 docker compose up -d --build` | Override de puerto |

**Dokploy:** Compose Path `./docker-compose.yml`. En **Domains** → Service `landing`, Port `4321`.

Archivos: `Dockerfile`, `docker-compose.yml`, `nginx.conf` (incluye 301 reales de `/modulos/*`).

## Notas Astro 6

- El sitio es 100% estático (`astro build` → `dist/`).
- Cuando se agreguen formularios/analytics, conviene activar el CSP nativo en `astro.config.mjs`: `security: { csp: true }`.
- La tipografía Inter carga vía Google Fonts (`@import` en `tokens.css`); como mejora se puede migrar a la **Fonts API** de Astro 6 para self-hosting y preload automático.
- El único JS de cliente es el `IntersectionObserver` de la animación de entrada (en `BaseLayout.astro`) y el toggle del nav.
