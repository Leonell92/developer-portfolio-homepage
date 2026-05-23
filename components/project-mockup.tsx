import { cn } from '@/lib/utils'

type MockupVariant = 'ai' | 'enterprise' | 'fullstack' | 'analytics' | 'desktop'

interface ProjectMockupProps {
  variant: MockupVariant
  className?: string
}

const variantBg: Record<MockupVariant, string> = {
  ai: 'bg-gradient-to-br from-[#071739] via-[#0b1023] to-[#0f2744]',
  enterprise: 'bg-gradient-to-br from-[#0b1023] via-[#111827] to-[#1e293b]',
  fullstack: 'bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0b1023]',
  analytics: 'bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0b1023]',
  desktop: 'bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#071739]',
}

export function ProjectMockup({ variant, className }: ProjectMockupProps) {
  return (
    <div
      className={cn(
        'relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border/60 shadow-2xl shadow-sky/5',
        className
      )}
    >
      <div className={cn('absolute inset-0', variantBg[variant])} />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex-1 h-5 rounded-md bg-white/5 border border-white/10" />
        </div>

        {variant === 'ai' && <AiMockup />}
        {variant === 'enterprise' && <EnterpriseMockup />}
        {variant === 'fullstack' && <FullstackMockup />}
        {variant === 'analytics' && <AnalyticsMockup />}
        {variant === 'desktop' && <DesktopMockup />}
      </div>
    </div>
  )
}

function AiMockup() {
  return (
    <div className="flex gap-3 flex-1 min-h-0">
      <div className="w-1/4 rounded-lg bg-white/5 border border-white/10 p-2 space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-2 rounded bg-sky/20 w-full" />
        ))}
      </div>
      <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="h-6 flex-1 rounded bg-sky/30" />
          <div className="h-6 w-16 rounded bg-white/10" />
        </div>
        <div className="flex-1 rounded bg-gradient-to-b from-sky/10 to-transparent border border-sky/20 p-2">
          <div className="h-2 w-3/4 rounded bg-sky/40 mb-2" />
          <div className="h-2 w-1/2 rounded bg-white/20" />
        </div>
      </div>
    </div>
  )
}

function EnterpriseMockup() {
  return (
    <div className="flex-1 grid grid-cols-3 gap-2 min-h-0">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-2">
          <div className="h-2 w-8 rounded bg-sky/30 mb-2" />
          <div className="h-6 rounded bg-white/10" />
        </div>
      ))}
      <div className="col-span-3 rounded-lg bg-white/5 border border-white/10 p-2 flex-1">
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-1.5 flex-1 rounded bg-sky/20" />
          ))}
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-2 rounded bg-white/10 mb-1.5 w-full" />
        ))}
      </div>
    </div>
  )
}

function FullstackMockup() {
  return (
    <div className="flex-1 grid grid-cols-2 gap-2 min-h-0">
      <div className="rounded-lg bg-white/5 border border-white/10 p-2 space-y-1.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-2 rounded bg-white/15 w-full" />
        ))}
      </div>
      <div className="rounded-lg bg-white/5 border border-sky/20 p-2">
        <div className="h-2 w-12 rounded bg-sky/40 mb-2" />
        <div className="h-8 rounded bg-gradient-to-r from-sky/20 to-transparent" />
      </div>
    </div>
  )
}

function AnalyticsMockup() {
  return (
    <div className="flex-1 grid grid-cols-4 gap-2 min-h-0">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-1.5">
          <div className="h-1.5 w-6 rounded bg-emerald-400/40 mb-1" />
          <div className="h-4 rounded bg-white/10" />
        </div>
      ))}
      <div className="col-span-4 rounded-lg bg-white/5 border border-white/10 p-2 flex items-end gap-1 h-16">
        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-sky/60 to-sky/20"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function DesktopMockup() {
  return (
    <div className="flex-1 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
      <div className="flex border-b border-white/10">
        {['Tab 1', 'Tab 2', '+'].map((t, i) => (
          <div
            key={t}
            className={cn(
              'px-3 py-1.5 text-[10px] border-r border-white/10',
              i === 0 ? 'bg-sky/20 text-sky' : 'text-white/40'
            )}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="p-3 space-y-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-white/10" />
            <div className="h-2 flex-1 rounded bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  )
}



