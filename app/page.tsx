import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Expertise from '@/components/expertise'
import Projects from '@/components/projects'
import Analytics from '@/components/analytics'
import Journey from '@/components/journey'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Analytics />
      <Journey />
      <Contact />
      <Footer />
    </main>
  )
}
