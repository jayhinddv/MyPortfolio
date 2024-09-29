import Home from "./pages/home"; 
import About from "./pages/about";
import Contact from "./pages/contact";
import Education from "./pages/education";
import More from "./pages/more";
import Project from "./pages/project";
import Skills from "./pages/skills";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/education" element={<Education />} />
      <Route path="/more" element={<More />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
