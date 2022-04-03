/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['default', 'en', 'zh'],
    defaultLocale: 'default',
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
