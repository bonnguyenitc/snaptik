/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: [
      'en',
      'ID',
      'vi',
      'br',
      // 'ms',
      // 'jv',
      // 'cs',
      // 'es',
      // 'fr',
      // 'de',
      // 'it',
      // 'hu',
      // 'nl',
      // 'pl',
      // 'pt',
      // 'ro',
      // 'th',
      // 'tr',
      // 'el',
      // 'uk',
      // 'ru',
      // 'ar',
      // 'ko',
      // 'ja',
      // 'in',
      // 'pr',
    ],
    defaultLocale: 'en',
    localeDetection: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
