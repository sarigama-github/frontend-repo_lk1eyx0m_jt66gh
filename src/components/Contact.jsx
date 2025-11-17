import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '', subscribed: false })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.status === 'ok' || data.status === 'queued') {
        setStatus({ ok: true, msg: 'Obrigado. Entraremos em contacto em breve.' })
        setForm({ name: '', company: '', email: '', message: '', subscribed: false })
      } else {
        setStatus({ ok: false, msg: 'Não foi possível enviar. Tente novamente.' })
      }
    } catch (e) {
      setStatus({ ok: false, msg: 'Falha de rede. Tente novamente.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contactos" className="bg-zinc-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Contactos</h2>
          <p className="mt-4 text-white/80">Endereço: Avenida Carlos Bacelar, nº 968, Edifício Saza, Salas 3A e 4A, 4760-103, Vila Nova de Famalicão</p>
          <p className="mt-2 text-white/80">Telefone: +351 910 724 954</p>
          <p className="mt-2 text-white/80">E-mail: <a href="mailto:estamoson@avessas.com" className="text-orange-300">estamoson@avessas.com</a></p>
          <div className="mt-6 text-sm text-white/60">Deseja receber notícias e atualizações da AVESSAS? Assinale a opção no formulário.</div>
        </div>

        <form onSubmit={submit} className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
          <div>
            <label className="block text-sm mb-1">Nome</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm mb-1">Empresa</label>
            <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm mb-1">E-mail</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm mb-1">Mensagem</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" name="subscribed" checked={form.subscribed} onChange={handleChange} className="rounded bg-black/60 border-white/20" />
            Desejo receber notícias e atualizações da AVESSAS
          </label>
          <div className="pt-2">
            <button disabled={loading} className="w-full rounded-md bg-orange-500 px-5 py-3 font-semibold hover:bg-orange-600 disabled:opacity-50">
              {loading ? 'A enviar…' : 'Fale connosco'}
            </button>
          </div>
          {status && (
            <div className={`${status.ok ? 'text-emerald-400' : 'text-red-400'}`}>{status.msg}</div>
          )}
        </form>
      </div>
    </section>
  )
}
