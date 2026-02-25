"use client";

import SectionWrapper from "./SectionWrapper";

const stats = [
  { value: "3+", label: "Years Experience", color: "text-violet-400", bg: "bg-violet-500/8", border: "border-violet-500/20" },
  { value: "2", label: "Companies", color: "text-cyan-400", bg: "bg-cyan-500/8", border: "border-cyan-500/20" },
  { value: "10+", label: "Projects Built", color: "text-pink-400", bg: "bg-pink-500/8", border: "border-pink-500/20" },
  { value: "100+", label: "Active Users", color: "text-emerald-400", bg: "bg-emerald-500/8", border: "border-emerald-500/20" },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="relative"
      style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.10) 0%, rgba(236,72,153,0.06) 60%, transparent 100%)" }}
    >
      {/* Background orbs */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6 section-heading">
            Crafting digital experiences that matter
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            I am a Software Development Engineer with extensive experience in
            frontend software development, specializing in{" "}
            <span className="text-amber-400">JavaScript</span>,{" "}
            <span className="text-primary">TypeScript</span>,{" "}
            <span className="text-cyan-400">React JS</span>,{" "}
            <span className="text-violet-400">React Native</span>, and various
            modern technologies.
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            I have a proven track record of delivering complex projects while
            enhancing user experience, building modular and responsive designs,
            and maintaining high coding standards. My commitment to building
            innovative solutions has driven successful product outcomes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ishitaarora382@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 btn-gradient text-white rounded-xl text-sm font-medium"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              ishitaarora382@gmail.com
            </a>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-white/10 text-white/60 rounded-xl text-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Gurugram, India
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`glass-hover rounded-2xl p-6 text-center border ${stat.bg} ${stat.border}`}
            >
              <div className={`font-heading font-bold text-4xl mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}

          {/* Extra card spanning full width */}
          <div className="col-span-2 rounded-2xl p-5 flex items-center gap-4 border border-amber-500/20 bg-amber-500/5 glass-hover">
            <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-amber-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-medium text-sm">Hackathon Winner</div>
              <div className="text-white/50 text-xs mt-0.5">First place — only frontend dev on a team of 5</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
