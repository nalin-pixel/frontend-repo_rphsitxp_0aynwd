import React from 'react';

const steps = [
  { day: 'Day 1', items: ['Orientation', 'Quiz', 'PPT Submission'] },
  { day: 'Day 2', items: ['Prototype Build', 'Demo', 'Results'] },
];

export default function Timeline() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Timeline</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.day} className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold">{s.day}</h3>
              <div className="mt-3 flex items-center gap-3 flex-wrap">
                {s.items.map((i) => (
                  <span key={i} className="rounded-full border border-white/10 bg-white/5 text-blue-100/90 text-xs px-3 py-1">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
