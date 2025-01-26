import { FaGithub, FaLinkedin } from "react-icons/fa";
import dp from "../assests/dp.png";
import resume from "../assests/resume.pdf";

const Hero = () => {
  return (
    <section className="dark:bg-gray-800 bg-gray-200 dark:text-white text-black py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Hero Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
              Hi, I'm <span className="dark:text-yellow-300 text-yellow-600">Dhanraj Pimple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 animate-fade-in-up animation-delay-200">
              Full-Stack Developer | AI/ML Enthusiast | Problem Solver
            </p>
            <div className="flex space-x-4 animate-fade-in-up animation-delay-400">
              <a
                href="#contact"
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
                aria-label="Contact Dhanraj Pimple"
              >
                Contact Me
              </a>
              <a
                href={resume}
                download
                className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition duration-300"
                aria-label="Download Dhanraj Pimple's CV"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={dp}
              alt="Dhanraj Pimple"
              className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg animate-fade-in-up animation-delay-600"
              loading="lazy"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-6 animate-fade-in-up animation-delay-800">
          <a
            href="https://github.com/dhanrajpimple"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Dhanraj Pimple's GitHub profile"
            className="dark:text-white text-gray-600 dark:hover:text-yellow-300 hover:text-red-700 transition duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhanraj-pimple-1b802a274/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Dhanraj Pimple's LinkedIn profile"
            className="dark:text-white text-gray-600 dark:hover:text-yellow-300 hover:text-red-700 transition duration-300"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

