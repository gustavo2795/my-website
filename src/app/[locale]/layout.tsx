import '@/app/globals.css'
import { LanguageProvider } from '@/components/providers/language-provider'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Seu Nome - Portfolio',
  description: 'Portfolio pessoal',
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
} 