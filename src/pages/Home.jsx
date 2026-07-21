import Hero from "../components/homesections/Hero";
import ProblemSolution from "../components/homesections/ProblemSolution";
import TestimonialSection from "../components/homesections/TestimonialSection";
import PathToSuccessSection from "../components/homesections/PathToSuccessSection"; // Import step process
import FeaturedProjectsSection from "../components/homesections/FeaturedProjectsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      {/* ...Your Services Section Component here... */}
      <PathToSuccessSection /> {/* Demystifies workflow with looped animations */}
      <TestimonialSection />
      <FeaturedProjectsSection />
    </main>
  );
}