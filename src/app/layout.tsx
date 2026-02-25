import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishita Arora — Software Development Engineer",
  description:
    "Portfolio of Ishita Arora, Software Development Engineer specializing in React, Next.js, TypeScript, and Frontend Development.",
  keywords: [
    "Ishita Arora",
    "Software Development Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ishita Arora" }],
  openGraph: {
    title: "Ishita Arora — Software Development Engineer",
    description:
      "Portfolio of Ishita Arora, Software Development Engineer specializing in React, Next.js, TypeScript, and Frontend Development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${rubik.variable} antialiased bg-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
