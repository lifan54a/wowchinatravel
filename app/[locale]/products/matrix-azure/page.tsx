import { getMessages, type Locale } from '@/i18n';
import ProductAClient from './ProductAClient';

export default async function ProductAPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return <ProductAClient locale={locale} messages={messages} />;
}
