'use client'

import { useEffect, useState } from 'react'
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

      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-surface text-xs font-medium text-sky border border-sky/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky" />
              </span>
              Available for enterprise AI & systems work
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.1] tracking-tight text-[#f8fafc] text-balance">
              Building Intelligent Systems, Automation Workflows &{' '}
              <span className="gradient-text">Enterprise AI Solutions</span>
            </h1>

            <p className="text-lg text-[#cbd5e1] leading-relaxed max-w-xl">
              AI systems engineer specializing in enterprise automation, Full stack intelligent RAG systems, analytics dashboards, and scalable full-stack web development.
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
                { icon: Database, label: 'RAG Pipelines' },
                { icon: Activity, label: 'Ops Automation' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-[#cbd5e1]">
                  <Icon className="w-4 h-4 text-sky" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0">
            <FloatingCard
              className="absolute -top-4 right-0 w-48 animate-float hidden sm:block"
              title="RAG Pipeline"
              value="Active"
              status="success"
            />
            <FloatingCard
              className="absolute top-32 -left-8 w-44 animate-float-slow hidden md:block"
              title="Workflows"
              value="6 running"
              status="neutral"
            />
            <FloatingCard
              className="absolute bottom-8 right-12 w-52 hidden sm:block"
              title="Analytics"
              value="24 KPIs"
              status="success"
            />

            <div className="glass-surface-strong rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-sky/10 relative aspect-[4/5] max-w-sm mx-auto lg:ml-auto">
              <Image 
                src="/hero-image.png" 
                alt="Leo Emmanuel" 
                fill 
                className="object-cover" 
                priority
              />
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

