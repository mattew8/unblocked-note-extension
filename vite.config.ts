import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/main.tsx'),
        'content-script': resolve(__dirname, 'src/content-script/main.tsx'),
        'side-panel': resolve(__dirname, 'src/side-panel/main.tsx'),
      },
      output: {
        entryFileNames: '[name].js',
        dir: 'dist',
      },
    },
  },
});
