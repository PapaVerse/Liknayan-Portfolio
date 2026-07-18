import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-24">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <span className="text-blue-600 font-semibold uppercase tracking-[0.2em] text-sm sm:text-base">
              Welcome to
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[#071A4A]">
              Liknayan
              <br />

              <span className="text-[#0A4DFF]">
                Tech Solutions
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 leading-relaxed">
              We Likha.
              <span className="text-[#0A4DFF]"> We Innovate.</span>
              <span className="text-[#E53935]">
                {" "}
                We Build Solutions.
              </span>
            </p>

            <p className="mt-5 text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-8">
              Smart Solutions. Modern Technology. Real Results.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              <Link
                to="/projects"
                className="bg-[#0A4DFF] hover:bg-blue-700 transition text-white px-8 py-4 rounded-lg font-semibold text-center"
              >
                View Our Projects
              </Link>

              <Link
                to="/contact"
                className="border-2 border-[#0A4DFF] text-[#0A4DFF] hover:bg-[#0A4DFF] hover:text-white transition px-8 py-4 rounded-lg font-semibold text-center"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <img
              src="/LIKNAYAN.png"
              alt="Liknayan Logo"
              className="
                w-60
                sm:w-72
                md:w-80
                lg:w-[420px]
                xl:w-[500px]
                h-auto
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}