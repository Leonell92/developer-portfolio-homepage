'use client'

import {
  Table2,
  Database,
  BarChart3,
  LineChart,
  PieChart,
  ArrowDown,
  Wrench,
} from 'lucide-react'
import { SectionHeader } from './section-header'
import { ScrollReveal } from './scroll-reveal'

const capabilities = [
  {
    icon: Table2,
    title: 'Excel Analytics',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10 border-emerald-400/20',
    dot: 'bg-emerald-400',
    skills: [
      'Data cleaning',
      'Pivot tables',
      'Advanced formulas',
      'Dashboards',
      'Reporting',
      'Lookup functions',
      'Conditional formatting',
    ],
  },
  {
    icon: Database,
    title: 'SQL Analysis',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10 border-sky-400/20',
    dot: 'bg-sky-400',
    skills: [
      'Query optimisation',
      'Data extraction',
      'Joins',
      'Aggregations',
      'Database reporting',
    ],
  },
  {
    icon: BarChart3,
    title: 'Python Data Analysis',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10 border-violet-400/20',
    dot: 'bg-violet-400',
    skills: [
      'Pandas',
      'NumPy',
      'Data cleaning',
      'ETL workflows',
      'Automation',
      'Statistical analysis',
    ],
  },
  {
    icon: PieChart,
    title: 'Power BI',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
    dot: 'bg-amber-400',
    skills: [
      'Interactive dashboards',
      'KPI visualisation',
      'Business intelligence',
      'Data storytelling',
      'Report building',
    ],
  },
  {
    icon: LineChart,
    title: 'Visualisation',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10 border-rose-400/20',
    dot: 'bg-rose-400',
    skills: [
      'Charts & graphs',
      'Trend analysis',
      'Comparative analysis',
      'Executive reporting',
    ],
  },
]

const workflowSteps = [
  'Raw Data',
  'Cleaning & Transformation',
  'Analysis',
  'Visualisation',
  'Business Insights',
]

const tools = [
  'Excel', 'Power BI', 'SQL', 'Python',
  'Pandas', 'NumPy', 'Matplotlib', 'MySQL', 'PostgreSQL',
]

export default function Analytics() {
  return (
    <section id="analytics" className="section-padding bg-[#0b1023] overflow-hidden">
      <div className="section-container">
        <SectionHeader
          label="Data Analysis"
          title="Turning Data Into Better Decisions"
          description="I help businesses understand their data by creating dashboards, reports, and visualizations that reveal trends and opportunities."
        />

        {/* ── Excel dashboard image ── */}
        <ScrollReveal delay={0}>
          <div className="mb-16 rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-2xl shadow-sky/5">
            <div className="px-6 pt-6 pb-4 border-b border-white/10">
              <p className="text-[11px] uppercase tracking-widest text-sky/60 mb-1">Sample Work</p>
              <h3 className="text-lg font-semibold text-[#f8fafc]">Revenue Performance Dashboard</h3>
              <p className="text-sm text-[#94a3b8] mt-1">Excel — Bike Sales Analysis</p>
            </div>
            <div className="p-4 sm:p-6">
              <img
                src="/projects/revenue-dashboard.png"
                alt="Revenue Performance Dashboard — Excel Bike Sales Analysis"
                className="w-full h-auto rounded-xl shadow-md object-contain"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* ── Capability blocks ── */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group"
                >
                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl border ${cap.bg} shrink-0`}>
                      <Icon className={`w-5 h-5 ${cap.color}`} />
                    </div>
                    <h3 className="font-semibold text-[#f8fafc] text-base">{cap.title}</h3>
                  </div>

                  {/* Skill list */}
                  <ul className="space-y-2">
                    {cap.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2.5 text-sm text-[#94a3b8]">
                        <span className={`w-1.5 h-1.5 rounded-full ${cap.dot} shrink-0 opacity-80`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}

            {/* ── Analytics Workflow (6th block) ── */}
            <div className="rounded-2xl border border-sky/20 bg-sky/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl border bg-sky/10 border-sky/20 shrink-0">
                  <ArrowDown className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="font-semibold text-[#f8fafc] text-base">Analytics Workflow</h3>
              </div>
              <ol className="space-y-0">
                {workflowSteps.map((step, i) => (
                  <li key={step}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-center">
                        <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                        {i < workflowSteps.length - 1 && (
                          <span className="w-px h-6 bg-sky/30 mt-1" />
                        )}
                      </div>
                      <span className={`text-sm py-1 ${i === 0 || i === workflowSteps.length - 1 ? 'text-sky-300 font-medium' : 'text-[#94a3b8]'}`}>
                        {step}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Tools highlight box ── */}
        <ScrollReveal delay={150}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl border bg-sky/10 border-sky/20 shrink-0">
                <Wrench className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-sky/60 mb-0.5">Toolkit</p>
                <h3 className="font-semibold text-[#f8fafc] text-base">Tools I Work With</h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-[#cbd5e1] hover:border-sky/40 hover:text-sky hover:bg-sky/5 transition-all duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
