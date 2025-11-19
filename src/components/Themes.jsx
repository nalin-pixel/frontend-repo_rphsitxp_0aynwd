import React from 'react';

const themes = [
  'AI for Education',
  'Automation',
  'Productivity',
  'Content Creation',
  'Agents',
  'Social Impact',
];

export default function Themes() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Themes</h2>
          <span className="text-blue-200/80 text-sm">Resources: Online</span>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {themes.map((t) => (
            <div key={t} className="rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-white/10 px-4 py-6 text-center text-blue-100/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
