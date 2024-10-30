import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['@siteData', 'vitepress', 'vue'],
      output: {
        entryFileNames: 'index.js',
      },
    },
    target: 'esnext',
  },
  plugins: [vue(), dts()],
});
