const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  distDir: 'build',
  outDir: 'out',
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['fluentsearch.com'],
    path: '/',
    loader: 'imgix',
  },
  env: {
    APP_GRAPHQL_ENDPOINT: process.env.APP_GRAPHQL_ENDPOINT,
    APP_BACKEND_ENDPOINT: process.env.APP_BACKEND_ENDPOINT,
  },
};
