import React from 'react';

const Item = ({ day, title, bullets }) => (
  <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
    <h3 className="text-white font-semibold text-lg">{day}</h3>
    <p className="text-blue-100/90 mt-1">{title}</p>
    <ul className="mt-4 space-y-2 text-blue-100/80 text-sm list-disc list-inside">
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </div>
);

export default function Structure() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Event Structure</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Item day="Day 1" title="AI Quiz + Problem Statement PPT Submission" bullets={[
            'Kickoff orientation',
            'Short AI quiz to evaluate fundamentals',
            'Prepare and submit PPT for your problem statement',
          ]}/>
          <Item day="Day 2" title="Prototype Development + Final Presentation" bullets={[
            'Build a prototype using Gen-AI tools/models',
            'Refine features and prepare demo',
            'Final presentation to judges',
          ]}/>
        </div>
      </div>
    </section>
  );
}
