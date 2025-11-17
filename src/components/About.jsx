export default function About() {
  return (
    <section id="sobre" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Sobre Nós</h2>
          <p className="mt-4 text-white/80">
            Nascida em Vila Nova de Famalicão, a AVESSAS é uma consultoria diferente. Acreditamos que a perspetiva é a alma do sucesso.
            Olhamos os problemas ao contrário — de dentro para fora — para encontrar a causa real e agir onde conta.
          </p>
          <p className="mt-3 text-white/70">
            A nossa é às AVESSAS: direta, sem rodeios, com impacto. Se procura resultados, não desculpas, está no sítio certo.
          </p>
          <div className="mt-6 text-sm text-white/60">Localização: Vila Nova de Famalicão</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-orange-600/10 to-orange-300/10 p-6">
          <ul className="space-y-3 text-white/80">
            <li>• Foco radical em resultados</li>
            <li>• Coragem para desafiar o status quo</li>
            <li>• Execução do início ao fim</li>
            <li>• Tecnologia e pessoas no centro</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
