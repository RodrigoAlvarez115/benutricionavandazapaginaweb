import Image from 'next/image'
import { Dumbbell, HeartPulse, Droplets, Gauge, Network } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const INDICATORS = [
  {
    icon: Dumbbell,
    title: 'Masa Muscular (SMM)',
    text: 'Aptitud física en labor exigente.',
  },
  {
    icon: HeartPulse,
    title: 'Grasa Visceral',
    text: 'Indicador de riesgo cardiovascular.',
  },
  {
    icon: Droplets,
    title: 'Agua Corporal (ECW/TBW)',
    text: 'Deshidratación en altitud.',
  },
  {
    icon: Gauge,
    title: 'Puntuación InBody',
    text: 'Métrica evolutiva de salud.',
  },
]

export function Technology() {
  return (
    <section id="tecnologia" className="be-watermark bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tecnología"
          title="Diferencial Tecnológico y Multidisciplinario"
          subtitle="Precisión Clínica en 15 a 45 Segundos"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: copy + indicators */}
          <div>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Mediante Bioimpedancia Multifrecuecia Octopolar de Grado Médico,
              evaluamos la composición corporal real sin estimaciones
              subjetivas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {INDICATORS.map(({ icon: Icon, title, text }, i) => (
                <Reveal
                  key={title}
                  delay={i * 80}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-tech">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold text-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <Reveal
            delay={120}
            className="relative order-first h-72 overflow-hidden rounded-2xl border border-border sm:h-96 lg:order-last lg:h-[520px]"
          >
            <Image
              src="/images/inbody-270.png"
              alt="Analizador de composición corporal InBody 270 de grado médico"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Multidisciplinary block */}
        <Reveal className="mt-12 overflow-hidden rounded-2xl bg-navy">
          <div className="flex flex-col gap-5 p-8 md:flex-row md:items-center md:gap-8 md:p-10">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-tech/20 text-celeste">
              <Network className="size-7" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Red Multidisciplinaria 360°
              </h3>
              <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-blue-100/90">
                Sinergia con Medicina del Trabajo, Bioquímica, Odontología
                Laboral y Psicología Organizacional.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
