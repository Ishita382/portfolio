"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function SectionWrapper({ id, children, className = "", style }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      style={style}
      className={`fade-in-section py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
