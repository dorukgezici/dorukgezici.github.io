import ProjectCard from "@/components/ProjectCard"
import ProjectTag from "@/components/ProjectTag"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const projectsData = [
  {
    id: 1,
    title: "Subabot",
    description: "Slack bot to track keywords on RSS feeds",
    image: "/img/projects/subabot.webp",
    tag: ["All", "Bot", "Web"],
    gitUrl: "https://github.com/dorukgezici/subabot",
    previewUrl: "https://subabot.gezici.me",
  },
  {
    id: 2,
    title: "CryptoPatro",
    description: "Personal cryptoasset portfolio tracker and trading assistant bot",
    image: "/img/projects/cryptopatro.webp",
    tag: ["All", "Bot", "Web"],
    gitUrl: "https://github.com/dorukgezici/CryptoPatro",
    previewUrl: "#projects",
  },
  {
    id: 3,
    title: "Yeşil Mavi Hayat",
    description: "A book promotion website",
    image: "/img/projects/yesilmavihayat.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dorukgezici/yesilmavihayat",
    previewUrl: "https://yesilmavihayat.com",
  },
  {
    id: 4,
    title: "ITUscheduler",
    description: "Istanbul Technical University course crawler & scheduler",
    image: "/img/projects/ituscheduler.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dorukgezici/ituscheduler",
    previewUrl: "https://ituscheduler.com",
  },
  {
    id: 5,
    title: "Gamer Arena",
    description: "Competitive Esports Platform",
    image: "/img/projects/gamerarena.webp",
    tag: ["All", "Startup"],
    gitUrl: "#projects",
    previewUrl: "https://gamerarena.com",
  },
  {
    id: 6,
    title: "Astro DecapCMS OAuth Integration",
    description: "Astro integration for the Decap CMS with custom OAuth backend",
    image: "/img/projects/astro-decapcms-oauth.webp",
    tag: ["All", "Library"],
    gitUrl: "https://github.com/dorukgezici/astro-decap-cms-oauth",
    previewUrl: "https://astro-decap-cms-oauth.vercel.app",
  },
]

export default function ProjectsSection() {
  const [tag, setTag] = useState<string>("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag: string) => setTag(newTag)
  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag))

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects" className="flex flex-col justify-center items-center gap-8">
      <h2 className="text-center text-6xl font-bold text-white mt-4 mb-8">Projects</h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Bot" isSelected={tag === "Bot"} />
        <ProjectTag onClick={handleTagChange} name="Startup" isSelected={tag === "Startup"} />
        <ProjectTag onClick={handleTagChange} name="Library" isSelected={tag === "Library"} />
      </div>
      <ul ref={ref} className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
