'use client'

import { Building2, Stethoscope } from 'lucide-react'
import { createContext, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export type Audience = 'patient' | 'company' | null

type AudienceContextValue = {
  audience: Audience
  setAudience: (audience: Audience) => void
}

const AudienceContext = createContext<AudienceContextValue | null>(null)

export function useAudience() {
  const context = useContext(AudienceContext)

  if (!context) {
    throw new Error('useAudience must be used within AudienceProvider')
  }

  return context
}

type AudienceSelectorProps = {
  children: React.ReactNode
}

const OPTIONS = [
  {
    id: 'patient' as const,
    title: 'SOY PACIENTE',
    description: 'Quiero conocer la atención nutricional.',
    icon: Stethoscope,
  },
  {
    id: 'company' as const,
    title: 'SOY EMPRESA',
    description: 'Quiero conocer las soluciones para organizaciones.',
    icon: Building2,
  },
]

export function AudienceProvider({ children }: AudienceSelectorProps) {
  const [audience, setAudience] = useState<Audience>(null)

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      <div data-audience={audience ?? undefined}>{children}</div>
    </AudienceContext.Provider>
  )
}

export function AudienceSelector() {
  const { audience, setAudience } = useAudience()
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    if (audience === null) return

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.scrollingElement?.scrollTo({ top: 0, behavior: 'auto' })
        window.scrollTo({ top: 0, behavior: 'auto' })
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [audience])

  function selectAudience(nextAudience: Exclude<Audience, null>) {
    if (isLeaving) return

    setIsLeaving(true)
    document.scrollingElement?.scrollTo({ top: 0, behavior: 'auto' })
    window.scrollTo({ top: 0, behavior: 'auto' })
    window.setTimeout(() => setAudience(nextAudience), 300)
  }

  if (audience !== null) {
    return null
  }

  return (
    <section
      id="inicio"
      aria-labelledby="audience-selector-title"
      className={cn(
        'flex min-h-dvh items-center border-b border-border bg-secondary py-12 transition-all duration-300 ease-out md:py-16',
        isLeaving && 'pointer-events-none -translate-y-3 opacity-0',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Image
              src="/images/logo-bena.png"
              alt="BE Nutrición Avanzada"
              width={260}
              height={260}
              priority
              className="h-28 w-auto object-contain sm:h-32"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tech">
              Atención nutricional y bienestar
            </p>
            <h1
              id="audience-selector-title"
              className="mt-3 text-balance text-3xl font-bold text-navy md:text-4xl"
            >
              ¿Cómo podemos acompañarte?
            </h1>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Elegí la experiencia que mejor se adapta a vos.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
            {OPTIONS.map(({ id, title, description, icon: Icon }) => {
              const selected = audience === id

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => selectAudience(id)}
                  disabled={isLeaving}
                  aria-pressed={selected}
                  className={cn(
                    'group flex min-h-40 items-start gap-5 rounded-xl border bg-card p-6 text-left shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech hover:-translate-y-0.5 hover:border-tech hover:shadow-md',
                    selected ? 'border-tech ring-2 ring-tech/20' : 'border-border',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech transition-colors group-hover:bg-navy group-hover:text-white',
                      selected && 'bg-navy text-white',
                    )}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="text-lg font-bold tracking-wide text-navy">
                      {title}
                    </span>
                    <span className="text-pretty leading-relaxed text-muted-foreground">
                      {description}
                    </span>
                    {selected ? (
                      <span className="text-sm font-semibold text-tech">Experiencia seleccionada</span>
                    ) : null}
                  </span>
                </button>
              )
            })}
          </div>
      </div>
    </section>
  )
}
