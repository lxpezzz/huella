// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://petx.es',
  base: '/demos/huella/',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,

  },
  build: {
    format: 'directory',
  },

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
});
