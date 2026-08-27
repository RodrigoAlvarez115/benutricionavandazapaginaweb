'use client'

import Image from 'next/image'
import { CONTACT, NAV_ITEMS, NUTREANDO_URL } from '@/lib/site-config'
import { useAudience } from '@/components/audience-selector'

export function Footer() {
  const { audience } = useAudience()

  if (audience === null) {
    return null
  }

  function handleHomeClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    window.location.assign('/')
  }

  return (
    <footer className="bg-navy-dark text-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-bena.jpg"
              alt="BE Nutrición Avanzada"
              width={240}
              height={240}
              className="h-24 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-blue-100/80">
              BE NUTRICIÓN AVANZADA — Ciencia, Tecnología y Datos aplicados a la
              Salud Corporativa.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-celeste">Navegación</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href === '#inicio' ? '/' : item.href}
                    onClick={item.href === '#inicio' ? handleHomeClick : undefined}
                    className="text-sm text-blue-100/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-celeste">Contacto</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li className="text-blue-100/80">{CONTACT.email}</li>
              <li>
                <a href={NUTREANDO_URL} target="_blank" rel="noopener noreferrer" className="text-blue-100/80 transition-colors hover:text-white">
                  Plataforma pacientes
                </a>
              </li>
              <li className="leading-relaxed text-blue-100/80">{CONTACT.base}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-blue-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BE Nutrición Avanzada. Todos los derechos reservados.</p>
          <p>{CONTACT.base}</p>
        </div>
      </div>
    </footer>
  )
}
