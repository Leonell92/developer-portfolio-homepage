import { ScrollReveal } from './scroll-reveal'

interface SectionHeaderProps {
  label: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <ScrollReveal className={`mb-16 md:mb-20 max-w-3xl ${alignClass}`}>
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase text-sky bg-sky/10 border border-sky/20 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse-glow" />
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4">
        {title}
      </h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>
    </ScrollReveal>
  )
}
