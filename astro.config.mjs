import vercel from "@astrojs/vercel"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://doruk.gezici.me",
  output: "server",
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
