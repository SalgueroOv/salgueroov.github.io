// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio final (aún no comprado a fecha 2026-07-25); se usa igualmente
  // para generar URLs absolutas/canónicas correctas en el build.
  site: 'https://alejandrosalguero.es',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});