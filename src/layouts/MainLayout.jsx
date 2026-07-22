import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollToTop from "../components/ScrollToTop";
import CookieConsent from "../components/CookieConsent"; // 1. Import it here

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTopButton />
      <CookieConsent /> {/* 2. Add it here */}
    </>
  );
}