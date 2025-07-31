"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Button from "./ui/Button"
import useTypewriter from "../hooks/useTypewrite"
import useCounter from "../hooks/useConter"
import image from "../assests/dp.png"
const HeroSection = () => {
  const typewriterText = useTypewriter("AI ARCHITECT • FULL-STACK VISIONARY • CHATBOT SPECIALIST", 100)
  const experienceCount = useCounter(1.5, 2000)
  const clientCount = useCounter(3, 2500)

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          {/* Profile Photo with Rotating Ring */}
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-[#00ff88] via-[#00aaff] to-[#aa00ff] p-1"
              >
                <div className="w-full h-full rounded-full bg-[#0a0a0a]"></div>
              </motion.div>
              <motion.img
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                src={image}
                alt="Dhanraj Pimple"
                className="absolute inset-2 w-44 h-44 rounded-full object-cover border-2 border-white/20"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-[#00ff88] rounded-full shadow-lg shadow-[#00ff88]/50"
              />
            </div>
          </div>

          {/* Name Display */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-[#00ff88] via-[#00aaff] to-[#aa00ff] bg-clip-text text-transparent"
            style={{
              textShadow: "0 0 30px rgba(0, 255, 136, 0.3)",
            }}
          >
            Dhanraj Pimple
          </motion.h1>

          {/* Typewriter Title */}
          <div className="h-16 mb-6">
            <p className="text-xl md:text-2xl text-white/90 font-mono">
              {typewriterText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-[#00ff88]"
              >
                |
              </motion.span>
            </p>
          </div>

          {/* Tagline with Particles */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-2xl md:text-3xl text-white/80 mb-8 relative"
          >
            Transforming Ideas Into Digital Reality
            <motion.span
              animate={{
                x: [0, 10, -10, 0],
                y: [0, -5, 5, 0],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-2 -right-8 text-[#00aaff]"
            >
              ✨
            </motion.span>
          </motion.p>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-3 h-3 bg-[#00ff88] rounded-full shadow-lg shadow-[#00ff88]/50"
            />
            <span className="text-white/90">Available for Projects</span>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="flex flex-wrap justify-center gap-8 mb-12 text-white/80"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[#00ff88]">{experienceCount}+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#00aaff]">MCA</div>
              <div className="text-sm">Graduate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#aa00ff]">{clientCount}</div>
              <div className="text-sm">Happy Clients</div>
            </div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }}>
            <Button
              size="lg"
              variant="primary"
              className="px-8 py-4 rounded-full text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00ff88]/25"
            >
              Let's Build Something Amazing
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div> */}
      </div>
    </section>
  )
}

export default HeroSection
