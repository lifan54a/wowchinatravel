'use client';
import Link from 'next/link';
import type { Locale, Messages } from '@/i18n';

interface Props { locale: Locale; messages: Messages; }

const itinerary = [
  { day: 'Day 1', zh: '抵达深圳，接机入住蛇口/南山区舒适型酒店', en: 'Arrive Shenzhen, transfer, check-in Shekou/Nanshan hotel', ru: 'Прилёт в Шэньчжэнь, трансфер, отель Шэкоу/Наньшань', tag: '🚗' },
  { day: 'Day 2', zh: '南头古城+大芬油画村，传统建筑+现代艺术', en: 'Nantou Ancient Town + Dafen Oil Painting Village', ru: 'Древний город Наньтоу + деревня Дафэнь', tag: '🎨' },
  { day: 'Day 3', zh: '佛山祖庙 + 咏春体验 + 醒狮表演', en: 'Foshan Ancestral Temple + Wing Chun experience + Lion Dance', ru: 'Храм предков Фошань + кунг-фу Вин Чунь + танец льва', tag: '🥋' },
  { day: 'Day 4', zh: '佛山早茶 + 移师珠海，情侣路+珠海渔女', en: 'Foshan dim sum + travel to Zhuhai, Lover\'s Road + Fisher Girl statue', ru: 'Дим-сам + переезд в Чжухай, Дорога влюблённых', tag: '🍵' },
  { day: 'Day 5', zh: '珠海长隆海洋王国全天', en: 'Chimelong Ocean Kingdom full day', ru: 'Морское царство Chimelong — целый день', tag: '🐬' },
  { day: 'Day 6', zh: '横琴长隆剧院杂技 + 返回深圳', en: 'Chimelong Theatre acrobatics show + return to Shenzhen', ru: 'Акробатическое шоу Chimelong + возвращение в Шэньчжэнь', tag: '🎭' },
  { day: 'Day 7', zh: '华强北电子市场购物 + 专车送机', en: 'Huaqiangbei electronics shopping + airport transfer', ru: 'Рынок электроники Хуацянбэй + трансфер в аэропорт', tag: '✈️' },
];

const costs = [
  { zh: '国际机票（莫斯科↔深圳往返经济舱）', en: 'International flight (Moscow↔Shenzhen economy)', ru: 'Авиабилет (Москва↔Шэньчжэнь эконом)', price: '¥5,500–7,500' },
  { zh: '酒店（4星级，6晚）', en: '4-star hotel (6 nights)', ru: 'Отель 4★ (6 ночей)', price: '¥2,800' },
  { zh: '景点门票（含长隆）', en: 'Attraction tickets (incl. Chimelong)', ru: 'Входные билеты (включая Chimelong)', price: '¥1,200' },
  { zh: '餐饮（含佛山早茶/顺德私房菜）', en: 'Meals (incl. Foshan dim sum & Shunde cuisine)', ru: 'Питание (дим-сам Фошань + кухня Шундэ)', price: '¥1,800' },
  { zh: '地面交通（旅游巴士）', en: 'Ground transport (tour bus)', ru: 'Наземный транспорт (автобус)', price: '¥800' },
  { zh: '全程跟拍（摄影师+后期+相册，团员分摊）', en: 'Photography service (photographer + editing + album, shared)', ru: 'Фотосъёмка (фотограф + монтаж + альбом, на группу)', price: '¥1,000' },
  { zh: '中俄双语导游', en: 'Chinese-Russian bilingual guide', ru: 'Гид (китайско-русский)', price: '¥600' },
];

export default function ProductBClient({ locale }: Props) {
  const t = (zh: string, en: string, ru: string) =>
    locale === 'zh' ? zh : locale === 'en' ? en : ru;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-80 overflow-hidden">
        <img src="/images/product-b.jpg" alt="Kung Fu & Neon" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8">
          <Link href={`/${locale}`} className="text-white/70 text-sm hover:text-white mb-3 inline-block">← {t('返回首页','Back','На главную')}</Link>
          <div className="text-white/80 text-sm mb-1">{t('大众经典版 · 10-15人精致小团','Classic Group Tour · 10-15 People','Классик · Группа 10-15 чел.')}</div>
          <h1 className="text-3xl md:text-5xl font-black text-white">
            {t('功夫与魅影', 'Kung Fu & Neon', 'Кунг-фу и Неон')}
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            {t('7天6晚 · 深圳+佛山+珠海 · 文化沉浸之旅', '7 Days 6 Nights · Shenzhen+Foshan+Zhuhai · Cultural Immersion', '7 дней 6 ночей · Шэньчжэнь+Фошань+Чжухай · Погружение в культуру')}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Price + CTA */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <div className="text-gray-500 text-sm">{t('建议零售价（10-15人精致小团）','Recommended retail price (group of 10-15)','Рекомендуемая цена (группа 10-15 чел.)')}</div>
            <div className="text-4xl font-black text-red-600">¥16,800<span className="text-lg font-normal text-gray-500">/{t('人','person','чел.')}</span></div>
          </div>
          <a href={`/${locale}#contact`}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition shadow-lg">
            {t('立即咨询', 'Get a Quote', 'Получить консультацию')}
          </a>
        </div>

        {/* Core Highlights */}
        <h2 className="text-2xl font-black text-gray-900 mb-6">{t('核心卖点','Core Highlights','Ключевые преимущества')}</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: '🏯', zh: '经典中国符号', en: 'Classic China Icons', ru: 'Классика Китая', descZh: '功夫、醒狮、园林，满足对中国传统文化的认知', descEn: 'Kung fu, lion dance, gardens — authentic Chinese culture', descRu: 'Кунг-фу, танец льва, сады — настоящая культура Китая' },
            { icon: '🗺️', zh: '一程多站', en: 'Multi-City Tour', ru: 'Несколько городов', descZh: '一次旅行打卡三个代表性城市，感受大湾区融合气息', descEn: 'Three signature cities in one trip — feel the Greater Bay Area', descRu: 'Три города за одну поездку — дух Большого залива' },
            { icon: '🛂', zh: '免签便利', en: 'Visa-Free', ru: 'Безвизовый въезд', descZh: '俄罗斯公民免签入境中国，最长停留30天', descEn: 'Russian citizens enter China visa-free, stay up to 30 days', descRu: 'Граждане России въезжают без визы до 30 дней' },
          ].map((item) => (
            <div key={item.icon} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{t(item.zh, item.en, item.ru)}</h3>
              <p className="text-gray-500 text-sm">{t(item.descZh, item.descEn, item.descRu)}</p>
            </div>
          ))}
        </div>

        {/* Itinerary */}
        <h2 className="text-2xl font-black text-gray-900 mb-6">{t('行程安排','Itinerary','Программа тура')}</h2>
        <div className="space-y-3 mb-12">
          {itinerary.map((item) => (
            <div key={item.day} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-xs font-bold text-red-600 bg-red-100 rounded-lg px-2 py-1">{item.day}</div>
                <div className="text-2xl mt-1">{item.tag}</div>
              </div>
              <div>
                <p className="text-gray-800 font-medium">{t(item.zh, item.en, item.ru)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photography Service */}
        <h2 className="text-2xl font-black text-gray-900 mb-6">{t('专业跟拍服务','Professional Photography Service','Профессиональная фотосъёмка')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: '📷', zh: '专业摄影师随行', en: 'Pro photographer escort', ru: 'Профессиональный фотограф' },
            { icon: '✨', zh: '精修照片3天内交付', en: 'Edited photos within 3 days', ru: 'Обработанные фото за 3 дня' },
            { icon: '📖', zh: '精美相册快递到家', en: 'Photo album delivered home', ru: 'Альбом с доставкой домой' },
            { icon: '🎬', zh: '旅行精华视频（可选）', en: 'Travel highlight video (optional)', ru: 'Видео-нарезка (опционально)' },
          ].map((s) => (
            <div key={s.icon} className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <p className="text-sm font-medium text-gray-700">{t(s.zh, s.en, s.ru)}</p>
            </div>
          ))}
        </div>

        {/* Meal adaptation */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <h3 className="font-bold text-gray-900 mb-2">🍽️ {t('俄罗斯餐食适配','Russian Meal Adaptation','Адаптация питания')}</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• {t('行程中穿插1-2顿西餐，缓解"中国胃"适应期','1-2 western meals included to ease into Chinese cuisine','1-2 западных блюда для плавного привыкания к китайской кухне')}</li>
            <li>• {t('提前告知饮食禁忌，协助寻找合适餐厅','Dietary restrictions noted in advance, suitable restaurants arranged','Пищевые ограничения учитываются заранее')}</li>
            <li>• {t('导游随时提供饮食建议','Guide provides dining advice at all times','Гид всегда готов помочь с выбором блюд')}</li>
          </ul>
        </div>

        {/* Cost Breakdown */}
        <h2 className="text-2xl font-black text-gray-900 mb-6">{t('费用构成','Cost Breakdown','Состав стоимости')}</h2>
        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-12">
          {costs.map((c, i) => (
            <div key={i} className={`flex justify-between items-center px-5 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <span className="text-gray-700 text-sm">{t(c.zh, c.en, c.ru)}</span>
              <span className="font-bold text-gray-900">{c.price}</span>
            </div>
          ))}
          <div className="flex justify-between items-center px-5 py-4 bg-red-600 text-white">
            <span className="font-bold">{t('建议零售价','Recommended Retail Price','Итоговая цена')}</span>
            <span className="text-2xl font-black">¥16,800</span>
          </div>
        </div>

        {/* Policy note */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10">
          <p className="text-green-800 text-sm font-medium">
            🛂 {t(
              '俄罗斯普通护照持有人可凭护照直接入境中国，无需办理任何签证手续，单次停留最长30天。适用于所有开放口岸，政策有效期至2026年9月14日。',
              'Russian passport holders can enter China directly without a visa. Single stay up to 30 days. Valid at all open ports. Policy valid until September 14, 2026.',
              'Владельцы российских паспортов въезжают в Китай без визы. Пребывание до 30 дней. Политика действует до 14 сентября 2026 г.'
            )}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={`/${locale}#contact`}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 rounded-2xl text-xl transition shadow-xl">
            {t('立即咨询，锁定名额', 'Book Now, Limited Spots', 'Забронировать — мест ограничено')}
          </a>
          <p className="text-gray-400 text-sm mt-4">{t('10-15人精致小团，每期名额有限','Group of 10-15, limited availability','Группа 10-15 чел., мест мало')}</p>
        </div>
      </div>
    </div>
  );
}
