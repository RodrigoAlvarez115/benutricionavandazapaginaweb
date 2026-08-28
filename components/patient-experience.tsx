'use client'

import Image from 'next/image'
import { ArrowRight, CalendarDays, HeartHandshake, Mail, MapPin, Phone, UserRound } from 'lucide-react'
import { useAudience } from '@/components/audience-selector'
import { Challenge } from '@/components/challenge'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Impact } from '@/components/impact'
import { Methodology } from '@/components/methodology'
import { Services } from '@/components/services'
import { Solution } from '@/components/solution'
import { Technology } from '@/components/technology'
import { WhoWeAre } from '@/components/who-we-are'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'
import { ACCESS_URL, CONTACT } from '@/lib/site-config'

function PatientHero() {
  return (
    <section id="experiencia-pacientes" className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src="/images/foto-consultorio.jpg"
          alt="Consultorio de BE Nutrición Avanzada"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-celeste">
            Atención nutricional
          </p>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
            Nutrición pensada para acompañarte
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-blue-100/90 lg:text-xl">
            Un espacio de atención nutricional personalizada, con una mirada cercana e integral sobre tu bienestar.
          </p>
          <a
            href={ACCESS_URL}
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-tech px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-celeste hover:text-navy"
          >
            SOLICITAR TURNO
            <CalendarDays className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

function NutritionalCare() {
  return (
    <section id="atencion-nutricional" className="be-watermark bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <SectionHeader
          eyebrow="Atención nutricional"
          title="Un acompañamiento personalizado"
          subtitle="Cada persona tiene necesidades, ritmos y objetivos propios. Por eso, brindamos una atención centrada en escuchar, orientar y acompañar de manera profesional."
        />
        <Reveal className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="flex size-14 items-center justify-center rounded-xl bg-secondary text-tech">
            <HeartHandshake className="size-7" aria-hidden="true" />
          </div>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            La atención se adapta a cada proceso para construir hábitos que puedan sostenerse en el tiempo, con información clara y un enfoque de bienestar integral.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function HowWeWork() {
  return (
    <section id="como-trabajamos" className="be-watermark bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cómo trabajamos"
          title="Acompañamiento durante tu proceso"
          subtitle="Trabajamos desde una mirada profesional, cercana y orientada a que puedas incorporar herramientas útiles para tu día a día."
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {[
            ['Escuchamos', 'Conocemos tus necesidades y lo que buscás para orientar el acompañamiento.'],
            ['Orientamos', 'Compartimos información clara para ayudarte a tomar decisiones con mayor confianza.'],
            ['Acompañamos', 'Sostenemos el proceso con una mirada integral y personalizada.'],
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 90} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PatientTeam() {
  return (
    <section id="nuestro-equipo" className="be-watermark bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Nuestro equipo" title="Profesionales que te acompañan" />
        <Reveal className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative aspect-[3/2] overflow-hidden bg-white">
            <Image src="/images/foto-licenciadas.jpg" alt="Licenciadas de BE Nutrición Avanzada" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
          </div>
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
            <div>
              <h3 className="text-xl font-bold text-navy">Lic. Silvana Rivas (M.P. 558)</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Licenciada en Nutrición, Universidad Nacional de Salta. Cuenta con experiencia en evaluación y seguimiento de composición corporal.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">Lic. Cecilia Inés Belton (M.P. 475)</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Licenciada en Nutrición, Facultad de Ciencias Médicas, Universidad Nacional de Córdoba. Cuenta con formación y experiencia en el abordaje clínico nutricional.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PatientAccess() {
  return (
    <section id="acceso-pacientes" className="bg-navy py-20 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <div className="flex size-12 items-center justify-center rounded-lg bg-tech/20 text-celeste"><UserRound className="size-6" aria-hidden="true" /></div>
          <h2 className="mt-5 text-3xl font-bold text-white">Acceso pacientes</h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-blue-100/90">Accedé a la plataforma de pacientes para acompañar la organización de tus consultas.</p>
        </div>
        <a href={ACCESS_URL} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-tech px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-celeste hover:text-navy">
          ACCESO PACIENTES
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

function PatientContact() {
  return (
    <section id="contacto" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contacto" title="Estamos para acompañarte" subtitle="Comunicate con BE Nutrición Avanzada para realizar tu consulta o coordinar una cita." />
        <Reveal className="mx-auto mt-14 max-w-4xl rounded-2xl border border-border bg-card p-7 shadow-sm">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech"><MapPin className="size-5" aria-hidden="true" /></span><div><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">Ubicación</dt><dd className="mt-1 leading-relaxed text-navy">{CONTACT.base}</dd></div></div>
            <div className="flex gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech"><Mail className="size-5" aria-hidden="true" /></span><div><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">Email</dt><dd className="mt-1"><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`} target="_blank" rel="noopener noreferrer" className="text-navy underline-offset-4 hover:text-tech hover:underline">{CONTACT.email}</a></dd></div></div>
            <div className="flex gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech"><Phone className="size-5" aria-hidden="true" /></span><div><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">Contacto</dt><dd className="mt-1 flex flex-col gap-0.5">{CONTACT.phones.map((phone) => <a key={phone} href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-navy underline-offset-4 hover:text-tech hover:underline">{phone}</a>)}</dd></div></div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

function CorporateExperience() {
  return <><Hero /><Challenge /><Solution /><Services /><Technology /><Impact /><Methodology /><WhoWeAre /><Contact /></>
}

function InitialHero() {
  return (
    <section id="bienvenida" className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src="/images/foto-consultorio.jpg"
          alt="Espacio de atención de BE Nutrición Avanzada"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-celeste">
            BE Nutrición Avanzada
          </p>
          <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
            Nutrición para vivir y trabajar mejor
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-blue-100/90 lg:text-xl">
            Acompañamos el bienestar con atención nutricional personalizada y propuestas pensadas para cada realidad.
          </p>
          <p className="mt-5 text-pretty leading-relaxed text-blue-100/80">
            Elegí una de las opciones anteriores para conocer la experiencia que tenemos preparada para vos.
          </p>
        </div>
      </div>
    </section>
  )
}

function InitialWhoWeAre() {
  return (
    <section id="quienes-somos" className="be-watermark bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Quiénes somos"
          title="Un equipo para acompañar tu bienestar"
          subtitle="En BE Nutrición Avanzada combinamos conocimiento profesional, cercanía y herramientas prácticas para acompañar a personas y organizaciones."
        />

        <Reveal className="mx-auto mt-14 grid max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:grid-cols-2">
          <div className="relative min-h-72">
            <Image
              src="/images/foto-licenciadas.jpg"
              alt="Equipo profesional de BE Nutrición Avanzada"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <h3 className="text-2xl font-bold text-navy">Atención con mirada integral</h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Creemos que una buena nutrición se construye a partir de escuchar, comprender cada contexto y ofrecer orientación clara que pueda sostenerse en el tiempo.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Conocé la propuesta que mejor se adapta a vos seleccionando la experiencia para pacientes o empresas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function InitialContact() {
  return (
    <section id="contacto" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contacto"
          title="Estamos para escucharte"
          subtitle="Escribinos o comunicate por WhatsApp para realizar una consulta y conocer cómo podemos acompañarte."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl rounded-2xl border border-border bg-card p-7 shadow-sm">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech"><MapPin className="size-5" aria-hidden="true" /></span><div><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">Ubicación</dt><dd className="mt-1 leading-relaxed text-navy">{CONTACT.base}</dd></div></div>
            <div className="flex gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech"><Mail className="size-5" aria-hidden="true" /></span><div><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">Email</dt><dd className="mt-1"><a href={`mailto:${CONTACT.email}`} className="text-navy underline-offset-4 hover:text-tech hover:underline">{CONTACT.email}</a></dd></div></div>
            <div className="flex gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech"><Phone className="size-5" aria-hidden="true" /></span><div><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">WhatsApp</dt><dd className="mt-1 flex flex-col gap-0.5">{CONTACT.phones.map((phone) => <a key={phone} href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-navy underline-offset-4 hover:text-tech hover:underline">{phone}</a>)}</dd></div></div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

function InitialExperience() {
  return null
}

export function ExperienceContent() {
  const { audience } = useAudience()

  if (audience === 'patient') {
    return <div className="be-experience-enter"><PatientHero /><NutritionalCare /><HowWeWork /><PatientTeam /><PatientAccess /><PatientContact /></div>
  }

  if (audience === null) {
    return <InitialExperience />
  }

  return <div className="be-experience-enter"><CorporateExperience /></div>
}
