import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Roboto, Roboto_Condensed } from 'next/font/google'
import './globals.css'

const siteUrl = 'https://www.benutricionavanzada.com/'

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
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nutrición de Precisión y Salud Corporativa | BE Nutrición Avanzada',
    template: '%s | BE Nutrición Avanzada',
  },
  description:
    'Nutrición de precisión para personas y empresas: salud ocupacional, bienestar laboral y programas para el sector industrial y minero.',
  applicationName: 'BE Nutrición Avanzada',
  icons: {
    icon: [
      {
        url: '/images/BeNA-Isotipo.png',
        type: 'image/png',
      },
    ],
    shortcut: '/images/BeNA-Isotipo.png',
    apple: '/images/BeNA-Isotipo.png',
  },
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
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Nutrición de Precisión y Salud Corporativa | BE Nutrición Avanzada',
    description:
      'Nutrición de precisión, salud ocupacional y bienestar para personas y organizaciones.',
    url: '/',
    siteName: 'BE Nutrición Avanzada',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/hero-puna-mining.png',
        alt: 'Operación minera de altura en la Puna Salteña',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutrición de Precisión y Salud Corporativa | BE Nutrición Avanzada',
    description:
      'Nutrición de precisión, salud ocupacional y bienestar para personas y organizaciones.',
    images: ['/images/hero-puna-mining.png'],
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
