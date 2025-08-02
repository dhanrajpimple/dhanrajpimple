import { motion } from "framer-motion"
import { Code, Zap, Brain, Database } from "lucide-react"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Mastery",
      icon: Code,
      skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Remix.js"],
      color: "#00ff88",
    },
    {
      title: "Backend Power",
      icon: Zap,
      skills: ["Python", "FastAPI", "Node.js", "Go", "C++"],
      color: "#00aaff",
    },
    {
      title: "AI & Automation",
      icon: Brain,
      skills: ["Generative AI", "AI Chatbots", "Machine Learning"],
      color: "#aa00ff",
    },
    {
      title: "Database Arsenal",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
      color: "#00ff88",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Skills & Expertise
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-[#00ff88] to-[#aa00ff] mx-auto mt-4"
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300"
                style={{
                  boxShadow: `0 0 30px ${category.color}20`,
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon className="w-8 h-8" style={{ color: category.color }} />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 text-center">{category.title}</h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-white/80 text-sm">{skill}</span>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1 }}
                        className="h-1 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
