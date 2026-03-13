'use client';
import Link from 'next/link';
import { useState } from 'react';
import type { Locale } from '@/i18n';

const localeNames: Record<string, string> = { zh: '中文', en: 'EN', ru: 'RU' };
const locales = ['zh', 'en', 'ru'];

interface NavMessages {
  home: string; products: string; about: string; contact: string;
}

export default function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href={`/${locale}`} className="flex items-center gap-1">
          <span className="text-2xl font-black text-red-600">WOW</span>
          <span className="text-2xl font-black text-gray-900">CHINA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href={`/${locale}`} className="text-gray-600 hover:text-red-600 font-medium transition">
            {locale === 'zh' ? '首页' : locale === 'en' ? 'Home' : 'Главная'}
          </Link>
          <Link href={`/${locale}#products`} className="text-gray-600 hover:text-red-600 font-medium transition">
            {locale === 'zh' ? '产品' : locale === 'en' ? 'Tours' : 'Туры'}
          </Link>
          <Link href={`/${locale}#contact`} className="text-gray-600 hover:text-red-600 font-medium transition">
            {locale === 'zh' ? '联系我们' : locale === 'en' ? 'Contact' : 'Контакты'}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {locales.map(l => (
              <Link key={l} href={`/${l}`}
                className={`px-2 py-1 rounded text-xs font-bold transition ${l === locale ? 'bg-red-600 text-white' : 'text-gray-500 hover:text-red-600'}`}>
                {localeNames[l]}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}#contact`}
            className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition ml-2">
            {locale === 'zh' ? '立即咨询' : locale === 'en' ? 'Get Quote' : 'Консультация'}
          </Link>
          <button className="md:hidden ml-2" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          <Link href={`/${locale}`} onClick={() => setOpen(false)} className="text-gray-700 font-medium">
            {locale === 'zh' ? '首页' : locale === 'en' ? 'Home' : 'Главная'}
          </Link>
          <Link href={`/${locale}#products`} onClick={() => setOpen(false)} className="text-gray-700 font-medium">
            {locale === 'zh' ? '产品' : locale === 'en' ? 'Tours' : 'Туры'}
          </Link>
          <Link href={`/${locale}#contact`} onClick={() => setOpen(false)} className="text-gray-700 font-medium">
            {locale === 'zh' ? '联系我们' : locale === 'en' ? 'Contact' : 'Контакты'}
          </Link>
        </div>
      )}
    </nav>
  );
}
