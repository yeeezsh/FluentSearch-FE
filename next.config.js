module.exports = {
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
    APP_BACKEND_STORAGE_ENDPOINT: process.env.APP_BACKEND_STORAGE_ENDPOINT,
  },
};
