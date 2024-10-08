
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Skills from "./pages/Skills.tsx";
import Project from "./pages/Project.tsx";
import Contact from "./pages/Contact.tsx";
import Education from "./pages/Education.tsx";
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
