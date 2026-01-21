
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react"
import { Card, CardContent } from "./ui/Card"
import Input from "./ui/input"
import Textarea from "./ui/Textarea"
import Button from "./ui/Button"
import axios from "axios"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResponseMessage(null)
    try {
      const response = await axios.post("https://formspree.io/f/xkgowdve", formData)
      if (response.status === 200) {
        setResponseMessage("Thank you for your message! We'll get back to you soon.")
        setFormData({ name: "", email: "", projectType: "", message: "" })
      } else {
        setResponseMessage("Oops! Something went wrong. Please try again.")
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/dhanrajpimple/", color: "#00ff88" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dhanraj-pimple-1b802a274/", color: "#00aaff" },
    { icon: Mail, label: "Email", href: "mailto:dhanrajpimple16@gmail.com", color: "#aa00ff" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919146890521", color: "#00ff88" },
    { icon: Phone, label: "Call", href: "tel:+919146890521", color: "#00aaff" },
  ]

  const quickInfo = [
    { label: "Response Time", value: "Within 24 hours guaranteed" },
    { label: "Location", value: "Based in India, Available Globally" },
    { label: "Availability", value: "Remote-first approach" },
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
            Ready to Build Something Amazing?
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-[#00ff88] to-[#aa00ff] mx-auto mt-4"
            />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-md text- focus:border-[#aa00ff] transition-colors"
                      required
                    >
                      <option value="" className="bg-black">Select Project Type</option>
                      <option value="website" className="bg-black">Website</option>
                      <option value="chatbot" className="bg-black">AI Chatbot</option>
                      <option value="fullstack" className="bg-black">Full-Stack App</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-3 transform hover:scale-105" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                {responseMessage && (
                  <div className="mt-4 text-center text-sm text-white/80">
                    {responseMessage}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                    style={{ borderColor: `${social.color}30` }}
                  >
                    <social.icon className="w-6 h-6" style={{ color: social.color }} />
                    <span className="text-white/80">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Quick Info</h3>
              <div className="space-y-4">
                {quickInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"
                  >
                    <h4 className="font-bold text-[#00ff88] mb-1">{info.label}</h4>
                    <p className="text-white/80">{info.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection