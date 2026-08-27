// BE Nutrición Avanzada — configuración del sitio

export const ACCESS_URL = 'https://nutreando.com/be-nutricion'

export const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El desafío', href: '#desafio' },
  { label: 'Nuestra solución', href: '#solucion' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const CONTACT = {
  base: 'Salta, Argentina. Cobertura regional (Salta, Jujuy, Catamarca, San Juan y resto del país)',
  email: 'benutricion.a@gmail.com',
  phones: ['+54 9 387 581-8508', '+54 9 387 521-7749'],
} as const

export const NUTREANDO_URL = 'https://nutreando.com/be-nutricion'
export const COVERAGE = 'Salta · Jujuy · Catamarca · San Juan · Resto del país'
