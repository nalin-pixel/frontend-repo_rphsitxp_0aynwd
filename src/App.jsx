import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Structure from './components/Structure';
import Themes from './components/Themes';
import Rules from './components/Rules';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* subtle grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.06),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.06),transparent_40%)]" />

      <header className="relative z-20">
        <nav className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 shadow-[0_0_25px_rgba(56,189,248,0.3)]" />
            <span className="text-white font-semibold">SPECTRUM 2025</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-blue-100/90 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#themes" className="hover:text-white">Themes</a>
            <a href="#contact" className="hover:text-white">Register</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <div id="about"><About /></div>
        <div id="structure"><Structure /></div>
        <div id="themes"><Themes /></div>
        <Rules />
        <Timeline />
        <Contact />
      </main>

      <footer className="relative z-10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-blue-200/70 text-sm">
          <span>© 2025 PCCoE • Spectrum Gen-AI Hackathon</span>
          <a href="#" className="hover:text-white">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
