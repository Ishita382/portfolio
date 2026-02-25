"use client";

import SectionWrapper from "./SectionWrapper";

const achievements = [
  {
    title: "Hackathon Winner",
    description:
      "Secured first place in a company-wide hackathon, serving as the only frontend developer on a team of five.",
    icon: "🏆",
    color: "from-yellow-500/20 to-orange-500/10",
    border: "border-yellow-500/20",
  },
  {
    title: "Project Ownership",
    description:
      "Led the development of 4 key user-facing panels, improving lead management workflows and business insights through scalable architecture.",
    icon: "🚀",
    color: "from-primary/15 to-blue-600/10",
    border: "border-primary/20",
  },
  {
    title: "Technical Hiring",
    description:
      "Conducted 15+ technical interviews, aiding in the successful hiring of frontend developers.",
    icon: "👥",
    color: "from-green-500/15 to-emerald-500/10",
    border: "border-green-500/20",
  },
  {
    title: "Frontend Architecture",
    description:
      "Contributed to and led frontend architecture for platformizing three products with a common design system language.",
    icon: "🏗️",
    color: "from-purple-500/15 to-indigo-500/10",
    border: "border-purple-500/20",
  },
  {
    title: "Extensive Code Migration",
    description:
      "Migrated component library from Kendo UI to CARS24's design language system (DLS) using custom MCP server tooling.",
    icon: "⚡",
    color: "from-cyan-500/15 to-blue-500/10",
    border: "border-cyan-500/20",
  },
  {
    title: "+15% Conversion Rate",
    description:
      "Led the redesign of a call center panel, optimizing lead management workflows and increasing lead-to-appointment conversion rate by 15%.",
    icon: "📈",
    color: "from-pink-500/15 to-rose-500/10",
    border: "border-pink-500/20",
  },
];

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      className="relative"
      style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.09) 0%, rgba(234,179,8,0.06) 40%, rgba(236,72,153,0.06) 100%)" }}
    >
      {/* Background orbs */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-amber-500/12 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
        Achievements
      </p>
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-12 section-heading">
        Milestones & Impact
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-6 border bg-gradient-to-br ${a.color} ${a.border} glass-hover transition-all duration-300 overflow-hidden`}
          >
            {/* Background glow */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/3 blur-2xl" />

            <div className="text-3xl mb-4">{a.icon}</div>
            <h3 className="font-heading font-bold text-white text-base mb-2">
              {a.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {a.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
