
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import About from "./pages/About.tsx";
import Skills from "./pages/skills.tsx";
import Project from "./pages/project.tsx";
import Contact from "./pages/contact.tsx";
import Education from "./pages/education.tsx";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
