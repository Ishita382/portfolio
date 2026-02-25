"use client";

import SectionWrapper from "./SectionWrapper";

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      className="relative"
      style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.09) 0%, rgba(16,185,129,0.07) 50%, transparent 100%)" }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-cyan-500/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl pointer-events-none" />

      <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
        Education
      </p>
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-12 section-heading">
        Academic Background
      </h2>

      <div className="max-w-3xl">
        <div className="glass border-gradient rounded-2xl p-8 relative overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl" />

          <div className="flex flex-wrap items-start justify-between gap-6 relative">
            <div className="flex gap-5 items-start">
              {/* Degree icon */}
              <div className="w-14 h-14 bg-primary/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-primary">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path d="M12 14V21M3 9v7" />
                </svg>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-xl leading-tight">
                  Bachelor of Technology
                </h3>
                <p className="text-primary font-medium mt-1">
                  Computer Science Engineering
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="flex items-center gap-1.5 text-white/60 text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9,22 9,12 15,12 15,22" />
                    </svg>
                    Chitkara University
                  </span>
                  <span className="flex items-center gap-1.5 text-white/60 text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Chandigarh
                  </span>
                  <span className="flex items-center gap-1.5 text-white/60 text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Jun 2019 — Apr 2023
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA */}
            <div className="text-center px-6 py-4 bg-primary/10 border border-primary/25 rounded-2xl">
              <div className="font-heading font-bold text-4xl gradient-text">
                9.98
              </div>
              <div className="text-white/50 text-xs mt-1 tracking-wide uppercase">
                CGPA / 10
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500/15 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-yellow-400">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-medium">
                  Introduction to Web Development
                </div>
                <div className="text-white/40 text-xs mt-0.5">
                  Coursera — Completed foundational HTML & CSS through hands-on projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
