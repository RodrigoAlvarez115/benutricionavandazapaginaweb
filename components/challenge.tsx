import Image from 'next/image'
import { AlertTriangle, HeartPulse, Droplets, TrendingDown } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const CARDS = [
  {
    icon: AlertTriangle,
    title: 'Somnolencia y Fatiga Operativa',
    text: 'Picos glucémicos y déficit de crononutrición en turnos de alta exigencia.',
  },
  {
    icon: HeartPulse,
    title: 'Riesgo Metabólico y Cardiovascular',
    text: 'Prevalencia de hipertensión por desadaptación alimentaria en campamento.',
  },
  {
    icon: Droplets,
    title: 'Deshidratación Celular por Altitud',
    text: 'Pérdida de alerta y refresco cognitivo provocada por el clima árido de la Puna.',
  },
]

export function Challenge() {
  return (
    <section id="desafio" className="be-watermark bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="El desafío operacional"
          title="El desafío operacional"
          subtitle="En los yacimientos de litio y minería en la Puna salteña, las jornadas extremas a más de 3.800 msnm, los turnos rotativos (14x14 / 7x7) y las bajas temperaturas demandan un rendimiento biológico superior."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Cards */}
          <div className="grid gap-5">
            {CARDS.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={i * 90}
                className="group flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech transition-colors group-hover:bg-tech group-hover:text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-1.5 text-pretty leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Image */}
          <Reveal
            delay={120}
            className="relative min-h-[280px] overflow-hidden rounded-2xl border border-border lg:h-full"
          >
            <Image
              src="/images/challenge-camp.png"
              alt="Campamento minero en la Puna a gran altitud"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Highlight block */}
        <Reveal
          delay={80}
          className="mt-10 overflow-hidden rounded-2xl bg-navy"
        >
          <div className="flex flex-col gap-5 p-8 md:flex-row md:items-center md:gap-8 md:p-10">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-tech/20 text-celeste">
              <TrendingDown className="size-7" aria-hidden="true" />
            </div>
            <p className="text-balance text-xl font-semibold leading-snug text-white md:text-2xl">
              Un colaborador con fatiga biológica en altura reduce su
              rendimiento operacional hasta un{' '}
              <span className="text-celeste">66%</span> e incrementa el riesgo
              de accidentes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
