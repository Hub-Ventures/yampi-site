// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático por defecto. Para SSR/edge agrega un adapter (p. ej. @astrojs/cloudflare).
export default defineConfig({
  site: 'https://www.yampi.ai',
  // Astro 6: CSP nativo — actívalo cuando definas analytics/terceros.
  // security: { csp: true },
});
