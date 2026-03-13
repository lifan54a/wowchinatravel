'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 将表单数据通过 Telegram Bot 发送
    const text = `🔔 新咨询 WOW CHINA\n\n👤 姓名: ${form.name}\n📞 联系方式: ${form.phone}\n💬 留言: ${form.message}`;
    await fetch(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TG_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: process.env.NEXT_PUBLIC_TG_CHAT_ID, text }),
    }).catch(() => {});
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="text-green-700 font-semibold text-lg">{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col gap-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('name')}</label>
        <input
          type="text" required
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          placeholder={t('name')}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('phone')}</label>
        <input
          type="text" required
          value={form.phone}
          onChange={e => setForm({...form, phone: e.target.value})}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          placeholder="+7 / @telegram"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('message')}</label>
        <textarea
          required rows={4}
          value={form.message}
          onChange={e => setForm({...form, message: e.target.value})}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
          placeholder={t('message')}
        />
      </div>
      <button type="submit"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg transition shadow-lg shadow-red-200">
        {t('submit')}
      </button>
    </form>
  );
}
