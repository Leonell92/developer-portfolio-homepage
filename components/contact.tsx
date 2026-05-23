'use client'

import { useState } from 'react'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/lib/portfolio-data'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)
    
    const formData = new FormData(e.currentTarget)
    // Web3Forms access key
    formData.append("access_key", "de254cf4-a62e-486e-85e0-2d5e3e7232bf")
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#071739]" />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(56,189,248,0.15), transparent), radial-gradient(ellipse 50% 40% at 20% 20%, rgba(56,189,248,0.08), transparent)',
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-sky bg-sky/10 border border-sky/20 mb-6">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f8fafc] tracking-tight text-balance mb-4">
            Let&apos;s Build Intelligent Systems Together
          </h2>
          <p className="text-[#cbd5e1] text-lg max-w-2xl mx-auto">
            Ready to discuss enterprise AI, automation, or analytics projects? Reach out and let&apos;s
            architect something production-ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-surface-strong rounded-2xl p-6 md:p-8 border border-white/10 space-y-4"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <p className="text-[#f8fafc] font-medium mb-2">Message sent successfully</p>
                <p className="text-[#cbd5e1] text-sm">I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                    Something went wrong. Please try again or use the email link.
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#cbd5e1] mb-1.5 block">Name</label>
                    <Input
                      required
                      name="name"
                      placeholder="Your name"
                      className="bg-white/5 border-white/10 text-[#f8fafc] placeholder:text-[#cbd5e1]/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#cbd5e1] mb-1.5 block">Email</label>
                    <Input
                      required
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      className="bg-white/5 border-white/10 text-[#f8fafc] placeholder:text-[#cbd5e1]/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#cbd5e1] mb-1.5 block">Subject</label>
                  <Input
                    required
                    name="subject"
                    placeholder="Project inquiry"
                    className="bg-white/5 border-white/10 text-[#f8fafc] placeholder:text-[#cbd5e1]/40"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#cbd5e1] mb-1.5 block">Message</label>
                  <Textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-white/5 border-white/10 text-[#f8fafc] placeholder:text-[#cbd5e1]/40 resize-none"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-sky text-[#0b1023] hover:bg-sky/90 font-medium">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </>
            )}
          </form>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-4 rounded-xl glass-surface border border-white/10 hover:border-sky/30 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-sky/10 text-sky group-hover:bg-sky/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#cbd5e1]/60">Email</p>
                <p className="text-sm text-[#f8fafc] font-medium">{siteConfig.email}</p>
              </div>
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl glass-surface border border-white/10 hover:border-sky/30 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-sky/10 text-sky group-hover:bg-sky/20 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#cbd5e1]/60">GitHub</p>
                <p className="text-sm text-[#f8fafc] font-medium">View repositories</p>
              </div>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl glass-surface border border-white/10 hover:border-sky/30 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-sky/10 text-sky group-hover:bg-sky/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#cbd5e1]/60">LinkedIn</p>
                <p className="text-sm text-[#f8fafc] font-medium">Connect professionally</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

