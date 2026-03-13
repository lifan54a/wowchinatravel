'use client';
import Link from 'next/link';
import type { Locale, Messages } from '@/i18n';

interface Props { locale: Locale; messages: Messages; }

const itinerary = [
  { day: 'Day 1', zh: '抵达深圳，专属接机，入住人才公园高星级酒店', en: 'Arrive Shenzhen, private transfer, check-in luxury hotel at Talent Park', ru: 'Прилёт в Шэньчжэнь, трансфер, заселение в отель у Talent Park', tag: '🚗' },
  { day: 'Day 2', zh: 'DJI大疆旗舰店体验无人机 + 平安金融中心俯瞰全城', en: 'DJI flagship store drone experience + panoramic view from Ping An Finance Center', ru: 'Флагманский магазин DJI + вид с небоскрёба Ping An', tag: '🚁' },
  { day: 'Day 3', zh: '华为总部园区参观 + 人才公园无人机灯光秀', en: 'Huawei HQ campus tour + drone light show at Talent Park', ru: 'Кампус Huawei + лазерное шоу с дронами', tag: '🏢' },
  { day: 'Day 4', zh: '移师惠州双月湾，入住一线海景五星度假酒店', en: 'Travel to Huizhou Double Moon Bay, 5-star beachfront resort', ru: 'Переезд в Двойную Лунную бухту Хуэйчжоу, 5★ отель у моря', tag: '🌊' },
  { day: 'Day 5', zh: '双月湾全天海滩自由活动，摄影师全程跟拍', en: 'Full day free at Double Moon Bay beach, photographer escort', ru: 'Целый день на пляже, фотограф всегда рядом', tag: '📸' },
  { day: 'Day 6', zh: '游艇出海摄影 + 地道海鲜大餐', en: 'Yacht photography cruise + authentic seafood dinner', ru: 'Фотосъёмка с яхты + морской ужин', tag: '⛵' },
  { day: 'Day 7', zh: '华强北电子市场 + 海上世界酒吧街 + 街拍', en: 'Huaqiangbei electronics market + Sea World bar street + street photography', ru: 'Рынок электроники Хуацянбэй + Sea World + уличная съёмка', tag: '🎆' },
  { day: 'Day 8', zh: '相册预览版交付，专车送机', en: 'Preview album delivered, private transfer to airport', ru: 'Предварительный альбом, трансфер в аэропорт', tag: '✈️' },
];

const costs = [
  { zh: '国际机票（莫斯科↔深圳往返经济舱）', en: 'International flight (Moscow↔Shenzhen economy)', ru: 'Авиабилет (Москва↔Шэньчжэнь эконом)', price: '¥5,500–7,500' },
  { zh: '酒店（5星级，7晚）', en: '5-star hotel (7 nights)', ru: 'Отель 5★ (7 ночей)', price: '¥4,500' },
  { zh: '景点门票', en: 'Attraction tickets', ru: 'Входные билеты', price: '¥800' },
  { zh: '餐饮（含3顿高端特色餐）', en: 'Meals (incl. 3 premium dinners)', ru: 'Питание (включая 3 ужина)', price: '¥2,400' },
  { zh: '地面交通（商务车）', en: 'Ground transport (business van)', ru: 'Наземный транспорт (бизнес-авто)', price: '¥1,500' },
  { zh: '全程跟拍（摄影师+后期+实体相册）', en: 'Photography service (photographer + editing + album)', ru: 'Фотосъёмка (фотограф + монтаж + альбом)', price: '¥2,000' },
  { zh: '中俄双语导游', en: 'Chinese-Russian bilingual guide', ru: 'Гид (китайско-русский)', price: '¥1,200' },
];

export default function ProductAClient({ locale }: Props) {
  const t = (zh: string, en: string, ru: string) =>
    locale === 'zh' ? zh : locale === 'en' ? en : ru;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-80 overflow-hidden">
        <img src="/images/product-a.jpg" alt="Matrix & Azure" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8">
          <Link href={`/${locale}`} className="text-white/70 text-sm hover:text-white mb-3 inline-block">← {t('返回首页','Back','На главную')}</Link>
          <div className="text-white/80 text-sm mb-1">{t('精品定制版 · 4人私家小团','Premium Custom · Private Group of 4','Премиум · Мини-группа 4 чел.')}</div>
          <h1 className="text-3xl md:text-5xl font-black text-white">
            {t('极客与蔚蓝', 'Matrix & Azure', 'Матрица и Лазурь')}
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            {t('8天7晚 · 深圳科技 + 惠州双月湾 · 全程摄影跟拍', '8 Days 7 Nights · Shenzhen Tech + Huizhou Bay · Photography Included', '8 дней 7 ночей · Технологии + море · Фотограф включён')}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Price + CTA */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <div className="text-gray-500 text-sm">{t('建议零售价（4人团，含摄影服务）','Recommended retail price (group of 4, photography included)','Рекомендуемая цена (группа 4 чел., фото включено)')}</div>
            <div className="text-4xl font-black text-red-600">¥21,800<span className="text-lg font-normal text-gray-500">/{t('人','person','чел.')}</span></div>
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
            { icon: '⚡', zh: '反差体验', en: 'Contrast Experience', ru: 'Контрастный опыт', descZh: '科技感深圳 → 南中国海度假，一次体验两种中国', descEn: 'Hi-tech Shenzhen → South China Sea resort, two Chinas in one trip', descRu: 'Хай-тек Шэньчжэнь → курорт Южно-Китайского моря' },
            { icon: '📸', zh: '社媒利器', en: 'Social Media Ready', ru: 'Контент для соцсетей', descZh: '全程摄影师跟拍，满足VK/Instagram分享欲', descEn: 'Professional photographer throughout, perfect for VK/Instagram', descRu: 'Фотограф весь тур, идеально для VK/Instagram' },
            { icon: '🛂', zh: '免签便利', en: 'Visa-Free', ru: 'Безвизовый въезд', descZh: '俄罗斯公民免签入境中国，最长停留30天', descEn: 'Russian citizens enter China visa-free, stay up to 30 days', descRu: 'Граждане России въезжают без визы, пребывание до 30 дней' },
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
        <h2 className="text-2xl font-black text-gray-900 mb-6">{t('差异化服务：全程专业跟拍','Signature Service: Professional Photography','Уникальная услуга: Профессиональная фотосъёмка')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: '👁️', zh: '专业摄影师随行', en: 'Pro photographer escort', ru: 'Профессиональный фотограф' },
            { icon: '✨', zh: '3天内交付精修照片', en: 'Edited photos in 3 days', ru: 'Обработанные фото за 3 дня' },
            { icon: '📖', zh: '精美实体相册快递到家', en: 'Premium photo album delivered', ru: 'Фотоальбом с доставкой домой' },
            { icon: '🎬', zh: '30-60秒旅行精华视频', en: '30-60s travel highlight video', ru: 'Видео-нарезка 30-60 сек' },
          ].map((s) => (
            <div key={s.icon} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <p className="text-sm font-medium text-gray-700">{t(s.zh, s.en, s.ru)}</p>
            </div>
          ))}
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
            <span className="font-bold">{t('建议零售价（含30%利润）','Recommended Retail Price (incl. 30% margin)','Итоговая цена (включая наценку 30%)')}</span>
            <span className="text-2xl font-black">¥21,800</span>
          </div>
        </div>

        {/* Policy note */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10">
          <p className="text-green-800 text-sm font-medium">
            🛂 {t(
              '俄罗斯普通护照持有人可凭护照直接入境中国，无需办理任何签证手续，单次停留最长30天。适用于所有开放口岸（空港/陆路/海港），政策有效期至2026年9月14日。',
              'Russian passport holders can enter China directly without a visa. Single stay up to 30 days. Valid at all open ports (air/land/sea). Policy valid until September 14, 2026.',
              'Владельцы российских паспортов въезжают в Китай без визы. Пребывание до 30 дней. Действует во всех открытых портах. Политика действует до 14 сентября 2026 г.'
            )}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={`/${locale}#contact`}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 rounded-2xl text-xl transition shadow-xl">
            {t('立即咨询，锁定名额', 'Book Now, Limited Spots', 'Забронировать — мест ограничено')}
          </a>
          <p className="text-gray-400 text-sm mt-4">{t('4人私家小团，每期名额有限','Private group of 4, limited availability','Мини-группа 4 чел., мест мало')}</p>
        </div>
      </div>
    </div>
  );
}
