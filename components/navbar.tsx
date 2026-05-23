'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Github, Linkedin, Sun, Moon, FileDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { navLinks, siteConfig } from '@/lib/portfolio-data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass-surface shadow-lg shadow-black/5 border-b border-border/80 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="section-container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col gap-0.5">
          <span className="text-base font-semibold tracking-tight text-foreground group-hover:text-sky transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
            {siteConfig.title}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative px-3 py-2 text-sm font-medium transition-colors rounded-lg',
                activeSection === link.href.replace('#', '')
                  ? 'text-sky'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
              {activeSection === link.href.replace('#', '') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-sky hover:bg-sky/10 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-sky hover:bg-sky/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden glass-surface border-t border-border mx-4 mt-2 rounded-xl p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                activeSection === link.href.replace('#', '')
                  ? 'text-sky bg-sky/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t border-border mt-3">
            <a href={siteConfig.github} className="p-2 rounded-lg hover:bg-muted" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={siteConfig.linkedin} className="p-2 rounded-lg hover:bg-muted" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-muted"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

          </div>
        </div>
      )}
    </header>
  )
}


