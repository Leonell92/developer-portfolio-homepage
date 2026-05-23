'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { ProjectScreenshot } from '@/lib/portfolio-data'

interface ProjectScreenshotsProps {
  screenshots: ProjectScreenshot[]
  className?: string
}

export function ProjectScreenshots({ screenshots, className }: ProjectScreenshotsProps) {
  const [active, setActive] = useState(0)
  const current = screenshots[active]

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <div
        className={cn(
          'relative rounded-xl overflow-hidden border border-border/60 bg-[#eef2f7] shadow-xl shadow-sky/5',
          screenshots.length === 1 ? 'aspect-[16/9]' : 'aspect-[2/1] min-h-[200px]'
        )}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          unoptimized
          className="object-contain object-top p-1 transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#eef2f7]/95 to-transparent pointer-events-none" />
        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-medium bg-black/50 text-[#f8fafc] border border-white/10 backdrop-blur-sm">
          {current.label}
        </span>
      </div>

      {screenshots.length > 1 && (
        <div className="flex gap-2">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                'relative flex-1 aspect-video rounded-lg overflow-hidden border-2 bg-[#eef2f7] transition-all',
                active === index
                  ? 'border-sky ring-2 ring-sky/20'
                  : 'border-border opacity-70 hover:opacity-100 hover:border-sky/40'
              )}
              aria-label={`Show ${shot.label} screenshot`}
              aria-pressed={active === index}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                unoptimized
                className="object-contain object-top p-0.5"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

