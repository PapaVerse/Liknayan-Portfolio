import Hero from "../components/homesections/Hero";
import ProblemSolution from "../components/homesections/ProblemSolution";
import TestimonialSection from "../components/homesections/TestimonialSection";
import FeaturedProjectsSection from "../components/homesections/FeaturedProjectsSection"; // Import the new section

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      {/* ...Your Services Section Component here... */}
      <TestimonialSection />
      <FeaturedProjectsSection /> {/* New section placed after testimonials */}
    </main>
  );
}