"use client";

import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    category: "Languages",
    color: {
      icon: "text-amber-400",
      iconBg: "bg-amber-400/15",
      badge: "text-amber-300 bg-amber-400/10 border-amber-400/25 hover:bg-amber-400/20 hover:border-amber-400",
      orb: "bg-amber-500/5",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["JavaScript", "TypeScript", "C", "Java"],
  },
  {
    category: "Frontend",
    color: {
      icon: "text-primary",
      iconBg: "bg-primary/15",
      badge: "text-primary bg-primary/10 border-primary/25 hover:bg-primary/20 hover:border-primary",
      orb: "bg-primary/5",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9l3 3-3 3m5 0h3" />
      </svg>
    ),
    skills: [
      "React JS",
      "React Native",
      "Next.js",
      "TailwindCSS",
      "Storybook",
      "Redux",
      "Redux Toolkit",
      "React Query",
      "Zustand",
      "Material UI",
      "Styled Components",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    color: {
      icon: "text-emerald-400",
      iconBg: "bg-emerald-400/15",
      badge: "text-emerald-300 bg-emerald-400/10 border-emerald-400/25 hover:bg-emerald-400/20 hover:border-emerald-400",
      orb: "bg-emerald-500/5",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: ["Node JS", "Express JS", "SQL", "PostgreSQL"],
  },
  {
    category: "Tools & DevOps",
    color: {
      icon: "text-violet-400",
      iconBg: "bg-violet-400/15",
      badge: "text-violet-300 bg-violet-400/10 border-violet-400/25 hover:bg-violet-400/20 hover:border-violet-400",
      orb: "bg-violet-500/5",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      "Docker",
      "GitHub Actions",
      "GraphQL",
      "Firebase",
      "Supabase",
      "Figma",
      "Postman",
      "Jira",
      "GitHub",
      "GitLab",
      "Buildkite",
      "AWS",
      "Claude Code",
      "Cursor",
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="relative"
      style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.09) 0%, rgba(34,211,238,0.07) 50%, transparent 100%)" }}
    >
      <div className="absolute right-0 top-1/3 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-cyan-500/12 rounded-full blur-3xl pointer-events-none" />

      <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
        Skills
      </p>
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-12 section-heading">
        My Tech Stack
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillGroups.map((group, gi) => (
          <div key={gi} className="glass border-gradient rounded-2xl p-6 relative overflow-hidden">
            {/* subtle color orb per card */}
            <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl pointer-events-none ${group.color.orb}`} />
            <div className="flex items-center gap-3 mb-5 relative">
              <div className={`w-9 h-9 ${group.color.iconBg} rounded-xl flex items-center justify-center ${group.color.icon}`}>
                {group.icon}
              </div>
              <h3 className="font-heading font-semibold text-white text-base">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 relative">
              {group.skills.map((skill, si) => (
                <span
                  key={skill}
                  className={`skill-badge px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${group.color.badge}`}
                  style={{ transitionDelay: `${si * 20}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
