import Link from 'next/link'
import { navLinks, siteConfig } from '@/lib/portfolio-data'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-semibold text-foreground">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{siteConfig.title}</p>
            <p className="text-xs text-muted-foreground mt-4 max-w-xs">
              Building enterprise AI systems, automation workflows, and analytics platforms.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-sky transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Engineered with precision · Deployed with purpose</p>
        </div>
      </div>
    </footer>
  )
}

