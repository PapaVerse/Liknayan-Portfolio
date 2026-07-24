import Hero from "../components/homesections/Hero";
import ProblemSolution from "../components/homesections/ProblemSolution";
import PathToSuccessSection from "../components/homesections/PathToSuccessSection";
import TestimonialSection from "../components/homesections/TestimonialSection";
import FeaturedProjectsSection from "../components/homesections/FeaturedProjectsSection";
import LatestUpdateHome from "../components/homesections/LatestUpdateHome"; // Import it here
import { supabase } from "../supabaseClient"; // Adjust path to your supabase client if needed

export default function Home() {
  return (
    <main>
      <Hero />
      <LatestUpdateHome supabase={supabase} /> {/* Positioned gracefully near the end */}
      <ProblemSolution />
      {/* ...Your Services Section Component here... */}
      <PathToSuccessSection />
      <TestimonialSection />
      <FeaturedProjectsSection />

    </main>
  );
}