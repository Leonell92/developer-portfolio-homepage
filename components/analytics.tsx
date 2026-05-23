'use client'

import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { SectionHeader } from './section-header'
import { ScrollReveal } from './scroll-reveal'
import { analyticsCategories } from '@/lib/portfolio-data'

export default function Analytics() {
  return (
    <section id="analytics" className="section-padding bg-[#f1f5f9] dark:bg-[#0f1729]">
      <div className="section-container">
        <SectionHeader
          label="Data Analytics & BI"
          title="Executive-Grade Analytics"
          description="Power BI dashboards, Excel modeling, and business intelligence solutions that transform raw data into actionable operational insights."
        />

        <ScrollReveal delay={0}>
          <div className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Portfolio Overview
                </p>
                <h3 className="text-xl font-semibold text-foreground">Revenue Performance</h3>
              </div>

            </div>
            <div className="w-full">
              <img 
                src="/projects/revenue-dashboard.png" 
                alt="Bike Sales Dashboard" 
                className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md mx-auto"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {analyticsCategories.map((cat, index) => (
            <ScrollReveal key={cat.title} delay={index * 70}>
              <article className="rounded-2xl bg-card border border-border p-5 hover-lift h-full shadow-sm">
                <h3 className="font-semibold text-foreground mb-1">{cat.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{cat.description}</p>
                <div className="space-y-3">
                  {cat.kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="flex items-center justify-between py-2 border-t border-border first:border-0 first:pt-0"
                    >
                      <span className="text-xs text-muted-foreground">{kpi.label}</span>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                        {kpi.value}
                        {kpi.trend === 'up' && (
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                        )}
                        {kpi.trend === 'down' && (
                          <TrendingDown className="w-3.5 h-3.5 text-emerald-500" />
                        )}
                        {kpi.trend === 'neutral' && (
                          <Minus className="w-3.5 h-3.5 text-muted-foreground" />
                        )}
                      </span>
                    </div>
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

