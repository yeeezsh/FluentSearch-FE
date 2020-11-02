module.exports = {
  distDir: 'build',
  outDir: 'out',
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
    };
  },
};
