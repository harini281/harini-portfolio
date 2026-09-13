import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Learning } from './components/Learning';
import { Certifications } from './components/Certifications';
import { GitHubStats } from './components/GitHubStats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-purple-600/30 selection:text-cyan-300">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Learning />
        <Certifications />
        <GitHubStats />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
