import { useEffect, useState } from 'react'

export default function Cases() {
  const [cases, setCases] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/cases`)
        const data = await res.json()
        setCases(data)
      } catch (e) {
        setCases([])
      }
    }
    load()
  }, [])

  const has = cases && cases.length > 0

  return (
    <section id="cases" className="bg-zinc-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Resultados</h2>
          <p className="mt-3 text-white/70">Casos reais de transformação apoiada pela nossa metodologia.</p>
        </div>

        {!has && (
          <div className="mt-10 text-white/60">Brevemente: estudos de caso selecionados.</div>
        )}

        {has && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <div key={c.client} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-white/60">{c.sector}</div>
                <h3 className="mt-1 text-xl font-semibold text-orange-400">{c.client}</h3>
                <p className="mt-2 text-white/80">{c.challenge}</p>
                <p className="mt-2 text-white/80">{c.impact}</p>
                {c.metrics && c.metrics.length > 0 && (
                  <ul className="mt-3 text-sm text-white/70 list-disc list-inside">
                    {c.metrics.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
