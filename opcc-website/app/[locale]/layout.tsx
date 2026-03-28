import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {routing} from '../../i18n/navigation';
import { locales } from '../../i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: '2026首届OPC一人公司共创大会（OPCC）',
  description: 'AI赋能单人成军 · 数实融合共创生态 | 2026年8月28日 国家会议中心',
};

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function LocaleLayout({children, params}: Props) {
  if (!hasLocale(routing.locales, params.locale)) {
    notFound();
  }

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.locale}>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
