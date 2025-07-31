"use client"
import { motion } from "framer-motion"
import { ExternalLink, Rocket } from "lucide-react"
import { Card, CardContent } from "./ui/Card"
import Badge from "./ui/Badge"
import Button from "./ui/Button"
import image1 from "../assests/shettry.png"
import flixix from "../assests/flixix.png"
const ProjectsSection = () => {
  const projects = [
    {
      title: "FlixixStudio.in",
      description: "Modern entertainment platform with seamless UX and advanced streaming capabilities",
      image: flixix,
      tech: ["Remix", "Node.js", "MongoDB", "Supabase", "Tailwind CSS","SEO", "Cloudinary"],
      impact: "User engagement increased by 200%",
      link: "#",
    },
    {
      title: "ShettyEducators.in",
      description: "Comprehensive educational platform connecting students with quality learning resources",
      image: image1,
      tech: ["Remix.js","Tailwind CSS","SEO",],
      impact: "Student enrollment up 250%",
      link: "#",
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
            Featured Projects
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-[#00aaff] to-[#aa00ff] mx-auto mt-4"
            />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group perspective-1000"
            >
              <Card className="overflow-hidden hover:bg-white/10 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image }
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <CardContent>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-[#00aaff] font-semibold mb-4">{project.impact}</p>

                  <Button variant="primary" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 max-w-md mx-auto">
            <CardContent className="p-0">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-16 h-16 bg-gradient-to-r from-[#00ff88] to-[#00aaff] rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Rocket className="w-8 h-8 text-black" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">More Projects Coming Soon</h3>
              <p className="text-white/60">Amazing projects in development...</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
