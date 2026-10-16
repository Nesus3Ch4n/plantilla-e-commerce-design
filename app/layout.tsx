import { Analytics } from '@vercel/analytics/next'
import { Space_Grotesk, Cormorant_Garamond } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' })
const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Casa Norte — Diseño que permanece',
  description: 'Ropa y joyería de autor hecha en México.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f2f0eb', userScalable: false }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-MX"><body className={`${grotesk.variable} ${display.variable}`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
