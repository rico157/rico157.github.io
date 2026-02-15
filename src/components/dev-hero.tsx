import { HugeiconsIcon } from "@hugeicons/react"
import { Github01Icon, Linkedin01Icon, Mail01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { TextAnimate } from "@/components/ui/text-animate"
import { TextShimmer } from "@/components/ui/text-shimmer"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "motion/react"

export function DevHero() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6">
      {/* Spotlight hidden on mobile for performance */}
      {!prefersReducedMotion && (
        <Spotlight
          className="hidden md:block -top-20 left-60"
          fill="oklch(0.6 0.15 195)"
        />
      )}

      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-3xl space-y-6">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground"
          >
            Hi, I'm Ricky
          </motion.p>

          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            className="text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-8xl lg:text-9xl"
          >
            I build things
          </TextAnimate>

          <TextShimmer
            as="span"
            duration={3}
            className="text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-8xl lg:text-9xl [--base-color:var(--color-primary)] [--base-gradient-color:var(--color-foreground)] dark:[--base-color:var(--color-primary)] dark:[--base-gradient-color:var(--color-foreground)]"
          >
            for the web.
          </TextShimmer>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-lg text-lg text-muted-foreground"
          >
            Code, design, and a lot of coffee.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center"
          >
            <Button size="lg" className="min-h-11 min-w-[140px]" asChild>
              <a href="#projects">View my work</a>
            </Button>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="min-h-11 min-w-11" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <HugeiconsIcon icon={Github01Icon} strokeWidth={2} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="min-h-11 min-w-11" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <HugeiconsIcon icon={Linkedin01Icon} strokeWidth={2} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="min-h-11 min-w-11" asChild>
                <a href="mailto:hello@example.com" aria-label="Email">
                  <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
