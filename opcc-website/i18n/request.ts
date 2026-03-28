import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { i18n } from '../i18n';

export default getRequestConfig(async ({ locale }) => {
  if (!i18n.locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale: locale as string,
    messages: (await import(`../i18n/messages/${locale}.json`)).default
  };
});
