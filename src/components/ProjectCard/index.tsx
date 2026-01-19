import { faCode, faEye } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
  imgUrl: string
  title: string
  description: string
  gitUrl: string | null
  previewUrl: string
}

export default function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }: Props) {
  return (
    <div
      className="w-full aspect-video rounded-xl relative group overflow-hidden"
      style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

      {/* GitHub badge for OSS projects */}
      {gitUrl && (
        <a
          href={gitUrl}
          target="_blank"
          className="absolute top-3 right-3 z-20 h-8 w-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5 text-gray-900" />
        </a>
      )}

      {/* Hover overlay with links */}
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black/0 hidden group-hover:flex group-hover:bg-black/50 transition-all duration-500 z-10">
        {gitUrl && (
          <a
            href={gitUrl}
            target={gitUrl.startsWith("#") ? "_self" : "_blank"}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FontAwesomeIcon
              icon={faCode}
              className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
            />
          </a>
        )}
        <a
          href={previewUrl}
          target={previewUrl.startsWith("#") ? "_self" : "_blank"}
          className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <FontAwesomeIcon
            icon={faEye}
            className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
          />
        </a>
      </div>

      {/* Text content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-white p-4 z-5">
        <h5 className="text-xl font-semibold mb-1">{title}</h5>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
    </div>
  )
}
