import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['zh', 'en', 'ru'],
  defaultLocale: 'ru',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
};
