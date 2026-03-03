import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    id: "tell-me-quiz",
    title: "Tell Me Quiz",
    description:
      "iOS quiz app that challenges players with fun trivia questions across multiple categories — built natively with Swift and SwiftUI.",
    techStack: ["Swift", "SwiftUI", "iOS"],
    gradient: "linear-gradient(135deg, oklch(0.35 0.12 200), oklch(0.25 0.08 230))",
    category: "iOS",
    imageUrl: "https://raw.githubusercontent.com/rickysrc/tell-me-quiz/main/public/screenshots/iphone/1.png",
    liveUrl: "https://www.riccardocogoni.com/tell-me-quiz/",
    sourceUrl: "https://github.com/rickysrc/tell-me-quiz",
    featured: true,
  },
  {
    id: "between-spaces",
    title: "Between Spaces",
    description:
      "Desktop app that lets you switch between macOS spaces from your phone — built with Electron and Express with keyboard shortcut emulation.",
    techStack: ["Electron", "Express", "Node.js"],
    imageUrl: "https://raw.githubusercontent.com/rickysrc/between-spaces/main/examples/preview_banner.png",
    gradient: "linear-gradient(135deg, oklch(0.3 0.1 170), oklch(0.22 0.08 200))",
    category: "Desktop",
    liveUrl: "https://rickysrc.github.io/between-spaces/",
    sourceUrl: "https://github.com/rickysrc/between-spaces",
    featured: false,
  },
  {
    id: "cex-laptops-api",
    title: "CEX Laptops API",
    description:
      "Web scraper and REST API that pulls laptops from CEX, enriches them with CPU benchmarks, and lets you filter by RAM, storage, and price.",
    techStack: ["Node.js", "Puppeteer", "Express"],
    gradient: "linear-gradient(135deg, oklch(0.32 0.1 250), oklch(0.22 0.07 280))",
    category: "API",
    sourceUrl: "https://github.com/rickysrc/cex-laptops-api",
    featured: false,
  },
]
