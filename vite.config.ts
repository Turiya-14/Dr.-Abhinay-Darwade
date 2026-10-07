import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const page = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// Two real HTML entries: the homepage and a static /privacy-policy/ page,
// so the policy URL opens directly without any server rewrite rules.
export default defineConfig({
  appType: 'mpa',
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        main: page('./index.html'),
        privacy: page('./privacy-policy/index.html'),
      },
    },
  },
});
