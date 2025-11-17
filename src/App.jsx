import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Cases from './components/Cases'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <Cases />
        <Blog />
        <Contact />
        <footer className="bg-black text-white/60 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} AVESSAS — Perspetiva diferente. Resultados reais.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-300">LinkedIn</a>
              <a href="mailto:estamoson@avessas.com" className="hover:text-orange-300">E-mail</a>
              <a href="tel:+351910724954" className="hover:text-orange-300">+351 910 724 954</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
