import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-orange-400/90 text-xs mb-4">Perspetiva diferente. Resultados reais.</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Uma perspetiva diferente para os resultados que quer alcançar
          </h1>
          <p className="mt-6 text-lg text-white/80">
            A AVESSAS identifica ineficiências com coragem, desenha e implementa soluções e gere projetos de ponta a ponta. Sem desculpas. Só resultados.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contactos" className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-3 text-white font-semibold hover:bg-orange-600 transition-colors">
              Fale connosco
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition-colors">
              Descubra como
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  )
}
