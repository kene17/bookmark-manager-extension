import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background.ts'),
        popup: resolve(__dirname, 'src/popup.tsx'),
        options: resolve(__dirname, 'src/options.tsx'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
