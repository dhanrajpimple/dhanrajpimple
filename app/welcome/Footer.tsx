"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Rocket } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold bg-gradient-to-r from-[#00ff88] to-[#00aaff] bg-clip-text text-transparent"
          >
           Dhanraj Pimple
          </motion.h3>

          <p className="text-white/60">Crafting Digital Experiences That Matter</p>

          <div className="flex justify-center space-x-8 text-white/60">
            <a href="#about" className="hover:text-[#00ff88] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[#00aaff] transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#aa00ff] transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#00ff88] transition-colors">
              Contact
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            {[{icons:Github, link:"https://github.com/dhanrajpimple"}, {icons:Linkedin, link:"https://www.linkedin.com/in/dhanraj-pimple-1b802a274"}, {icons:Mail, link: "mailto:dhanraj.webdev@gmail.com"}].map((Icon, index) => (
              <motion.a
                key={index}
                href={Icon.link}
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/60 hover:text-[#00ff88] transition-colors"
              >
                <Icon.icons className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <div className="text-sm text-white/40 space-y-2">
            <p>© 2025 Dhanraj Pimple</p>
         
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#00ff88] to-[#00aaff] rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Rocket className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
