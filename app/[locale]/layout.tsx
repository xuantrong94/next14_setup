import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProviders } from '../ThemeProviders'
import i18nConfig from '@/i18nConfig'
import { dir } from 'i18next'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn Next14',
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  )
}
