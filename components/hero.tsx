'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, Mail, Activity, Database, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-[#0b1023] dark:bg-[#0b1023]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56,189,248,0.18), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(7,23,57,0.8), transparent)',
        }}
      />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay opacity-30" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-surface text-xs font-medium text-sky border border-sky/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky" />
              </span>
              Open to high-impact AI &amp; systems contracts
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.1] tracking-tight text-[#f8fafc] text-balance">
              Enterprise Systems &amp;{' '}
              <span className="gradient-text">Technical Operations</span>
            </h1>

            <p className="text-lg text-[#cbd5e1] leading-relaxed max-w-xl">
              I design and operate enterprise systems that actually work — from internal tooling and helpdesk platforms to automation workflows, analytics dashboards, and full-stack web applications.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Button asChild size="lg" className="bg-sky text-[#0b1023] hover:bg-sky/90 font-medium">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#cbd5e1]/20 text-[#f8fafc] hover:bg-white/5 bg-transparent"
              >
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-1.5" />
                  Contact Me
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-[#cbd5e1] hover:text-[#f8fafc] hover:bg-white/5"
              >
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-1.5" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { icon: Cpu, label: 'AI Systems' },
                { icon: Database, label: 'Systems Integration' },
                { icon: Activity, label: 'Ops Automation' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-[#cbd5e1]">
                  <Icon className="w-4 h-4 text-sky" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
            {/* Tech badge */}
            <div className="absolute -top-4 right-0 z-10 hidden sm:block">
              <FloatingCard
                className="w-48 animate-float"
                title="AI Systems"
                value="Active"
                status="success"
              />
            </div>

            {/* Profile image card */}
            <div className="glass-surface-strong rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-sky/10 relative w-full max-w-sm aspect-[3/4]">
              <Image
                src="/hero-image.png"
                alt="Leo Emmanuel"
                fill
                className="object-cover object-top"
                priority
              />
              {/* subtle gradient overlay at the bottom for polish */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1023]/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingCard({
  className,
  title,
  value,
  status,
}: {
  className?: string
  title: string
  value: string
  status: 'success' | 'neutral'
}) {
  return (
    <div
      className={cn(
        'glass-surface rounded-lg p-3 border border-white/10 shadow-lg',
        className
      )}
    >
      <p className="text-[10px] uppercase tracking-wider text-[#cbd5e1]/60 mb-1">{title}</p>
      <p className="text-sm font-medium text-[#f8fafc]">{value}</p>
      <span
        className={cn(
          'inline-block mt-2 w-1.5 h-1.5 rounded-full',
          status === 'success' ? 'bg-emerald-400' : 'bg-sky'
        )}
      />
    </div>
  )
}
