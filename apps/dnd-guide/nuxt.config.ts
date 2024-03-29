import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';
import { join } from 'node:path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: '../../',
  srcDir: 'src',
  buildDir: '../../dist/apps/dnd-guide/.nuxt',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: './tsconfig.app.json',
    },
  },
  imports: {
    autoImport: false,
  },

  postcss: {
    plugins: {
      tailwindcss: {
        config: join(__dirname, 'tailwind.config.js'),
      },
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/styles.scss'],

  vite: {
    plugins: [nxViteTsPaths()],
  },
  nitro: {
    output: {
      dir: '../../dist/apps/dnd-guide/.output',
    },
  },
});
