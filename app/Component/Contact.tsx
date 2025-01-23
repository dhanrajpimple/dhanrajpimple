import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios"; // Import axios

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
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-white rounded-md h-10 px-5 text-black border-gray-500 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-10 rounded-md text-black px-5 border-gray-500 bg-white border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-500 px-5 py-2 text-black bg-white border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
            {responseMessage && (
              <div className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
                {responseMessage}
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div className="flex items-center">
              <FaEnvelope className="text-2xl text-indigo-600 mr-4" />
              <span className="text-gray-700 dark:text-gray-300">dhanraj.webdev@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-2xl text-indigo-600 mr-4" />
              <span className="text-gray-700 dark:text-gray-300">+91 7219111601</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl text-indigo-600 mr-4" />
              <span className="text-gray-700 dark:text-gray-300">Pune, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




