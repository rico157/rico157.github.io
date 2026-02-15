import { Badge } from "@/components/ui/badge"
import { MagicCard } from "@/components/ui/magic-card"
import { Marquee } from "@/components/ui/marquee"
import { InView } from "@/components/ui/in-view"
import { TextAnimate } from "@/components/ui/text-animate"
import { TextShimmer } from "@/components/ui/text-shimmer"
import { skillCategories, iconSlugs } from "@/data/skills"

const categoryStyles: Record<string, string> = {
  "Frontend": "bg-primary/5 border-primary/10",
  "Backend & AWS": "bg-muted/60 border-border",
  "Testing": "bg-accent/50 border-accent-foreground/5",
  "Tooling": "bg-primary/5 border-primary/10",
  "Mobile": "bg-muted/60 border-border",
}

const AI_CATEGORY = "AI-Assisted Dev"

export function DevSkills() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-32 md:py-40">
        <TextAnimate
          as="h2"
          by="word"
          animation="blurInUp"
          className="text-3xl font-bold tracking-tight md:text-4xl"
        >
          Skills
        </TextAnimate>

        {/* Marquee of tech logos */}
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewOptions={{ once: true, margin: "-50px" as never }}
        >
          <div className="mt-8 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:45s] md:[--duration:30s]">
              {iconSlugs.map((slug) => (
                <div
                  key={slug}
                  className="flex items-center justify-center rounded-lg border bg-background/80 px-4 py-2.5"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${slug}`}
                    alt={slug}
                    className="size-6 dark:invert"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </InView>

        {/* Skill group cards */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewOptions={{ once: true, margin: "-50px" as never }}
        >
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skillCategories.map((category) => {
              if (category.name === AI_CATEGORY) {
                return (
                  <MagicCard
                    key={category.name}
                    className="rounded-lg"
                    gradientFrom="#a855f7"
                    gradientTo="#6366f1"
                    gradientColor="rgba(139, 92, 246, 0.08)"
                    gradientOpacity={0.15}
                    gradientSize={250}
                  >
                    <div className="rounded-[inherit] bg-violet-500/[0.04] p-4 dark:bg-violet-500/[0.08]">
                      <TextShimmer
                        as="h3"
                        duration={3}
                        spread={1.5}
                        className="mb-3 text-xs font-semibold uppercase tracking-widest [--base-color:#a855f7] [--base-gradient-color:#7c3aed] dark:[--base-color:#a78bfa] dark:[--base-gradient-color:#e9d5ff]"
                      >
                        {category.name}
                      </TextShimmer>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="outline"
                            className="border-violet-300/30 bg-violet-500/[0.06] dark:border-violet-400/20 dark:bg-violet-500/[0.1]"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </MagicCard>
                )
              }
              return (
                <div
                  key={category.name}
                  className={`rounded-lg border p-4 ${categoryStyles[category.name] ?? "bg-muted/40 border-border"}`}
                >
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name} variant="outline">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </InView>
      </div>
    </section>
  )
}
