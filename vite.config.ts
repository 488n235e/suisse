import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'suisse',
      fileName: format => `index.${format}.js`,
    },
  },
  plugins: [dts({ insertTypesEntry: false })],
});
