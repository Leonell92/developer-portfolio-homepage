import { SectionHeader } from './section-header'
import { ScrollReveal } from './scroll-reveal'
import { journeyMilestones } from '@/lib/portfolio-data'

export default function Journey() {
  return (
    <section id="journey" className="section-padding bg-muted/20">
      <div className="section-container">
        <SectionHeader
          label="Engineering Journey"
          title="Technical Evolution"
          description="A progression from foundations to enterprise AI systems — driven by real projects, operational challenges, and continuous specialization."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-sky/50 via-sky/20 to-transparent" />

          <div className="space-y-10">
            {journeyMilestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 80}>
                <article
                  className={`relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 ${
                    index % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'
                  }`}
                >
                  <div className="hidden md:block" />
                  <div className="md:text-left">
                    <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-sky border-4 border-background shadow-lg shadow-sky/30" />
                    <span className="inline-block text-xs font-semibold text-sky mb-2 tracking-widest">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {milestone.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {milestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] rounded-md bg-sky/10 text-sky border border-sky/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

