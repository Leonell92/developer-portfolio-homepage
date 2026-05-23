'use client'

import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { SectionHeader } from './section-header'
import { ScrollReveal } from './scroll-reveal'
import { ProjectVisual } from './project-visual'
import { projects } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const secondary = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="section-container">
        <SectionHeader
          label="Featured Work"
          title="Enterprise Systems & Platforms"
          description="Production-oriented projects spanning AI knowledge systems, IT operations, full-stack platforms, and intelligent automation — built for real operational use."
        />

        <div className="space-y-20">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} delay={100}>
              <article
                className={cn(
                  'grid lg:grid-cols-2 gap-8 lg:gap-12 items-center',
                  index % 2 === 1 && 'lg:[direction:rtl] lg:*:[direction:ltr]'
                )}
              >
                <div className="relative">
                  <ProjectVisual project={project} />
                  <div className="absolute -inset-4 bg-sky/5 rounded-2xl blur-2xl -z-10" />
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-sky mb-2">
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span className="w-1 h-1 rounded-full bg-sky shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="px-3 py-2 rounded-lg glass-surface border border-border"
                      >
                        <p className="text-sm font-semibold text-sky">{m.value}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-md bg-sky/10 text-sky border border-sky/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.demo && (
                      <Button asChild variant="default" className="bg-sky text-[#0b1023] hover:bg-sky/90">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button asChild variant="outline">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1.5" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.githubSecondary && (
                      <Button asChild variant="outline">
                        <a href={project.githubSecondary} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1.5" />
                          Backend
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {secondary.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 80}
              className={project.screenshots ? 'md:col-span-2 lg:col-span-3' : undefined}
            >
              <article
                className={cn(
                  'group h-full rounded-2xl glass-surface hover-lift overflow-hidden border border-border',
                  project.screenshots
                    ? 'grid md:grid-cols-2 md:items-center'
                    : 'flex flex-col'
                )}
              >
                {project.screenshots ? (
                  <div className="p-4 sm:p-5 md:p-6">
                    <ProjectVisual project={project} />
                  </div>
                ) : (
                  <ProjectVisual
                    project={project}
                    mockupClassName="rounded-none border-0 aspect-[16/9]"
                  />
                )}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-sky mb-1">
                    {project.subtitle}
                  </p>
                  <h3
                    className={cn(
                      'font-semibold text-foreground mb-2 group-hover:text-sky transition-colors',
                      project.screenshots ? 'text-xl md:text-2xl' : 'text-lg'
                    )}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  {project.screenshots && (
                    <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                          <span className="w-1 h-1 rounded-full bg-sky shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, project.screenshots ? 6 : 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] rounded bg-muted text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-sky font-medium"
                    >
                      View on GitHub
                      <ArrowUpRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

