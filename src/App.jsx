import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold text-lg tracking-tight">Thai Massage Budapest</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
            <a href="/test" className="hover:text-emerald-700">System Test</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="services"><Services /></div>
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
