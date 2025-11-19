import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">About the Event</h2>
        <p className="mt-4 text-blue-100/90 max-w-3xl">
          A 2-day Generative AI hackathon focused on real-world problem solving through idea pitching, rapid prototyping, and impactful innovation. Teams will submit their PPT idea, build a working prototype, and present it to judges.
        </p>
      </div>
    </section>
  );
}
