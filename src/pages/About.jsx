import { motion } from "framer-motion";

export default function About() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
          <h1 className="text-5xl font-bold text-[#071A4A]">
            About Liknayan Tech Solutions
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We are a passionate team of developers, designers, and technology
            enthusiasts dedicated to creating innovative digital solutions that
            help businesses grow, improve, and adapt in the modern digital world.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div variants={itemVariants} className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#071A4A]">Our Story</h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Founded in 2026, Liknayan Tech Solutions was built with a shared
              vision: to provide reliable, creative, and scalable technology
              solutions for businesses and organizations.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our team consists of a Full Stack Developer based in the United
              Kingdom, Front-End Developers and a Graphic Layout Designer based
              in the Philippines. Together, we combine technical expertise,
              creativity, and dedication to transform ideas into powerful
              digital experiences.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From web applications and business websites to customized digital
              solutions, we strive to deliver high-quality services that create
              meaningful impact for our clients.
            </p>
          </div>

          {/* Team Highlight Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#071A4A] rounded-2xl p-8 text-white shadow-xl"
          >
            <h3 className="text-2xl font-semibold">Our Team</h3>
            <ul className="mt-6 space-y-4 text-gray-200">
              <li>🚀 1 Full Stack Developer - United Kingdom</li>
              <li>💻 2 Front-End Developers - Philippines</li>
              <li>🎨 1 Graphic Layout Designer - Philippines</li>
            </ul>
            <p className="mt-8 text-gray-300">
              A collaborative team united by innovation, creativity, and a
              commitment to delivering exceptional technology solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Mission Vision Values */}
        <motion.div variants={containerVariants} className="mt-20 grid md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-md shadow-sm">
            <h3 className="text-xl font-bold text-[#071A4A]">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To develop innovative, accessible, and reliable digital solutions
              that empower businesses through technology.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-md shadow-sm">
            <h3 className="text-xl font-bold text-[#071A4A]">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To become a trusted technology partner known for creativity,
              excellence, and impactful digital transformation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-md shadow-sm">
            <h3 className="text-xl font-bold text-[#071A4A]">Our Values</h3>
            <p className="mt-4 text-gray-600">
              Innovation, integrity, collaboration, and continuous improvement
              guide everything we create.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}