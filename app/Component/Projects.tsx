import { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/path-to-project1-image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project1",
    liveLink: "https://project1-demo.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/path-to-project2-image.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://project2-demo.com",
  },
  // Add more projects as needed
]

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-64 object-cover" />
              <div
                className={`absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white text-center mb-4">{project.description}</p>
                <div className="flex space-x-4 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

