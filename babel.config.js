module.exports = {
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/react', 'next/babel'],
    },
    development: {
      presets: ['next/babel'],
    },
  },
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'import-antd',
    ],
  ],
};
