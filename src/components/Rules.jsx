import React from 'react';

export default function Rules() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Rules & Eligibility</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
            <ul className="space-y-3 text-blue-100/90 text-sm">
              <li>Team size: 2–4</li>
              <li>Per Person: 100 Rupees</li>
              <li>Use any Gen-AI models/tools</li>
              <li>Final submission must include PPT + prototype demo</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
            <h3 className="text-white font-semibold">Judging Criteria</h3>
            <ul className="mt-3 space-y-2 text-blue-100/90 text-sm">
              <li>Innovation</li>
              <li>AI usage</li>
              <li>Functionality</li>
              <li>Feasibility</li>
              <li>Presentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
