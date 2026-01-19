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

          <div className="max-w-md mx-auto py-6">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const button = form.querySelector("button");
                const statusText = form.querySelector(".status-text");

                if (button) button.disabled = true;
                if (statusText) {
                  statusText.textContent = "Subscribing...";
                  statusText.className = "status-text text-white/40 text-xs mt-2";
                }

                try {
                  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
                  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

                  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/subscribe_email`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "apikey": supabaseKey,
                      "Authorization": `Bearer ${supabaseKey}`
                    },
                    body: JSON.stringify({ p_email: email })
                  });

                  if (response.ok) {
                    if (statusText) {
                      statusText.textContent = "Successfully subscribed!";
                      statusText.className = "status-text text-[#00ff88] text-xs mt-2";
                    }
                    form.reset();
                  } else {
                    throw new Error();
                  }
                } catch (err) {
                  if (statusText) {
                    statusText.textContent = "Error. Please try again.";
                    statusText.className = "status-text text-red-400 text-xs mt-2";
                  }
                } finally {
                  if (button) button.disabled = false;
                }
              }}
              className="flex flex-col items-center"
            >
              <div className="flex w-full gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Subscribe to newsletter"
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#00aaff] text-white"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#00ff88] to-[#00aaff] text-black px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Join
                </button>
              </div>
              <p className="status-text h-4 mt-2"></p>
            </form>
          </div>


          <div className="flex justify-center space-x-6">
            {[{ icons: Github, link: "https://github.com/dhanrajpimple" }, { icons: Linkedin, link: "https://www.linkedin.com/in/dhanraj-pimple-1b802a274" }, { icons: Mail, link: "mailto:dhanraj.webdev@gmail.com" }].map((Icon, index) => (
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
