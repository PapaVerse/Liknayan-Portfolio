import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pt-24 pb-20">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Blue Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Cyan Glow */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-3xl"
          style={{
            animation: "float 8s ease-in-out infinite",
          }}
        ></div>

        {/* Indigo Glow */}
        <div
          className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-3xl"
          style={{
            animation: "float2 10s ease-in-out infinite",
          }}
        ></div>

        {/* Floating Dots */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>

      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div
            className="text-center lg:text-left"
            style={{
              animation: "fadeLeft 1s ease forwards",
            }}
          >

            <span className="text-blue-600 font-semibold uppercase tracking-[0.2em] text-sm sm:text-base">
              Welcome to
            </span>

            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-[#071A4A]">
              Liknayan
              <br />
              <span className="text-[#0A4DFF]">
                Tech Solutions
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 leading-relaxed">
              We Likha.
              <span className="text-[#0A4DFF]">
                {" "}We Innovate.
              </span>
              <span className="text-[#E53935]">
                {" "}We Build Solutions.
              </span>
            </p>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">
              Smart Solutions. Modern Technology. Real Results.
              We create modern websites, business systems, automation,
              and digital solutions that help businesses grow.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              <Link
                to="/projects"
                className="bg-[#0A4DFF] hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                View Our Projects
              </Link>

              <Link
                to="/contact"
                className="border-2 border-[#0A4DFF] text-[#0A4DFF] hover:bg-[#0A4DFF] hover:text-white transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl font-semibold"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Right */}
          <div
            className="flex justify-center"
            style={{
              animation: "fadeRight 1.2s ease forwards",
            }}
          >

            <div className="relative">

              {/* Glow Behind Logo */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 scale-125"></div>

              <img
                src="/LIKNAYAN.png"
                alt="Liknayan Logo"
                className="
                  relative
                  z-10
                  w-60
                  sm:w-72
                  md:w-80
                  lg:w-[420px]
                  xl:w-[500px]
                  h-auto
                  drop-shadow-2xl
                "
                style={{
                  animation: "floatLogo 5s ease-in-out infinite",
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}