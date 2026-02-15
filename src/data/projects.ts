import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "Reduced checkout time by 40% with a streamlined full-stack storefront featuring real-time inventory, Stripe payments, and an admin dashboard.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "linear-gradient(135deg, oklch(0.35 0.12 200), oklch(0.25 0.08 230))",
    category: "Full Stack",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "Collaborative workspace with drag-and-drop boards and real-time sync — used daily by a 20-person team.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, oklch(0.3 0.1 170), oklch(0.22 0.08 200))",
    category: "SaaS",
    sourceUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description:
      "Interactive forecast visualizations with D3.js charts and Mapbox layers, pulling from multiple weather APIs.",
    techStack: ["React", "D3.js", "OpenWeather API", "Mapbox"],
    gradient: "linear-gradient(135deg, oklch(0.32 0.1 250), oklch(0.22 0.07 280))",
    category: "Data Viz",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "project-4",
    title: "CLI DevTools",
    description:
      "Developer productivity toolkit that automates scaffolding, project setup, and CI workflows — 500+ npm downloads.",
    techStack: ["Node.js", "TypeScript", "Commander.js"],
    gradient: "linear-gradient(135deg, oklch(0.3 0.08 150), oklch(0.2 0.06 180))",
    category: "Developer Tools",
    sourceUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-5",
    title: "Portfolio Site",
    description:
      "This site — built with React 19, Tailwind CSS 4, and Framer Motion for a buttery-smooth experience.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    gradient: "linear-gradient(135deg, oklch(0.33 0.14 195), oklch(0.2 0.1 220))",
    category: "Personal",
    sourceUrl: "https://github.com",
    featured: false,
  },
]
