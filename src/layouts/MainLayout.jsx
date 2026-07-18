import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollToTop from "../components/ScrollToTop"; // Ensure this is imported

export default function MainLayout() {
  return (
    <>
      <ScrollToTop /> {/* This is what triggers the scroll to top! */}
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}