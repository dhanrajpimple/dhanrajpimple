import { FaMobileAlt, FaDesktop, FaServer, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Mobile App Development",
    description:
      "We create cutting-edge mobile applications for iOS and Android platforms, ensuring a seamless user experience and robust functionality.",
    icon: <FaMobileAlt aria-label="Mobile App Development Icon" />,
  },
  {
    title: "Frontend Development",
    description:
      "Our frontend development services focus on creating responsive, intuitive, and visually appealing user interfaces using the latest web technologies.",
    icon: <FaDesktop aria-label="Frontend Development Icon" />,
  },
  {
    title: "Backend Development",
    description:
      "We build scalable and secure backend systems that power your applications, ensuring high performance and reliability.",
    icon: <FaServer aria-label="Backend Development Icon" />,
  },
  {
    title: "AI Integration",
    description:
      "We integrate advanced AI capabilities into your applications, from natural language processing to machine learning models, enhancing your product's intelligence.",
    icon: <FaRobot aria-label="AI Integration Icon" />,
  },
];

const OurServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: { scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-yellow-300"
        >
          Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map(({ title, description, icon }, index) => (
            <motion.div
              key={`service-${index}`}
              variants={itemVariants}
              whileHover="hover"
              className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl text-blue-400 mr-4">{icon}</div>
                <h3 className="text-2xl font-semibold text-gray-200">{title}</h3>
              </div>
              <p className="text-gray-300">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;