const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  base: '/Interactive-Product-Page/',
  root: './src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
      },
    },
    outDir: resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: [
      {
        find: '@root',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
});
