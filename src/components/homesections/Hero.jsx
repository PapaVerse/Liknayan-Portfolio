import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pt-24 pb-20">

      {/* Inline Keyframe Animations for Orbital Effects */}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbitReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

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
                className="bg-[#0A4DFF] hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-white px-8 py-4 rounded-xl font-semibold shadow-lg text-center"
              >
                View Our Projects
              </Link>

              <Link
                to="/contact"
                className="border-2 border-[#0A4DFF] text-[#0A4DFF] hover:bg-[#0A4DFF] hover:text-white transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl font-semibold text-center"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Right with True Layered Overlapping Neutron Animation Effect */}
          <div
            className="flex justify-center items-center"
            style={{
              animation: "fadeRight 1.2s ease forwards",
            }}
          >

            <div className="relative flex items-center justify-center p-8">

              {/* Glow Behind Logo */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 scale-125"></div>

              {/* ================= BACKGROUND LAYER (Behind Logo) ================= */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                {/* Ring 1 Back Half */}
                <div 
                  className="absolute w-[320px] sm:w-[400px] lg:w-[480px] h-[160px] sm:h-[200px] lg:h-[240px] rounded-[100%] border border-blue-400/20"
                  style={{ transform: "rotate(25deg)", clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
                />
                {/* Ring 2 Back Half */}
                <div 
                  className="absolute w-[320px] sm:w-[400px] lg:w-[480px] h-[160px] sm:h-[200px] lg:h-[240px] rounded-[100%] border border-cyan-400/20"
                  style={{ transform: "rotate(-35deg)", clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }}
                />
                {/* Ring 3 Back Half */}
                <div 
                  className="absolute w-[180px] sm:w-[220px] lg:w-[260px] h-[340px] sm:h-[420px] lg:h-[500px] rounded-[100%] border border-indigo-400/15"
                  style={{ transform: "rotate(15deg)", clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                />
              </div>

              {/* ================= CENTRAL LOGO LAYER ================= */}
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

              {/* ================= FOREGROUND LAYER (In Front of Logo) ================= */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                {/* Ring 1 Front Half + Orbiting Dot */}
                <div 
                  className="absolute w-[320px] sm:w-[400px] lg:w-[480px] h-[160px] sm:h-[200px] lg:h-[240px] rounded-[100%] border border-blue-400/40"
                  style={{ transform: "rotate(25deg)", clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }}
                >
                  <div 
                    className="absolute w-full h-full pointer-events-auto"
                    style={{ animation: "orbit 7s linear infinite" }}
                  >
                    <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6]" />
                  </div>
                </div>

                {/* Ring 2 Front Half + Orbiting Dot */}
                <div 
                  className="absolute w-[320px] sm:w-[400px] lg:w-[480px] h-[160px] sm:h-[200px] lg:h-[240px] rounded-[100%] border border-cyan-400/40"
                  style={{ transform: "rotate(-35deg)", clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
                >
                  <div 
                    className="absolute w-full h-full pointer-events-auto"
                    style={{ animation: "orbitReverse 10s linear infinite" }}
                  >
                    <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee]" />
                  </div>
                </div>

                {/* Ring 3 Front Half + Orbiting Dot */}
                <div 
                  className="absolute w-[180px] sm:w-[220px] lg:w-[260px] h-[340px] sm:h-[420px] lg:h-[500px] rounded-[100%] border border-indigo-400/35"
                  style={{ transform: "rotate(15deg)", clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
                >
                  <div 
                    className="absolute w-full h-full pointer-events-auto"
                    style={{ animation: "orbit 12s linear infinite" }}
                  >
                    <div className="absolute top-1/2 -left-1.5 w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}