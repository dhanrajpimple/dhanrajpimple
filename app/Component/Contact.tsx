import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios"; // Import axios
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);
    try {
      // Get Formspree endpoint from environment variables
          // Send data using Axios
      const response = await axios.post('https://formspree.io/f/xkgowdve', formData);

      // Handle success (Optional, customize as needed)
      if (response.status === 200) {
        setResponseMessage("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form data", error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-yellow-300"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 bg-yellow-300 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
            {responseMessage && (
              <div className="mt-4 text-center text-sm text-gray-300">
                {responseMessage}
              </div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <FaEnvelope className="text-2xl text-yellow-300 mr-4" />
              <span className="text-gray-300">dhanraj.webdev@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-2xl text-yellow-300 mr-4" />
              <span className="text-gray-300">+91 7219111601</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl text-yellow-300 mr-4" />
              <span className="text-gray-300">Pune, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




