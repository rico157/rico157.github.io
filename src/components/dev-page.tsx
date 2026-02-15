import { motion, useScroll, useSpring } from "motion/react"
import { BackButton } from "@/components/back-button"
import { DevHero } from "@/components/dev-hero"
import { DevProjects } from "@/components/dev-projects"
import { DevSkills } from "@/components/dev-skills"

interface DevPageProps {
  onNavigateHome: () => void
}

export function DevPage({ onNavigateHome }: DevPageProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50 })

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 right-0 left-0 z-50 h-0.5 origin-left bg-primary"
        style={{ scaleX }}
      />

      <BackButton onClick={onNavigateHome} />
      <DevHero />
      <DevProjects />
      <DevSkills />
      <footer className="py-12 text-center text-sm text-muted-foreground">
        Built with <s>React, TypeScript & Tailwind CSS</s> Claude Code
      </footer>
    </div>
  )
}
