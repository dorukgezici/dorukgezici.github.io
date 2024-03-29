import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://doruk.gezici.me",
  integrations: [tailwind(), react(), sitemap()],
  output: "server",
  adapter: vercel({ functionPerRoute: false }),
});
