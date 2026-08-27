import { MapPin, Mail, Phone, Globe, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { CONTACT, NUTREANDO_URL } from '@/lib/site-config'

export function Contact() {
  return (
    <section id="contacto" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contacto"
          title="Transforme la Salud de su Capital Humano"
          subtitle="Solicite una Jornada Demostrativa Gratuita de InBody 270 para su Equipo Directivo o una Prueba Piloto en sus Instalaciones."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          {/* Info */}
          <Reveal className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <dl className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">
                    Base Operativa Regional
                  </dt>
                  <dd className="mt-1 leading-relaxed text-navy">
                    {CONTACT.base}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">
                    Email Corporativo
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy underline-offset-4 hover:text-tech hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">
                    Contacto
                  </dt>
                  <dd className="mt-1 flex flex-col gap-0.5">
                    {CONTACT.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy underline-offset-4 hover:text-tech hover:underline"
                      >
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                  <Globe className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">
                    Plataforma pacientes
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={NUTREANDO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-navy underline-offset-4 hover:text-tech hover:underline"
                    >
                      Coordinar cita
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
