import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon, Github01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MagicCard } from "@/components/ui/magic-card"
import { InView } from "@/components/ui/in-view"
import { TextAnimate } from "@/components/ui/text-animate"
import { projects } from "@/data/projects"
import type { Project } from "@/types/portfolio"

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewOptions={{ once: true, margin: "-50px" as never }}
    >
      <MagicCard
        className="h-full rounded-xl"
        gradientFrom="oklch(0.5 0.15 195)"
        gradientTo="oklch(0.4 0.12 220)"
        gradientColor="oklch(0.3 0.08 200 / 0.3)"
        gradientOpacity={0.15}
      >
        <div className="flex h-full flex-col md:flex-row">
          {/* Gradient visual area */}
          <div
            className="flex min-h-56 items-end rounded-t-lg p-4 md:w-2/5 md:rounded-l-lg md:rounded-tr-none"
            style={{ background: project.gradient }}
          >
            {project.category && (
              <Badge variant="secondary" className="bg-white/15 text-white backdrop-blur-sm border-white/10">
                {project.category}
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex gap-2">
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} />
                    Live
                  </a>
                </Button>
              )}
              {project.sourceUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <HugeiconsIcon icon={Github01Icon} strokeWidth={2} />
                    Source
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </MagicCard>
    </InView>
  )
}

function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
      viewOptions={{ once: true, margin: "-50px" as never }}
    >
      <MagicCard
        className="h-full rounded-xl"
        gradientFrom="oklch(0.5 0.15 195)"
        gradientTo="oklch(0.4 0.12 220)"
        gradientColor="oklch(0.3 0.08 200 / 0.3)"
        gradientOpacity={0.15}
      >
        <div className="flex h-full flex-col">
          {/* Gradient visual area */}
          <div
            className="flex min-h-36 items-end rounded-t-lg p-4 sm:min-h-40"
            style={{ background: project.gradient }}
          >
            {project.category && (
              <Badge variant="secondary" className="bg-white/15 text-white backdrop-blur-sm border-white/10 text-xs">
                {project.category}
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-lg font-semibold">
              {project.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-auto flex gap-2 pt-4">
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} />
                    Live
                  </a>
                </Button>
              )}
              {project.sourceUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <HugeiconsIcon icon={Github01Icon} strokeWidth={2} />
                    Source
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </MagicCard>
    </InView>
  )
}

export function DevProjects() {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-32 md:py-40">
      <TextAnimate
        as="h2"
        by="word"
        animation="blurInUp"
        className="text-3xl font-bold tracking-tight md:text-4xl"
      >
        Projects
      </TextAnimate>

      {/* Featured project — full width hero card */}
      {featured && (
        <div className="mt-10">
          <FeaturedProjectCard project={featured} />
        </div>
      )}

      {/* Other projects — 2-column grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {others.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
