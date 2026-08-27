import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Roboto, Roboto_Condensed } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BE Nutrición Avanzada | Salud Corporativa y Nutrición de Precisión',
  description:
    'Programas integrales de nutrición de precisión y bienestar laboral para el sector industrial y minero de la Puna Salteña. Salud ocupacional, rendimiento y datos aplicados a la salud corporativa.',
  generator: 'v0.app',
  keywords: [
    'nutrición de precisión',
    'salud ocupacional',
    'minería',
    'Puna Salteña',
    'bienestar corporativo',
    'InBody 270',
    'salud laboral',
    'litio',
  ],
  openGraph: {
    title: 'BE Nutrición Avanzada',
    description:
      'Salud, rendimiento y productividad corporativa para el sector industrial y minero.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#182c60',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${robotoCondensed.variable} bg-background`}
    >
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
