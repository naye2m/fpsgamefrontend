import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    sorcemap:true,
    // minify:'terser',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        settings: resolve(__dirname, 'setting.html'),  // If you have multiple HTML files
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    },
    outDir: 'docs',
  },
  publicDir: 'public', // Specify the public directory where static assets are located
});