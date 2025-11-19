import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleRegisterClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for vibe (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80" />
      <div className="pointer-events-none absolute -inset-x-20 -bottom-32 h-64 blur-3xl bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.35),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs sm:text-sm text-blue-100/80 backdrop-blur-md">
          PCCoE presents • AI for Innovation
        </span>
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]">
          Spectrum 2025 – Gen-AI Hackathon
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto">
          2 Days. Unlimited Creativity. Pure Generative AI.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={handleRegisterClick} className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 px-6 py-3 text-white font-semibold shadow-[0_10px_30px_rgba(99,102,241,0.35)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400/60">
            Register Now
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
