'use client'

import { Terminal, Workflow, Zap } from 'lucide-react'
import { SectionHeader } from './section-header'
import { ScrollReveal } from './scroll-reveal'
import { automationCapabilities } from '@/lib/portfolio-data'

export default function Automation() {
  return (
    <section id="automation" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#071739]/50 dark:bg-[#071739]/30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] bg-sky/10 pointer-events-none"
      />

      <div className="section-container relative">
        <SectionHeader
          label="AI & Automation"
          title="Operational Systems, Automated"
          description="Python automation, workflow orchestration, and desktop tooling that eliminate manual processes across real enterprise environments."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <ScrollReveal className="lg:col-span-2" delay={0}>
            <div className="rounded-2xl border border-sky/20 bg-[#0b1023] p-6 font-mono text-sm shadow-2xl shadow-sky/5 overflow-hidden">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <Terminal className="w-4 h-4 text-sky" />
                <span className="text-[#cbd5e1]/70">automation-engine</span>
              </div>
              <pre className="text-[#cbd5e1]/90 whitespace-pre-wrap leading-relaxed overflow-x-auto text-[11px] sm:text-sm">
{`┌─────────────────────────────────┐
│  Trigger  →  Transform  →  Act  │
└─────────────────────────────────┘
         │              │
    ┌────▼────┐    ┌────▼────┐
    │ Python  │    │ Monitor │
    │ Scripts │    │ & Alert │
    └─────────┘    └─────────┘`}
              </pre>
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                <Zap className="w-3.5 h-3.5" />
                6 workflows active · 0 failures
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {automationCapabilities.map((cap, index) => (
              <ScrollReveal key={cap.title} delay={index * 60}>
                <article className="group rounded-xl glass-surface border border-border hover:border-sky/30 hover-lift p-5 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Workflow className="w-4 h-4 text-sky" />
                    <h3 className="font-semibold text-foreground text-sm">{cap.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cap.description}
                  </p>
                  <code className="block text-[11px] font-mono text-sky/90 bg-sky/5 border border-sky/10 rounded-lg px-3 py-2 overflow-x-auto">
                    {cap.command}
                  </code>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

