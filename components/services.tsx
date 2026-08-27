import {
  ScanLine,
  ShieldPlus,
  Crown,
  GraduationCap,
  UtensilsCrossed,
  Leaf,
} from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  {
    icon: ScanLine,
    title: 'Be-Diagnostic',
    text: 'Evaluación biofísica con informe individual confidencial y Reporte Gerencial Anónimo para RRHH.',
    tag: 'KPIS RRHH',
  },
  {
    icon: ShieldPlus,
    title: 'Be-Occupational',
    text: 'Prevención de patologías profesionales, síndrome metabólico e hipertensión en conjunto con Medicina Laboral.',
    tag: 'SALUD OCUPACIONAL',
  },
  {
    icon: Crown,
    title: 'Be-Exclusive',
    text: 'Coaching personalizado para Ejecutivos y C-Levels enfocado en energía, cortisol y viajes corporativos.',
    tag: 'ALTA PERFORMANCE',
  },
  {
    icon: GraduationCap,
    title: 'Be-Workshops',
    text: 'Talleres dinámicos: Nutrición para el Enfoque Mental, Crononutrición en Turnos Rotativos y Estrés.',
    tag: 'CAPACITACIONES',
  },
  {
    icon: UtensilsCrossed,
    title: 'Be-Entornos',
    text: 'Consultoría de menús para comedores corporativos y servicios de catering minero en campamento.',
    tag: 'CATERING MINERO',
  },
  {
    icon: Leaf,
    title: 'Be-Impact',
    text: 'Programas de nutrición comunitaria en áreas de influencia operativa alimentando el pilar Social ESG.',
    tag: 'SOSTENIBILIDAD ESG',
  },
]

export function Services() {
  return (
    <section id="servicios" className="be-watermark bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Servicios"
          title="Soluciones corporativas"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text, tag }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 90}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span
                className="absolute inset-x-0 top-0 h-1 bg-tech"
                aria-hidden="true"
              />
              <div className="flex size-12 items-center justify-center rounded-lg bg-secondary text-tech transition-colors group-hover:bg-navy group-hover:text-white">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {text}
              </p>
              <span className="mt-5 inline-flex w-fit items-center rounded-full bg-tech/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-tech">
                {tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
