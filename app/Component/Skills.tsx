import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaGithub, FaDocker, FaCube } from "react-icons/fa";
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
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "SQL", icon: FaDatabase, color: "text-red-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-300" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-400" },
  { name: "WeWeb", icon: SiWechat, color: "text-purple-400" },
  { name: "React Native", icon: SiReact, color: "text-blue-300" },
  { name: "Xano", icon: FaCube, color: "text-indigo-400" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
  { name: "Remix", icon: SiRemix, color: "text-pink-500" },
  { name: "Golang", icon: SiGo, color: "text-cyan-400" },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: { scale: 1.1, y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-yellow-300"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover="hover"
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl border border-gray-700"
              aria-label={`${name} skill`}
            >
              <Icon className={`text-5xl mb-4 ${color}`} aria-hidden="true" />
              <h3 className="text-sm font-semibold text-center text-gray-200">{name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;