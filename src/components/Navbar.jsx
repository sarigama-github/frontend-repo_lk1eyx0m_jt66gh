import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#cases', label: 'Resultados' },
    { href: '#blog', label: 'Insights' },
    { href: '#contactos', label: 'Contactos' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-white">
            <span className="text-orange-500">AV</span>ESSAS
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-orange-400 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contactos" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium">
              Fale connosco
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm hover:text-orange-400">
                {item.label}
              </a>
            ))}
            <a href="#contactos" onClick={() => setOpen(false)} className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium">
              Fale connosco
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
