import { Routes, Route } from "react-router-dom";
import "./styles/layout.css";
import "./styles/components.css";


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutSection from "./components/AboutSection";


import ProjectDetail from "./pages/ProjectDetail";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <main>
                <Hero />
                <ProjectsSection />
                <ExperienceSection />
                <AboutSection />
              </main>
            </>
          } 
        />

        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
