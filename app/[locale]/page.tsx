import { getMessages, locales, type Locale } from "@/i18n";
import HomeClient from "@/components/HomeClient";

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : 'ru') as Locale;
  const messages = await getMessages(validLocale);

  return <HomeClient messages={messages} locale={validLocale} />;
}
