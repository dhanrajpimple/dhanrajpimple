import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Dhanraj. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/dhanajpimple"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhanraj-pimple-1b802a274/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

