import pluginVue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import pluginDts from 'vite-plugin-dts';
import { dependencies, peerDependencies } from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@siteData',
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies),
      ],
      output: {
        entryFileNames: 'index.js',
      },
    },
    target: 'esnext',
  },
  plugins: [
    pluginVue(),
    pluginDts(),
  ],
});
