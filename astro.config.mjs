import vercel from "@astrojs/vercel"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://doruk.gezici.me",
  output: "static",
  // Keep HTML-aware whitespace handling (v7 default 'jsx' strips spaces
  // between inline elements, which breaks terminal output and prose links)
  compressHTML: true,
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
