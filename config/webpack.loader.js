module.exports = [
  {
    test: /\.(ts|tsx)$/,
    enforce: 'pre',
    use: [
      {
        options: {
          eslintPath: require.resolve('eslint'),
        },
        loader: require.resolve('eslint-loader'),
      },
    ],
    exclude: /node_modules/,
  },
];
