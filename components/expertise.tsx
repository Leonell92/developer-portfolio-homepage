'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain, Layers, Terminal, BarChart3, Building2, PenLine,
  Cpu, Network, Zap, TrendingUp, Shield, FileText,
  Activity, ArrowUpRight, Sparkles, CircleDot, Database, Server, Code2, LineChart
} from 'lucide-react'
import { expertiseItems } from '@/lib/portfolio-data'

/* ─────────────────────────────────────────────────────────────
   Tiny animated number counter
───────────────────────────────────────────────────────────── */
function CountUp({ target, suffix = '', valueKey }: { target: number; suffix?: string; valueKey?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  
  useEffect(() => {
    let start = 0
    const duration = 1000
    const step = (timestamp: number, startTime: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame((ts) => step(ts, startTime))
    }
    requestAnimationFrame((ts) => step(ts, ts))
  }, [target, valueKey])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─────────────────────────────────────────────────────────────
   Floating particles background
───────────────────────────────────────────────────────────── */
function Particles() {
  const [dots, setDots] = useState<{id: number, x: number, y: number, size: number, duration: number, delay: number}[]>([])
  
  useEffect(() => {
    setDots(Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 4,
    })))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full bg-sky-400/20"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Dynamic Visuals for Featured Card
───────────────────────────────────────────────────────────── */
function FeaturedVisual({ title }: { title: string }) {
  const [activeNode, setActiveNode] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActiveNode((p) => (p + 1) % 5), 1200)
    return () => clearInterval(id)
  }, [])

  if (title === 'AI Engineering') {
    const nodes = [
      { cx: 60, cy: 55, label: 'NLP' },
      { cx: 175, cy: 30, label: 'LLM' },
      { cx: 260, cy: 70, label: 'Vector' },
      { cx: 175, cy: 120, label: 'Embed' },
      { cx: 80, cy: 135, label: 'Search' },
    ]
    const links = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [1, 3]]
    return (
      <svg viewBox="0 0 320 160" className="w-full h-full">
        {links.map(([a, b], i) => (
          <motion.line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy} stroke="#38BDF8" strokeWidth="0.8" animate={{ opacity: (activeNode === a || activeNode === b) ? 0.7 : 0.15 }} transition={{ duration: 0.4 }} />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <motion.circle cx={n.cx} cy={n.cy} r={i === activeNode ? 9 : 6} fill={i === activeNode ? '#38BDF8' : '#1e3a5f'} stroke={i === activeNode ? '#7dd3fc' : '#38BDF8'} strokeWidth={i === activeNode ? 2 : 1} animate={{ r: i === activeNode ? 9 : 6 }} transition={{ duration: 0.3 }} />
            <text x={n.cx} y={n.cy + 20} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="system-ui">{n.label}</text>
          </g>
        ))}
        <text x="160" y="155" textAnchor="middle" fill="rgba(56,189,248,0.4)" fontSize="9" fontFamily="system-ui">Semantic Search · Knowledge Systems · LLM Synthesis</text>
      </svg>
    )
  }

  if (title === 'Full Stack Systems') {
    return (
      <svg viewBox="0 0 320 160" className="w-full h-full">
        <rect x="40" y="40" width="60" height="80" rx="4" fill="#1e3a5f" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
        <text x="70" y="83" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontFamily="system-ui" fontWeight="bold">Client</text>
        
        <rect x="130" y="20" width="60" height="120" rx="4" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1" opacity="0.8" />
        <text x="160" y="83" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="system-ui" fontWeight="bold">API Gateway</text>

        <rect x="220" y="30" width="60" height="40" rx="4" fill="#1e3a5f" stroke="#10b981" strokeWidth="1" opacity="0.6" />
        <text x="250" y="53" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="system-ui">Auth</text>

        <rect x="220" y="90" width="60" height="40" rx="4" fill="#1e3a5f" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
        <text x="250" y="113" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="system-ui">Database</text>

        <motion.path d="M100 80 L130 80" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" animate={{ strokeDashoffset: [8, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
        <motion.path d="M190 50 L220 50" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" animate={{ strokeDashoffset: [8, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
        <motion.path d="M190 110 L220 110" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" animate={{ strokeDashoffset: [8, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
      </svg>
    )
  }

  if (title === 'Python Automation') {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-[240px] bg-[#0b1023] rounded-lg border border-emerald-500/30 overflow-hidden shadow-lg">
          <div className="h-6 bg-[#1e293b] flex items-center px-2 gap-1.5 border-b border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-rose-500/80" />
            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>
          <div className="p-3 font-mono text-[10px] text-emerald-400/80 space-y-1.5">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>$ python orchestrator.py</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-emerald-300">&gt; Starting nightly ETL pipeline...</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>[1/3] Extracting data from source</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>[2/3] Applying transformations</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="text-sky-400">✓ Pipeline completed in 1.2s</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 2.2, repeat: Infinity, duration: 1 }} className="w-2 h-3 bg-emerald-400" />
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Data Analytics') {
    return (
      <svg viewBox="0 0 320 160" className="w-full h-full">
        <line x1="40" y1="130" x2="280" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="40" y1="30" x2="40" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        
        <motion.path d="M40 100 Q80 110, 120 70 T200 60 T280 30" fill="none" stroke="#f59e0b" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
        
        <motion.path d="M40 130 L40 100 Q80 110, 120 70 T200 60 T280 30 L280 130 Z" fill="url(#grad)" opacity="0.2"
          initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1, duration: 0.5 }} />
          
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {[60, 100, 140, 180, 220, 260].map((x, i) => (
          <motion.rect key={i} x={x-6} y={130} width="12" height="0" fill="#38bdf8" opacity="0.6" rx="2"
            animate={{ y: 130 - (i*15 + 20), height: i*15 + 20 }} transition={{ delay: i * 0.1, duration: 0.5 }} />
        ))}
      </svg>
    )
  }

  if (title === 'Business Software') {
    return (
      <div className="w-full h-full flex gap-3 items-center justify-center p-4">
        {[
          { color: 'bg-rose-500', title: 'To Do', items: 3 },
          { color: 'bg-amber-500', title: 'In Progress', items: 2 },
          { color: 'bg-emerald-500', title: 'Done', items: 4 }
        ].map((col, i) => (
          <motion.div key={col.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="w-20 h-28 bg-white/5 rounded-lg border border-white/10 p-2 flex flex-col gap-2">
            <div className="flex items-center gap-1.5 mb-1">
              <div className={`w-1.5 h-1.5 rounded-full ${col.color}`} />
              <div className="text-[8px] font-semibold text-white/70 uppercase">{col.title}</div>
            </div>
            {Array.from({ length: col.items }).map((_, j) => (
              <motion.div key={j} className="h-4 bg-white/10 rounded border border-white/5" animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 2, delay: i+j, repeat: Infinity }} />
            ))}
          </motion.div>
        ))}
      </div>
    )
  }

  // Technical Writing
  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <motion.div className="w-32 h-40 bg-white/10 rounded-lg border border-white/20 p-4 flex flex-col gap-3 relative overflow-hidden"
        initial={{ rotate: -5 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
        <div className="absolute top-0 right-0 w-8 h-8 bg-sky-500/20 rounded-bl-lg" />
        <div className="h-2 w-3/4 bg-sky-400/60 rounded" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-full bg-white/20 rounded" />
          <div className="h-1.5 w-5/6 bg-white/20 rounded" />
          <div className="h-1.5 w-full bg-white/20 rounded" />
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-full bg-white/20 rounded" />
          <div className="h-1.5 w-4/6 bg-white/20 rounded" />
        </div>
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   AI Engineering — featured card with mini dashboard
───────────────────────────────────────────────────────────── */
const cardAccents: Record<string, { from: string; to: string; iconBg: string; iconColor: string; dot: string; glow: string }> = {
  'AI Engineering':      { from: 'from-sky-400/20', to: 'to-blue-400/10',     iconBg: 'from-sky-400/20 to-violet-400/10', iconColor: 'text-sky-500', dot: 'bg-sky-400', glow: 'from-sky-400/40 via-cyan-300/10 to-violet-400/20' },
  'Full Stack Systems':  { from: 'from-violet-400/20', to: 'to-blue-400/10',   iconBg: 'from-violet-400/15 to-transparent', iconColor: 'text-violet-500', dot: 'bg-violet-400', glow: 'from-violet-400/40 via-fuchsia-300/10 to-blue-400/20' },
  'Python Automation':   { from: 'from-emerald-400/20', to: 'to-teal-400/10',  iconBg: 'from-emerald-400/15 to-transparent', iconColor: 'text-emerald-500', dot: 'bg-emerald-400', glow: 'from-emerald-400/40 via-teal-300/10 to-cyan-400/20' },
  'Data Analytics':      { from: 'from-amber-400/20', to: 'to-orange-400/10',  iconBg: 'from-amber-400/15 to-transparent', iconColor: 'text-amber-500', dot: 'bg-amber-400', glow: 'from-amber-400/40 via-yellow-300/10 to-orange-400/20' },
  'Business Software':   { from: 'from-cyan-400/20', to: 'to-sky-400/10',      iconBg: 'from-cyan-400/15 to-transparent', iconColor: 'text-cyan-500', dot: 'bg-cyan-400', glow: 'from-cyan-400/40 via-sky-300/10 to-blue-400/20' },
  'Technical Writing':   { from: 'from-rose-400/20', to: 'to-pink-400/10',     iconBg: 'from-rose-400/15 to-transparent', iconColor: 'text-rose-500', dot: 'bg-rose-400', glow: 'from-rose-400/40 via-pink-300/10 to-purple-400/20' },
}

function FeaturedAICard({ item }: { item: typeof expertiseItems[0] }) {
  const Icon = item.icon
  const accent = cardAccents[item.title] || cardAccents['AI Engineering']
  
  // Use a stable key to force re-animation when item changes
  const valueKey = item.title

  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full rounded-[28px] overflow-hidden"
      style={{ minHeight: 420 }}
    >
      {/* glow halo */}
      <div className={`absolute -inset-[1px] rounded-[28px] bg-gradient-to-br ${accent.glow} opacity-60 transition-opacity duration-500 blur-[2px]`} />

      <div className="relative h-full bg-white/75 backdrop-blur-2xl border border-white/60 rounded-[28px] shadow-[0_8px_40px_rgba(56,189,248,0.10)] p-8 flex flex-col">

        {/* header row */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${accent.iconBg} border border-white/60 shrink-0`}>
            <Icon className={`w-8 h-8 ${accent.iconColor}`} />
            <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${accent.dot} border-2 border-white animate-pulse`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-2xl font-bold text-[#071739]">{item.title}</h3>
              <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest rounded-full bg-slate-800 text-white shadow-sm">Featured</span>
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-md">
              {item.description}
            </p>
          </div>
        </div>

        {/* mini dashboard */}
        <div className="rounded-2xl bg-gradient-to-br from-[#071739] to-[#0d1f3c] p-5 mb-6 relative overflow-hidden flex-1">
          {/* blueprint grid */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* dynamic visual area */}
          <div className="relative w-full h-[180px] rounded-xl bg-black/20 border border-white/5 mb-4 overflow-hidden">
             <FeaturedVisual title={item.title} />
          </div>
        </div>

        {/* feature tags */}
        <div className="grid grid-cols-2 gap-2">
          {(item.features || ['Production Ready', 'Scalable Architecture', 'High Performance', 'Robust Security']).map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-[#64748B]">
              <div className={`w-1.5 h-1.5 rounded-full ${accent.dot} shrink-0`} />
              {f}
            </div>
          ))}
        </div>

        {/* metrics */}
        <div className="flex gap-6 mt-5 pt-4 border-t border-slate-100">
          {item.metrics.map((m) => {
            const numericValue = parseInt(m.value.replace(/[^0-9]/g, ''), 10) || 0
            const suffix = m.value.replace(/[0-9]/g, '')
            return (
              <div key={m.label}>
                <p className="text-2xl font-bold text-[#071739]">
                  <CountUp target={numericValue} suffix={suffix} valueKey={valueKey} />
                </p>
                <p className="text-[10px] text-[#64748B] uppercase tracking-wide">{m.label}</p>
              </div>
            )
          })}
          <div className="ml-auto flex items-end">
            <span className={`flex items-center gap-1 text-xs ${accent.iconColor} font-medium`}>
              <Activity className="w-3.5 h-3.5" /> Active
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Supporting capability card
───────────────────────────────────────────────────────────── */
function CapCard({ item, onClick, isActive }: { item: typeof expertiseItems[0]; onClick: () => void; isActive: boolean }) {
  const Icon = item.icon
  const accent = cardAccents[item.title] ?? cardAccents['Business Software']

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative rounded-[24px] overflow-hidden text-left w-full h-full min-h-[200px] transition-all duration-300 ${isActive ? 'ring-2 ring-sky-400 ring-offset-4 ring-offset-[#F8FAFC]' : ''}`}
    >
      {/* hover glow halo */}
      <div className={`absolute -inset-[1px] rounded-[24px] bg-gradient-to-br ${accent.from} ${accent.to} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1.5px]`} />

      <div className={`relative h-full backdrop-blur-2xl border rounded-[24px] p-6 flex flex-col transition-all duration-400 ${isActive ? 'bg-white/90 shadow-[0_12px_40px_rgba(56,189,248,0.15)] border-sky-200' : 'bg-slate-900/[0.03] border-slate-300/50 shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.4)] hover:bg-slate-900/[0.06] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] group-hover:border-slate-300/80'}`}>
        {/* icon + title */}
        <div className="flex items-start justify-between mb-3">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${accent.iconBg} border border-white/60 ${accent.iconColor} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-5 h-5" />
          </div>
          <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-sky-500 translate-x-0.5 -translate-y-0.5' : 'text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
        </div>

        <h3 className="text-base font-bold text-[#071739] mb-1.5">{item.title}</h3>
        <p className="text-sm text-[#64748B] leading-relaxed flex-1 line-clamp-3">{item.description}</p>
      </div>
    </motion.button>
  )
}



/* ─────────────────────────────────────────────────────────────
   Main section
───────────────────────────────────────────────────────────── */
export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  // The big card gets the active item
  const activeItem = expertiseItems[activeIndex]
  
  // The small cards get the REST of the items
  const otherItems = expertiseItems.filter((_, idx) => idx !== activeIndex)

  return (
    <section
      id="expertise"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EEF2F7 40%, #F0F7FF 100%)' }}
    >
      {/* top soft edge from dark section above */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/40 to-transparent pointer-events-none z-20" />
      {/* bottom soft edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/40 to-transparent pointer-events-none z-20" />

      {/* ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-sky-300/10 blur-[100px]" />
        <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] rounded-full bg-violet-300/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-200/10 blur-[80px]" />
      </div>

      {/* blueprint grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* noise */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      <Particles />

      <div className="relative z-10 section-padding section-container">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 text-xs font-semibold uppercase tracking-[0.18em] mb-6">
            <Sparkles className="w-3 h-3" />
            Interactive Portfolio
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#071739] leading-tight mb-5 relative inline-block">
            What I Can&nbsp;
            <span className="relative">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #38bdf8 40%, #818cf8)' }}
              >
                Help You Build
              </span>
              {/* animated underline glow */}
              <motion.div
                className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8)' }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full blur-sm"
                style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8)' }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.7 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </h2>

          <p className="text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Explore the services I offer, the technologies I use, and some of the projects I've built.
          </p>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">

          {/* Featured AI card — spans 8 cols on lg, full width on mobile */}
          <div className="col-span-1 md:col-span-2 lg:col-span-7 xl:col-span-8 w-full">
            <AnimatePresence mode="wait">
              <FeaturedAICard key={activeItem.title} item={activeItem} />
            </AnimatePresence>
          </div>

          {/* Right column — two stacked small cards */}
          <div className="col-span-1 md:col-span-1 lg:col-span-5 xl:col-span-4 flex flex-col gap-5 w-full">
            {otherItems.slice(0, 2).map((item) => {
              const originalIndex = expertiseItems.findIndex(i => i.title === item.title)
              return (
                <div key={item.title} className="flex-1">
                  <CapCard 
                    item={item} 
                    onClick={() => setActiveIndex(originalIndex)} 
                    isActive={false} 
                  />
                </div>
              )
            })}
          </div>

          {/* Bottom row — 3 equal cards */}
          {otherItems.slice(2).map((item) => {
            const originalIndex = expertiseItems.findIndex(i => i.title === item.title)
            return (
              <div key={item.title} className="md:col-span-1 lg:col-span-4">
                <CapCard 
                  item={item} 
                  onClick={() => setActiveIndex(originalIndex)} 
                  isActive={false} 
                />
              </div>
            )
          })}
        </div>



        {/* operational status bar */}
        <div className="mt-8 flex items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-400 tracking-wide">All systems operational</span>
          <span className="text-xs text-slate-300">·</span>
          <span className="text-xs text-slate-400 tracking-wide">Production-ready infrastructure</span>
          <span className="text-xs text-slate-300">·</span>
          <span className="text-xs text-slate-400 tracking-wide">Built for real use</span>
        </div>
      </div>
    </section>
  )
}
