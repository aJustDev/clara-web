import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Deploy en GitHub Pages (project site): https://ajustdev.github.io/clara-web
// TODO: al migrar a dominio propio, poner site al dominio y base a "/".
const SITE = "https://ajustdev.github.io";
const BASE = "/clara-web";

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [sitemap()],
});
