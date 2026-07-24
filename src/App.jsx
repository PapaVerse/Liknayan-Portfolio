import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { supabase } from "./supabaseClient";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Updates from "./pages/Updates";
import UpdateDetail from "./pages/UpdateDetail"; // <-- Import the new detail page
import Contact from "./pages/Contact";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/updates" element={<Updates supabase={supabase} />} />
        <Route path="/updates/:id" element={<UpdateDetail supabase={supabase} />} /> {/* <-- New Dynamic Route */}
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Secret Admin Routes */}
      <Route path="/login" element={<LoginPage supabase={supabase} />} />
      <Route path="/admin" element={<AdminPage supabase={supabase} />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}