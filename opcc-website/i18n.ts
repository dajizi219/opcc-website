import {createI18nClient} from 'next-intl';

export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export function getI18nClient(locale: Locale) {
  return createI18nClient({
    locale,
    messages: require(`./i18n/messages/${locale}.json`),
  });
}

export async function getMessages(locale: Locale) {
  return (await import(`./i18n/messages/${locale}.json`)).default;
}
