import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Web Application Development", description: "We build secure, scalable, and high-performing web applications designed to streamline business processes and improve user experiences.", icon: "💻" },
    { title: "Website Development", description: "From corporate websites to custom platforms, we create modern and responsive websites that represent your brand and help you reach more customers.", icon: "🌐" },
    { title: "UI/UX Design", description: "We design intuitive and engaging user interfaces focused on usability, accessibility, and creating meaningful digital experiences.", icon: "🎨" },
    { title: "Custom Software Solutions", description: "Every business has unique needs. We develop customized software solutions tailored to your workflow, goals, and operational requirements.", icon: "⚙️" },
    { title: "IT Consulting", description: "We provide technology guidance to help businesses choose the right solutions, improve efficiency, and maximize their digital potential.", icon: "🚀" },
    { title: "Maintenance & Support", description: "We provide continuous support, improvements, and updates to ensure your systems remain reliable, secure, and up to date.", icon: "🛠️" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden">
      {/* VIBRANT FLOATING BACKGROUND EFFECTS */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-200 rounded-full filter blur-[150px] opacity-30 animate-float"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-indigo-200 rounded-full filter blur-[150px] opacity-30 animate-float2"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="max-w-3xl">
          <h1 className="text-5xl font-bold text-[#071A4A]">Our Services</h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At Liknayan Tech Solutions, we provide innovative technology
            solutions designed to help businesses grow, automate processes,
            and build a stronger digital presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-8 bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl">{service.icon}</div>
              <h2 className="mt-5 text-xl font-bold text-[#071A4A]">{service.title}</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 bg-[#071A4A] rounded-2xl p-10 text-white text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold">Turning Ideas Into Digital Solutions</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-200">
            Whether you need a website, web application, or a complete digital
            solution, our team works closely with you to transform your ideas
            into reliable and impactful technology.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}