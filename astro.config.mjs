// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio estático por defecto. Para SSR/edge agrega un adapter (p. ej. @astrojs/cloudflare).
export default defineConfig({
  // Sin `www`: lo publicado es yampi.ai (ADR-001 §0.2 bug 3). De aquí salen el
  // canonical, las URLs absolutas de Open Graph y el sitemap.
  site: 'https://yampi.ai',
  integrations: [sitemap()],
  // Las 16 fichas de /modulos/ se retiraron al pasar el sitio a la arquitectura
  // real del producto (sistema base + 3 suites + Livia). Estas URLs ya estaban
  // publicadas, así que en vez de devolver 404 mandan a la página que hoy cubre
  // ese contenido. En build estático Astro las emite como páginas con
  // meta-refresh y canonical; si el hosting permite 301 de verdad (_redirects en
  // Cloudflare/Netlify), conviene duplicarlas ahí.
  redirects: {
    '/modulos/comunicaciones': '/sistema-base/',
    '/modulos/propiedades': '/sistema-base/',
    '/modulos/calendario': '/sistema-base/',
    '/modulos/reportes': '/sistema-base/',
    '/modulos/contactos': '/suites/comercial/',
    '/modulos/oportunidades': '/suites/comercial/',
    '/modulos/campanas': '/suites/comercial/',
    '/modulos/perfil-publico': '/suites/comercial/',
    '/modulos/centro-ayuda': '/suites/servicio/',
    '/modulos/sla': '/suites/servicio/',
    '/modulos/contratos': '/suites/administrativa/',
    '/modulos/tesoreria': '/suites/administrativa/',
    '/modulos/livia': '/livia/',
    // Sin página propia hoy: el home cubre automatizaciones, configuración y búsqueda.
    '/modulos/automatizaciones': '/',
    '/modulos/configuracion': '/',
    '/modulos/busqueda': '/',

    // La landing anterior servía los legales bajo locale (/es/, /en/). El sitio
    // nuevo es de un solo idioma y los publica sin prefijo, que además es la
    // ruta que enlaza el signup de app.yampi.ai.
    '/es/terms': '/terms/',
    '/en/terms': '/terms/',
    '/es/privacy': '/privacy/',
    '/en/privacy': '/privacy/',
    '/terminos': '/terms/',
    '/privacidad': '/privacy/',
  },
  // Astro 6: CSP nativo — actívalo cuando definas analytics/terceros.
  // security: { csp: true },
  vite: {
    // `yampi/` es un monorepo Rails anidado (~4.6GB). Si Vite lo observa, `astro dev` cuelga.
    server: {
      watch: {
        ignored: ['**/yampi/**'],
      },
    },
  },
});
