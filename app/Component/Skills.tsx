import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaGithub, FaDocker, FaCube } from "react-icons/fa"
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiKubernetes,
  SiCplusplus,
  SiSupabase,
  SiWechat,
  SiReact,
  SiRemix,
  SiGo,
} from "react-icons/si"

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "SQL", icon: FaDatabase, color: "text-red-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-700" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-800" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
  { name: "WeWeb", icon: SiWechat, color: "text-purple-500" },
  { name: "React Native", icon: SiReact, color: "text-blue-400" },
  { name: "Xano", icon: FaCube, color: "text-indigo-500" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
  { name: "Remix", icon: SiRemix, color: "text-pink-600" },
  { name: "Golang", icon: SiGo, color: "text-cyan-500" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <skill.icon className={`text-4xl mb-2 ${skill.color}`} />
              <h3 className="text-sm font-semibold text-center text-gray-800 dark:text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills



