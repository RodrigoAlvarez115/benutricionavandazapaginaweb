'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { ACCESS_URL, NAV_ITEMS } from '@/lib/site-config'
import { useAudience } from '@/components/audience-selector'

const INITIAL_NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'QuiÃ©nes somos', href: '#quienes-somos' },
  { label: 'Contacto', href: '#contacto' },
] as const

const PATIENT_NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'AtenciÃ³n nutricional', href: '#atencion-nutricional' },
  { label: 'CÃ³mo trabajamos', href: '#como-trabajamos' },
  { label: 'Nuestro equipo', href: '#nuestro-equipo' },
  { label: 'Acceso pacientes', href: '#acceso-pacientes' },
  { label: 'Contacto', href: '#contacto' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { audience } = useAudience()
  const navItems = audience === null
    ? INITIAL_NAV_ITEMS
    : audience === 'patient'
      ? PATIENT_NAV_ITEMS
      : NAV_ITEMS
  const showAppointmentCta = audience !== null

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (audience === null) {
    return null
  }

  function handleHomeClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    window.location.assign('/')
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-slate-200 bg-white transition-[background-color,box-shadow] duration-300 ease-out',
        scrolled && 'bg-white/95 shadow-md backdrop-blur-sm',
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="relative mx-auto grid min-h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 lg:px-8"
      >
        <a
          href="/"
          onClick={handleHomeClick}
          className="absolute left-1/2 flex -translate-x-1/2 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech lg:static lg:translate-x-0"
          aria-label="BE Nutrición Avanzada — Inicio"
        >
          <Logo priority className="[&>img]:h-20 [&>img]:w-20" />
        </a>

        <div key={audience ?? 'initial'} className="hidden items-center justify-center gap-2 lg:flex xl:gap-3 2xl:gap-5">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href === '#inicio' ? '/' : item.href}
              onClick={item.href === '#inicio' ? handleHomeClick : undefined}
              style={{ animationDelay: `${index * 75}ms` }}
              className="be-header-link-enter whitespace-nowrap rounded-md px-1 py-1.5 text-[10px] font-semibold uppercase tracking-[0.05em] text-navy transition-colors hover:text-tech xl:text-xs"
            >
              {item.label}
            </a>
          ))}
        </div>

        {showAppointmentCta ? (
          <a
            href={ACCESS_URL}
            style={{ animationDelay: `${navItems.length * 75}ms` }}
            className="be-header-link-enter hidden items-center gap-1 rounded-md border border-navy/30 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-navy transition-colors hover:border-tech hover:bg-tech hover:text-white lg:inline-flex"
          >
            Solicitar turno
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="absolute right-4 inline-flex items-center justify-center rounded-md p-2 text-navy transition-colors hover:bg-slate-100 lg:hidden sm:right-6"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>

        <div className="hidden">
          <a
            href="#inicio"
            className="flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech"
            aria-label="BE Nutrición Avanzada — Inicio"
          >
            <Logo priority className="[&>img]:h-20 sm:[&>img]:h-24" />
          </a>
        </div>
      </nav>

      <div id="mobile-menu" className={cn('lg:hidden', open ? 'be-mobile-menu-enter block' : 'hidden')}>
        <div className="mx-auto max-w-7xl border-t border-slate-200 bg-white px-4 pb-6 pt-2 sm:px-6">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={item.href} style={{ animationDelay: `${index * 65}ms` }} className="be-header-link-enter">
                <a
                  href={item.href === '#inicio' ? '/' : item.href}
                  onClick={item.href === '#inicio' ? handleHomeClick : () => setOpen(false)}
                  className="block border-b border-slate-200 py-3 text-base font-semibold uppercase tracking-[0.06em] text-navy transition-colors hover:text-tech"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {showAppointmentCta ? (
            <a
              href={ACCESS_URL}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-tech px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              Solicitar turno
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </header>
  )
}
