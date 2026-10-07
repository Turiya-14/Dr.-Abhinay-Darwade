import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Builds the single-file local version (homepage + Privacy Policy in one HTML file).
// scripts/inline-standalone.mjs then embeds the JS, CSS, fonts and photos into it.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '.standalone',
    emptyOutDir: true,
    copyPublicDir: false,
    modulePreload: { polyfill: false },
    rolldownOptions: {
      input: fileURLToPath(new URL('./standalone.html', import.meta.url)),
    },
  },
});
