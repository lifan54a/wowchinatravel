import { getMessages, type Locale } from '@/i18n';
import ProductBClient from './ProductBClient';

export default async function ProductBPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return <ProductBClient locale={locale} messages={messages} />;
}
