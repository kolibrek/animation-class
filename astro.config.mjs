// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro'
import { presetWind3 } from 'unocss';

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
      presets: [presetWind3()],
    }),
  ],
});
