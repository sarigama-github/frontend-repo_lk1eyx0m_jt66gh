import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Section = ({ id, title, children }) => (
  <section id={id} className="relative py-24 px-6 sm:px-8 lg:px-14 border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">{title}</h2>
      <div className="text-slate-300 leading-relaxed">{children}</div>
    </div>
  </section>
)

const Navbar = () => (
  <div className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-dark-900/70 bg-dark-900/80 border-b border-white/10">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-14 h-16">
      <a href="#home" className="text-white font-semibold tracking-wide">AVESSAS</a>
      <nav className="hidden md:flex items-center gap-8 text-slate-300">
        <a href="#services" className="hover:text-white">Serviços</a>
        <a href="#about" className="hover:text-white">Sobre Nós</a>
        <a href="#cases" className="hover:text-white">Resultados</a>
        <a href="#blog" className="hover:text-white">Insights</a>
        <a href="#contact" className="hover:text-white">Contactos</a>
      </nav>
    </div>
  </div>
)

const Hero = () => (
  <section id="home" className="relative min-h-[92vh] grid place-items-center bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
    <div className="absolute inset-0 opacity-60">
      <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" />
    </div>

    <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-14 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
          Perspetiva diferente. <span className="text-brand-500 drop-shadow">Resultados reais.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Estratégia, criatividade e tecnologia para acelerar crescimento. Somos AVESSAS.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="px-5 py-3 rounded-md bg-brand-500 text-white shadow-glow hover:bg-brand-600 transition">Fale connosco</a>
          <a href="#services" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">Ver serviços</a>
        </div>
      </motion.div>
    </div>

    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[110%] h-48 bg-brand-500/20 blur-3xl rounded-full" />
  </section>
)

const Services = () => (
  <Section id="services" title="Serviços">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        ['Estratégia & Pesquisa', 'Insights acionáveis para decisões seguras.'],
        ['Branding & Conteúdo', 'Narrativas cativantes com propósito.'],
        ['Produto & Experiência', 'UX/UI e prototipagem com foco em valor.'],
        ['Growth & Performance', 'Aquisição, retenção e receita previsível.'],
      ].map(([title, desc]) => (
        <div key={title} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-500/40 transition">
          <h3 className="text-white font-medium mb-2">{title}</h3>
          <p className="text-slate-300 text-sm">{desc}</p>
        </div>
      ))}
    </div>
  </Section>
)

const About = () => (
  <Section id="about" title="Sobre Nós">
    <p>
      Operamos na interseção entre dados, criatividade e tecnologia. Ajudamos marcas a romper padrões e conquistar vantagem competitiva.
    </p>
  </Section>
)

const Cases = () => {
  const [items, setItems] = React.useState([])
  React.useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}/cases?limit=6`
    fetch(url)
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]))
  }, [])
  return (
    <Section id="cases" title="Resultados">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((c) => (
          <div key={c._id || c.title} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-medium">{c.title}</h3>
            <p className="text-slate-300 text-sm mt-1">{c.summary}</p>
          </div>
        ))}
        {items.length === 0 && (
          <div className="col-span-full text-slate-400">Sem casos registados ainda. Envie-nos uma mensagem para partilhar o seu desafio.</div>
        )}
      </div>
    </Section>
  )
}

const Blog = () => {
  const [posts, setPosts] = React.useState([])
  React.useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}/blog?limit=6`
    fetch(url)
      .then(r => r.json())
      .then(setPosts)
      .catch(() => setPosts([]))
  }, [])
  return (
    <Section id="blog" title="Insights">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <div key={p._id || p.title} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-medium">{p.title}</h3>
            <p className="text-slate-300 text-sm mt-1">{p.excerpt}</p>
          </div>
        ))}
        {posts.length === 0 && (
          <div className="col-span-full text-slate-400">Sem artigos publicados ainda. Em breve, novidades no nosso blog.</div>
        )}
      </div>
    </Section>
  )
}

const Contact = () => {
  const [loading, setLoading] = React.useState(false)
  const [done, setDone] = React.useState(false)
  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      company: form.get('company'),
      email: form.get('email'),
      message: form.get('message'),
      subscribe: !!form.get('subscribe'),
    }
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    try {
      await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (payload.subscribe) {
        await fetch(`${base}/newsletter`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: payload.email })
        })
      }
      setDone(true)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Section id="contact" title="Contactos">
      {done ? (
        <div className="p-6 rounded-xl bg-brand-500/10 border border-brand-500/30 text-white">Obrigado! Entraremos em contacto em breve.</div>
      ) : (
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Nome" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-400" />
          <input name="company" placeholder="Empresa" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-400" />
          <input type="email" name="email" required placeholder="Email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-400 md:col-span-2" />
          <textarea name="message" required placeholder="Mensagem" rows="5" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-400 md:col-span-2" />
          <label className="flex items-center gap-2 text-slate-300 md:col-span-2">
            <input type="checkbox" name="subscribe" className="accent-brand-500" /> Quero receber novidades
          </label>
          <div className="md:col-span-2 flex gap-3">
            <button disabled={loading} className="px-5 py-3 rounded-md bg-brand-500 text-white hover:bg-brand-600 transition disabled:opacity-50">{loading ? 'A enviar…' : 'Enviar mensagem'}</button>
            <a href="mailto:hello@avessas.com" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">hello@avessas.com</a>
          </div>
        </form>
      )}
    </Section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-300">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Cases />
      <Blog />
      <Contact />
      <footer className="border-t border-white/10 py-10 px-6 sm:px-8 lg:px-14 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AVESSAS. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">X</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
