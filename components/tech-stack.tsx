import { SectionHeader } from './section-header'
import { ScrollReveal } from './scroll-reveal'
import { techStackGroups } from '@/lib/portfolio-data'

export default function TechStack() {
  return (
    <section id="stack" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Technical Stack"
          title="Technology Ecosystem"
          description="A curated stack spanning AI orchestration, backend systems, and data analytics — selected for reliability and scale."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {techStackGroups.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 50}>
              <article className="rounded-2xl glass-surface border border-border p-5 hover-lift h-full">
                <h3 className="text-sm font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:bg-sky/10 hover:text-sky hover:border-sky/20 border border-transparent transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

