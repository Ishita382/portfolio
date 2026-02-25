"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    company: "CARS24",
    position: "Software Development Engineer",
    period: "Aug 2024 — Present",
    location: "Gurugram, India",
    description:
      "Tech-driven auto marketplace enabling users to seamlessly buy, sell, and finance vehicles with end-to-end digital solutions.",
    color: "#FF6B35",
    bullets: [
      "Owned end-to-end development and maintenance of four key user-facing panels, improving lead management workflows and business insights through scalable architecture.",
      "Contributed significantly to the company's Design Language System (DLS), building reusable, type-safe components using Storybook and TypeScript to standardize UI across applications.",
      "Revamped consumer-facing landing pages with SEO best practices and Core Web Vitals optimization, improving search visibility and page performance.",
      "Led the redesign of a call center panel, optimizing lead management workflows and increasing lead-to-appointment conversion rate by 15%.",
      "Collaborated with product stakeholders to implement Google Analytics event tracking across key user journeys, enabling accurate funnel analysis.",
      "Designed and owned the CarTruth analytics panel, enabling data-driven vehicle loan decision-making and improving loan lead quality.",
      "Integrated Google Maps and Ola Maps SDKs to implement real-time location-based features across platforms.",
      "Spearheaded frontend platformization: designed SDK-based modular architecture for 3 apps, enhancing reusable flows.",
    ],
  },
  {
    company: "Glue Labs",
    position: "Software Development Engineer",
    period: "May 2023 — Jul 2024",
    location: "New Delhi, India",
    description: "A company focused on developing innovative technology solutions.",
    color: "#8B5CF6",
    bullets: [
      "Built a complete user onboarding flow and user dashboard, including secure authentication systems using modern best practices in session management and form validation.",
      "Led the revamp of SEO-optimized landing pages, enhancing load speed, accessibility (a11y), and mobile responsiveness, aligned with Core Web Vitals benchmarks.",
      "Developed plug-and-play connectors for third-party platforms such as Shopify and domain providers, enabling seamless integration with minimal developer effort.",
    ],
  },
  {
    company: "Glue Labs",
    position: "Software Development Engineer Intern",
    period: "Jun 2022 — Apr 2023",
    location: "New Delhi, India",
    description: "A company focused on developing innovative technology solutions.",
    color: "#8B5CF6",
    bullets: [
      "Built responsive, pixel-perfect web pages with Next.js, TypeScript, Tailwind. Emphasized component-driven architecture and accessibility-first design.",
      "Spearheaded the migration to a modern tech stack: TypeScript, Next.js, and Tailwind CSS, resulting in improved developer productivity, code maintainability, and performance.",
      "Integrated Razorpay SDK to deliver a smooth, secure payment experience, ensuring compliance with best UI/UX practices for high-conversion checkout flows.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <SectionWrapper
      id="experience"
      className="relative"
      style={{ background: "linear-gradient(135deg, rgba(236,72,153,0.10) 0%, rgba(139,92,246,0.07) 60%, transparent 100%)" }}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-pink-500/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
        Experience
      </p>
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-12 section-heading">
        Where I&apos;ve Worked
      </h2>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Company tabs */}
        <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
          {experiences.map((e, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "bg-primary/15 border border-primary/40 text-primary"
                  : "glass border border-white/5 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              <div className="font-semibold">{e.company}</div>
              <div
                className={`text-xs mt-0.5 ${active === i ? "text-primary/70" : "text-white/40"}`}
              >
                {e.period}
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-2 glass border-gradient rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="font-heading font-bold text-xl text-white">
                {exp.position}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-primary font-medium">{exp.company}</span>
                <span className="text-white/30">·</span>
                <span className="text-white/50 text-sm">{exp.location}</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium whitespace-nowrap">
              {exp.period}
            </span>
          </div>

          <p className="text-white/50 text-sm mb-6 italic">{exp.description}</p>

          <ul className="space-y-3">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-white/70 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
