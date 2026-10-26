import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    // One value for the prerendered HTML and the client, so they always match.
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
});
