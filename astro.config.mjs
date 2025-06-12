import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Hier sagen wir Astro, dass es Tailwind benutzen soll
  integrations: [tailwind()]
});