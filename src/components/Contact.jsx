import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [team, setTeam] = useState('');

  const registerLink = 'https://forms.gle/your-google-form';

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Get in touch & Register</h2>
              <p className="mt-3 text-blue-100/90 text-sm">Have questions or ready to join? Fill the form to register your team.</p>

              <div className="mt-6 space-y-3 text-blue-100/90 text-sm">
                <div>
                  <span className="text-white">Email:</span> spectrum@pccoe.edu.in
                </div>
                <div>
                  <span className="text-white">Phone:</span> +91-98765-43210
                </div>
              </div>
              <a href={registerLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 text-white font-semibold">
                Go to Registration Form
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>

            <div>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Your Name</label>
                  <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full rounded-xl bg-slate-900/70 border border-white/10 px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="e.g., Alex" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Email</label>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-xl bg-slate-900/70 border border-white/10 px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Team Name</label>
                  <input value={team} onChange={(e)=>setTeam(e.target.value)} className="w-full rounded-xl bg-slate-900/70 border border-white/10 px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Your team" />
                </div>
                <button onClick={() => window.open(registerLink, '_blank')} className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 px-5 py-3 text-white font-semibold">
                  Register Now
                </button>
                <p className="text-xs text-blue-200/70">Note: This quick form is just for preview; official registration is via the link above.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
