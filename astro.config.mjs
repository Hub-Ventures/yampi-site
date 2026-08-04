// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio estático por defecto. Para SSR/edge agrega un adapter (p. ej. @astrojs/cloudflare).
export default defineConfig({
  // Sin `www`: lo publicado es yampi.ai (ADR-001 §0.2 bug 3). De aquí salen el
  // canonical, las URLs absolutas de Open Graph y el sitemap.
  site: 'https://yampi.ai',
  // El sitio en vivo solo declara la home en su sitemap y deja 16 fichas fuera
  // (ADR-001 §0.2 bug 1). Esta integración las incluye todas.
  integrations: [sitemap()],
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
