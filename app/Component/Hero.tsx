import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import dp from "../assests/dp.png";
import resume from "../assests/resume.pdf";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] bg-gray-900 text-white py-10 mt-16 overflow-hidden ">
      {/* Lamp Effect Components */}
     {/* Lamp Effect Components */}
<div className="absolute top-0 isolate z-0 flex w-screen items-start justify-center">
  {/* Main glow - increased size and blur */}
  <div className="absolute inset-auto z-0 h-48 w-[50rem] -translate-y-[25%] rounded-full bg-yellow-300/50 opacity-90 blur-[100px]" />

  {/* Lamp animation - wider spread */}
  <motion.div
    initial={{ width: "12rem" }}
    viewport={{ once: true }}
    transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
    whileInView={{ width: "24rem" }}
    className="absolute top-0 z-0 h-48 -translate-y-[15%] rounded-full bg-yellow-300/50 blur-[80px]"
  />

  {/* Top line - extended width */}
  <motion.div
    initial={{ width: "20rem" }}
    viewport={{ once: true }}
    transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
    whileInView={{ width: "50rem" }}
    className="absolute inset-auto z-0 h-0.5 -translate-y-[5%] bg-yellow-300/50"
  />

  {/* Gradient cones - larger and more transparent */}
  <motion.div
    initial={{ opacity: 0.5, width: "20rem" }}
    whileInView={{ opacity: 0.8, width: "40rem" }}
    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
    className="absolute inset-auto right-1/2 h-64 w-[40rem] bg-gradient-conic from-yellow-300/40 via-transparent to-transparent"
  />
  <motion.div
    initial={{ opacity: 0.5, width: "20rem" }}
    whileInView={{ opacity: 0.8, width: "40rem" }}
    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
    className="absolute inset-auto left-1/2 h-64 w-[40rem] bg-gradient-conic from-transparent via-transparent to-yellow-300/40"
  />
</div>

      {/* Content */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        {/* Hero Image */}
        <div className="mb-8 md:mb-12">
          <img
            src={dp}
            alt="Dhanraj Pimple"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-yellow-300 shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Hero Text */}
        <div className="text-center">
          
       
  <h1 className="text-3xl md:text-5xl font-bold mb-4">Hi, I'm</h1>
  <div className="h-16 md:h-24 flex items-center justify-center">
    <h1 className="text-3xl md:text-5xl font-bold text-yellow-300 typing-deleting-animation">
      Dhanraj Pimple
    </h1>
  </div>

          <p className="text-lg md:text-xl mb-8 opacity-90">
            Full-Stack Developer | AI/ML Enthusiast | Problem Solver
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-md"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resume}
              download
              className="bg-gray-800 text-yellow-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md border border-yellow-300/30"
            >
              Download CV
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/dhanrajpimple"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/dhanraj-pimple-1b802a274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;