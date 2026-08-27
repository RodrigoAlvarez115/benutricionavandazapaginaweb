import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    n: 1,
    title: 'Diagnóstico Inicial',
    text: 'Reunión técnica con RRHH y Salud Ocupacional para relevamiento de necesidades y menús.',
  },
  {
    n: 2,
    title: 'Prueba Piloto',
    text: 'Jornada InBody Check-Up en muestra reducida (20-30 pers.) y reporte ejecutivo inicial.',
  },
  {
    n: 3,
    title: 'Despliegue Anual',
    text: 'Implementación del programa híbrido presencial y remoto para toda la nómina.',
  },
  {
    n: 4,
    title: 'Seguimiento & KPIs',
    text: 'Re-evaluación periódica, informe de impacto de salud y medición de Retorno de Inversión (ROI).',
  },
]

export function Methodology() {
  return (
    <section id="metodologia" className="be-watermark bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Metodología"
          title="Metodología de Implementación"
          subtitle="Implementación Mínimamente Invasiva diseñada para no interrumpir la operatividad en planta o campamento."
        />

        <div className="mt-16">
          {/* Desktop: horizontal */}
          <ol className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 120} className="relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <span
                    className="absolute left-[calc(50%+2.5rem)] top-7 h-0.5 w-[calc(100%-5rem)] bg-border"
                    aria-hidden="true"
                  />
                )}
                <div className="flex flex-col items-center text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-navy text-xl font-bold text-white shadow-md ring-4 ring-secondary">
                    {step.n}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Mobile / tablet: vertical */}
          <ol className="relative flex flex-col gap-8 lg:hidden">
            <span
              className="absolute bottom-4 left-7 top-4 w-0.5 bg-border"
              aria-hidden="true"
            />
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 90}
                className="relative flex gap-5"
              >
                <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-navy text-xl font-bold text-white shadow-md ring-4 ring-secondary">
                  {step.n}
                </span>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-pretty leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
