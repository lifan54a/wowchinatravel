export type Locale = 'zh' | 'en' | 'ru';

export const locales: Locale[] = ['zh', 'en', 'ru'];
export const defaultLocale: Locale = 'ru';

export type Messages = typeof import('./messages/ru.json');

const cache: Partial<Record<Locale, Messages>> = {};

export async function getMessages(locale: Locale): Promise<Messages> {
  if (!cache[locale]) {
    cache[locale] = (await import(`./messages/${locale}.json`)).default;
  }
  return cache[locale]!;
}
