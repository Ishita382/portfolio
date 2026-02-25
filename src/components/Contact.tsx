"use client";

import SectionWrapper from "./SectionWrapper";

const contactItems = [
  {
    label: "Email",
    value: "ishitaarora382@gmail.com",
    href: "mailto:ishitaarora382@gmail.com",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-400/15 group-hover:bg-pink-400/25",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 9781679089",
    href: "tel:+919781679089",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/15 group-hover:bg-amber-400/25",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Gurugram, India",
    href: null,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/15",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ishita12",
    href: "https://linkedin.com/in/ishita12",
    iconColor: "text-primary",
    iconBg: "bg-primary/15 group-hover:bg-primary/25",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Ishita382",
    href: "https://github.com/Ishita382",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/15 group-hover:bg-violet-400/25",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      className="relative"
      style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.10) 0%, rgba(236,72,153,0.08) 60%, transparent 100%)" }}
    >
      <div className="absolute left-0 bottom-0 w-[450px] h-[450px] bg-violet-500/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
        Contact
      </p>
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4 section-heading">
        Let&apos;s Work Together
      </h2>
      <p className="text-white/60 max-w-lg mb-12">
        I&apos;m open to full-time roles, freelance projects, and interesting
        collaborations. Feel free to reach out — I&apos;d love to connect!
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        {contactItems.map((item, i) => (
          <div key={i}>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 glass glass-hover border-gradient rounded-2xl p-5 group"
              >
                <div className={`w-11 h-11 ${item.iconBg} rounded-xl flex items-center justify-center ${item.iconColor} flex-shrink-0 transition-colors`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-white text-sm font-medium truncate">
                    {item.value}
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`w-4 h-4 text-white/20 ml-auto transition-colors flex-shrink-0 group-hover:${item.iconColor}`}>
                  <polyline points="9,18 15,12 9,6" />
                </svg>
              </a>
            ) : (
              <div className="flex items-center gap-4 glass border-gradient rounded-2xl p-5">
                <div className={`w-11 h-11 ${item.iconBg} rounded-xl flex items-center justify-center ${item.iconColor} flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-white text-sm font-medium truncate">
                    {item.value}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
