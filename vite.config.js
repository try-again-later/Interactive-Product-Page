import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  base: '/Interactive-Product-Page/',
  root: './src',
  publicDir: '../public',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
      },
    },
    outDir: resolve(__dirname, 'dist'),
  },
});
