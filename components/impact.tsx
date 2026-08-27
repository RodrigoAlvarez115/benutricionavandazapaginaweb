import { TrendingUp, ArrowUpRight, Leaf } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const METRICS = [
  {
    icon: TrendingUp,
    value: '-30%',
    title: 'Reducción de Ausentismo',
    text: 'Disminución de licencias por descompensaciones metabólicas y fatiga crónica.',
  },
  {
    icon: ArrowUpRight,
    value: '+20%',
    title: 'Productividad Efectiva',
    text: 'Mitigación del presentismo y optimización del estado de alerta en tareas críticas.',
  },
  {
    icon: Leaf,
    value: 'ESG',
    title: 'Pilar Social (S) Cumplido',
    text: 'Métricas cuantitativas de salud para auditorías internacionales de sostenibilidad.',
  },
]

export function Impact() {
  return (
    <section id="impacto" className="be-watermark bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Impacto"
          title="Retorno de Inversión (ROI) y Sostenibilidad"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5 lg:items-stretch">
          {/* ROI block */}
          <Reveal className="flex flex-col justify-between rounded-2xl bg-navy p-8 md:p-10 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-celeste">
              Retorno estimado por inversión
            </p>
            <div className="mt-6">
              <p className="text-5xl font-bold leading-none text-white md:text-6xl">
                $2.70{' '}
                <span className="text-celeste">a</span> $3.27
              </p>
              <p className="mt-2 text-lg font-semibold text-blue-100">USD</p>
            </div>
            <p className="mt-6 text-pretty leading-relaxed text-blue-100/90">
              Por cada $1.00 USD invertido en programas nutricionales de
              precisión.
            </p>
            <p className="mt-8 border-t border-white/15 pt-5 text-sm text-blue-100/70">
              Fuente: Harvard Business Review &amp; RAND Corporation
            </p>
          </Reveal>

          {/* Metrics */}
          <div className="grid gap-5 lg:col-span-3">
            {METRICS.map(({ icon: Icon, value, title, text }, i) => (
              <Reveal
                key={title}
                delay={i * 90}
                className="flex items-start gap-6 rounded-2xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="flex min-w-[5.5rem] flex-col items-center">
                  <span className="text-3xl font-bold text-navy md:text-4xl">
                    {value}
                  </span>
                  <Icon className="mt-2 size-5 text-tech" aria-hidden="true" />
                </div>
                <div className="border-l border-border pl-6">
                  <h3 className="text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-1.5 text-pretty leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
