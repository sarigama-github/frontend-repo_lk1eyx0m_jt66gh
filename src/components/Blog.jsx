import { useEffect, useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/blog`)
        const data = await res.json()
        setPosts(data)
      } catch {
        setPosts([])
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Insights</h2>
          <p className="mt-3 text-white/70">Artigos recentes da equipa AVESSAS.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">{p.published_at ? new Date(p.published_at).toLocaleDateString() : '—'}</div>
              <h3 className="mt-1 text-xl font-semibold text-orange-400">{p.title}</h3>
              <p className="mt-2 text-white/80">{p.summary}</p>
              <a href="#contactos" className="mt-3 inline-flex text-sm text-orange-300 hover:text-orange-200">Ler mais →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
