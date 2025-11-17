export default function Services() {
  const services = [
    {
      title: 'Diagnóstico',
      desc: 'Radiografia objetiva às ineficiências que travam os seus resultados. Sem filtros, com coragem.',
    },
    {
      title: 'Desenho de Soluções',
      desc: 'Arquiteturas claras e práticas para transformar processos, equipas e tecnologia.',
    },
    {
      title: 'Implementação de Soluções',
      desc: 'Da estratégia à execução. Entregamos no terreno, com prazos e métricas.',
    },
    {
      title: 'Gestão de Projetos',
      desc: 'Governance, planeamento e acompanhamento rigoroso para cumprir objetivos.',
    },
    {
      title: 'Marketing Digital',
      desc: 'Geração de leads, automação e conteúdo que converte — alinhado ao negócio.',
    },
  ]

  return (
    <section id="servicos" className="relative bg-zinc-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Serviços</h2>
          <p className="mt-3 text-white/70">Quatro pilares + marketing digital para acelerar resultados.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition-colors">
              <h3 className="text-xl font-semibold text-orange-400">{s.title}</h3>
              <p className="mt-2 text-white/80">{s.desc}</p>
              <a href="#contactos" className="mt-4 inline-flex text-sm text-orange-300 hover:text-orange-200">Ler mais →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
