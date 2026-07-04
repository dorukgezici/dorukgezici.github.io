export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  gitUrl: string | null
  liveUrl: string | null
}

export const projects: Project[] = [
  {
    title: "POPJAM",
    description: "AI ad maker that tests creatives on synthetic personas before you spend",
    image: "/img/projects/popjam-landing.jpeg",
    tags: ["startup", "ai"],
    gitUrl: null,
    liveUrl: "https://popjam.io",
  },
  {
    title: "Gamer Arena",
    description: "Competitive esports platform",
    image: "/img/projects/gamerarena.webp",
    tags: ["startup"],
    gitUrl: null,
    liveUrl: "https://gamerarena.com",
  },
  {
    title: "Astro DecapCMS OAuth",
    description: "Astro integration for Decap CMS with a custom OAuth backend",
    image: "/img/projects/astro-decapcms-oauth.webp",
    tags: ["library", "oss"],
    gitUrl: "https://github.com/dorukgezici/astro-decap-cms-oauth",
    liveUrl: "https://astro-decap-cms-oauth.vercel.app",
  },
  {
    title: "ITUscheduler",
    description: "Istanbul Technical University course crawler and scheduler",
    image: "/img/projects/ituscheduler.webp",
    tags: ["web", "oss"],
    gitUrl: "https://github.com/dorukgezici/ituscheduler",
    liveUrl: "https://ituscheduler.com",
  },
  {
    title: "Subabot",
    description: "AI-powered Slack bot that tracks keywords on RSS feeds",
    image: "/img/projects/subabot.webp",
    tags: ["bot", "oss"],
    gitUrl: "https://github.com/dorukgezici/subabot",
    liveUrl: "https://subabot.gezici.me",
  },
  {
    title: "CryptoPatro",
    description: "Cryptoasset portfolio tracker and trading assistant bot",
    image: "/img/projects/cryptopatro.webp",
    tags: ["bot", "oss"],
    gitUrl: "https://github.com/dorukgezici/CryptoPatro",
    liveUrl: null,
  },
  {
    title: "SDG - Personal Site",
    description: "Pixel-art personal website with an interactive touch",
    image: "/img/projects/sdg.jpeg",
    tags: ["web", "oss"],
    gitUrl: "https://github.com/dorukgezici/sinem.gezici.me",
    liveUrl: "https://sinem.gezici.me",
  },
  {
    title: "Yeşil Mavi Hayat",
    description: "Book promotion website",
    image: "/img/projects/yesilmavihayat.webp",
    tags: ["web", "oss"],
    gitUrl: "https://github.com/dorukgezici/yesilmavihayat",
    liveUrl: "https://yesilmavihayat.com",
  },
]
