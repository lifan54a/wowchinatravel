import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { locales, type Locale } from "@/i18n";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WOW CHINA | Explore China · Открой Китай · 探索中国",
  description: "Premium China tours for Russian travelers. 240-hour visa-free. Russian-speaking guides.",
};

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={geist.className}>
        <Navbar locale={locale as Locale} />
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
          © 2026 WOW CHINA · All rights reserved · 保留所有权利 · Все права защищены
        </footer>
      </body>
    </html>
  );
}
