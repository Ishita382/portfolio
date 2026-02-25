"use client";

import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Dashgen",
    description:
      "A platform designed to interact with various LLMs (OpenAI, Anthropic, Mistral, Groq, Google Gen AI, xAI, DeepSeek) through API keys in a single, unified interface. Developed as a personal project with colleagues, now boasting over 100 active users.",
    tags: ["NestJS", "PostgreSQL", "Redis", "LangChain", "Docker", "AWS", "NextJS", "TailwindCSS", "Zustand"],
    link: "https://dashgen.in/",
    highlight: true,
    badge: "100+ Active Users",
    badgeColor: "green",
    period: "2023 — Present",
    accent: { icon: "text-cyan-400", iconBg: "bg-cyan-400/15", orb: "bg-cyan-500/8", tag: "text-cyan-300/70 bg-cyan-500/8 border-cyan-500/15" },
  },
  {
    title: "FIFO",
    description:
      "A blogging platform built to explore insights about D2C businesses, offering users real-time interactions and scalable infrastructure.",
    tags: ["Next.js", "TailwindCSS", "React Query", "GraphQL", "Zustand"],
    link: null,
    period: "Jun 2022 — Jul 2023",
    accent: { icon: "text-violet-400", iconBg: "bg-violet-400/15", orb: "bg-violet-500/6", tag: "text-violet-300/70 bg-violet-500/8 border-violet-500/15" },
  },
  {
    title: "Glue",
    description:
      "Developed an app to create fan pages with AI-generated videos and rewards to engage customers at Glue Labs.",
    tags: ["Next.js", "TailwindCSS", "React Query", "GraphQL", "Zustand"],
    link: null,
    period: "Jul 2023 — Jul 2024",
    accent: { icon: "text-amber-400", iconBg: "bg-amber-400/15", orb: "bg-amber-500/6", tag: "text-amber-300/70 bg-amber-500/8 border-amber-500/15" },
  },
  {
    title: "Shopify Review App",
    description:
      "A Shopify application that helps customers better understand products by collecting reviews. Led a team of four as the sole frontend developer.",
    tags: ["React", "Tailwind CSS", "Material UI", "HTML", "CSS"],
    link: null,
    badge: "Team Lead",
    badgeColor: "emerald",
    period: "Aug 2023",
    accent: { icon: "text-emerald-400", iconBg: "bg-emerald-400/15", orb: "bg-emerald-500/6", tag: "text-emerald-300/70 bg-emerald-500/8 border-emerald-500/15" },
  },
  {
    title: "AI-Powered Shopify Dashboard",
    description:
      "AI-powered Reflex-based dashboard for generating and managing pages in Shopify stores. Provides a user-friendly interface for store owners to streamline their operations.",
    tags: ["Reflex.dev", "TailwindCSS", "Python"],
    link: null,
    period: "2024",
    accent: { icon: "text-pink-400", iconBg: "bg-pink-400/15", orb: "bg-pink-500/6", tag: "text-pink-300/70 bg-pink-500/8 border-pink-500/15" },
  },
];

const badgeColors: Record<string, string> = {
  green: "bg-green-500/15 border-green-500/30 text-green-400",
  emerald: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
  blue: "bg-primary/15 border-primary/30 text-primary",
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="relative"
      style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(236,72,153,0.07) 50%, transparent 100%)" }}
    >
      {/* Background orbs */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-amber-500/12 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
        Projects
      </p>
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-12 section-heading">
        Things I&apos;ve Built
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`glass glass-hover border-gradient rounded-2xl p-6 flex flex-col relative overflow-hidden ${
              project.highlight ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            {/* Per-card color orb */}
            <div className={`absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl pointer-events-none ${project.accent.orb}`} />

            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-4 relative">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${project.accent.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={`w-5 h-5 ${project.accent.icon}`}>
                    <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                    <path d="M7 10h10M7 14h7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">
                    {project.title}
                  </h3>
                  <span className="text-white/40 text-xs">{project.period}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {project.badge && (
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                      badgeColors[project.badgeColor || "blue"]
                    }`}
                  >
                    {project.badge}
                  </span>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 glass border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:border-white/30 transition-colors ${project.accent.icon}`}
                    aria-label="Visit project"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1 relative">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 relative">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 text-xs rounded-lg border ${project.accent.tag}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
