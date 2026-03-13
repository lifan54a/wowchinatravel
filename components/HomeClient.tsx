'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import type { Messages } from '@/i18n';

interface Props {
  messages: Messages;
  locale: Locale;
}

export default function HomeClient({ messages: m, locale }: Props) {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white overflow-hidden min-h-[600px] flex items-center">
        <div className="relative max-w-6xl mx-auto px-4 py-28 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {m.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {m.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition shadow-lg shadow-red-900/40">
              {m.hero.cta}
            </a>
            <a href="#products"
              className="border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition">
              {m.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12">{m.features.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { key: 'f1', icon: '🛂' },
              { key: 'f2', icon: '📸' },
              { key: 'f3', icon: '🗣️' },
              { key: 'f4', icon: '👥' },
            ].map(({ key, icon }) => {
              const f = m.features[key as keyof typeof m.features] as { title: string; desc: string };
              return (
                <div key={key} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{f.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12">{m.products.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product A */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition">
              <div className="relative h-52 overflow-hidden">
                <img src="/images/product-a.jpg" alt="Matrix & Azure" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-5">
                  <div className="text-white/90 text-xs font-semibold mb-1">深圳 · 惠州双月湾</div>
                  <div className="text-white text-2xl font-black">科技 & 海洋</div>
                </div>
              </div>
              <div className="p-6">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{m.products.productA.tag}</span>
                <h3 className="text-xl font-black text-gray-900 mt-3 mb-2">{m.products.productA.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{m.products.productA.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-red-600">{m.products.productA.price}</span>
                  <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition">
                    {m.products.inquire}
                  </a>
                </div>
              </div>
            </div>
            {/* Product B */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition">
              <div className="relative h-52 overflow-hidden">
                <img src="/images/product-b.jpg" alt="Kung Fu & Neon" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-5">
                  <div className="text-white/90 text-xs font-semibold mb-1">深圳 · 佛山 · 珠海</div>
                  <div className="text-white text-2xl font-black">功夫 & 魅影</div>
                </div>
              </div>
              <div className="p-6">
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">{m.products.productB.tag}</span>
                <h3 className="text-xl font-black text-gray-900 mt-3 mb-2">{m.products.productB.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{m.products.productB.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-red-600">{m.products.productB.price}</span>
                  <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition">
                    {m.products.inquire}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-3">{m.contact.title}</h2>
          <p className="text-center text-gray-500 mb-10">{m.contact.subtitle}</p>
          <ContactForm messages={m.contact} />
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-4">{m.contact.or}</p>
            <a href="https://t.me/wowchinatravel"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.014 9.487c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.28 14.806l-2.95-.924c-.642-.2-.654-.642.136-.953l11.527-4.443c.535-.194 1.003.131.569 1.762z"/>
              </svg>
              {m.contact.tg}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactForm({ messages: m }: { messages: Messages['contact'] }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const text = `🔔 新咨询 WOW CHINA\n\n👤 ${m.name}: ${form.name}\n📞 ${m.phone}: ${form.phone}\n💬 ${m.message}: ${form.message}`;
    try {
      await fetch(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TG_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: process.env.NEXT_PUBLIC_TG_CHAT_ID, text }),
      });
    } catch {}
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="text-green-700 font-semibold text-lg">{m.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col gap-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{m.name}</label>
        <input type="text" required value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          placeholder={m.name} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{m.phone}</label>
        <input type="text" required value={form.phone}
          onChange={e => setForm({...form, phone: e.target.value})}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          placeholder="+7 / @telegram" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{m.message}</label>
        <textarea required rows={4} value={form.message}
          onChange={e => setForm({...form, message: e.target.value})}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
          placeholder={m.message} />
      </div>
      <button type="submit" disabled={loading}
        className="bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-lg transition shadow-lg shadow-red-200">
        {loading ? '...' : m.submit}
      </button>
    </form>
  );
}
