import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { TechnicalDifferentiator } from './components/TechnicalDifferentiator';
import { Architecture } from './components/Architecture';
import { ResponsibleVerification } from './components/ResponsibleVerification';
import { ProjectStatus } from './components/ProjectStatus';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="app-wrapper">
      <a href="#overview" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      <main id="main-content">
        {/* Section B: Hero Section with SVG Evidence Graph */}
        <Hero />

        {/* Section C: The Problem */}
        <Problem />

        {/* Section D: How Verity Works */}
        <HowItWorks />

        {/* Section E: Technical Differentiator (With highest visual emphasis & interactive state) */}
        <TechnicalDifferentiator />

        {/* Section F: Modular Architecture */}
        <Architecture />

        {/* Section G: Responsible Verification */}
        <ResponsibleVerification />

        {/* Section H: Project Status & Roadmap */}
        <ProjectStatus />
      </main>

      {/* Section I: Footer */}
      <Footer />
    </div>
  );
}

export default App;
