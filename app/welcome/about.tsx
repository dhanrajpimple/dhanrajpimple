"use client"
import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Brain, Star } from "lucide-react"
import image from '../assests/dp.png'
const AboutSection = () => {
  const achievements = [
    { icon: GraduationCap, title: "MCA Graduate", subtitle: "Computer Applications" },
    { icon: Briefcase, title: "1.5 Years", subtitle: "Experience" },
    { icon: Brain, title: "AI Solutions", subtitle: "Specialist" },
    { icon: Star, title: "4 Projects", subtitle: "Delivered" },
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
            About Me
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-[#00ff88] to-[#00aaff] mx-auto mt-4"
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          {/* Professional Photo */}
         
          {/* Bio and Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              MCA graduate with 1.5 years of intensive software development experience. I specialize in crafting
              AI-powered solutions, intelligent chatbots, and full-stack applications that drive real business results.
            </p>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateY: 180 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <achievement.icon className="w-8 h-8 text-[#00ff88] mx-auto mb-2" />
                  <h4 className="font-bold text-white">{achievement.title}</h4>
                  <p className="text-sm text-white/60">{achievement.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl italic text-[#00aaff] border-l-4 border-[#00aaff] pl-6"
            >
              "Code is poetry, AI is magic, and great UX is art"
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
