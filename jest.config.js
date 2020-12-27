// module mapper hotfix
const tsconfig = require('./tsconfig.json');
const aliasModule = Object.keys(tsconfig.compilerOptions.paths)
  .map((alias) => {
    const value = tsconfig.compilerOptions.paths[alias];
    return {
      // alias
      ['^' + alias.replace('*', '(.*)')]:
      // absolute path
        '<rootDir>/' + String(value).replace('*', '') + '$1',
    };
  })
  .reduce((acc, cur) => {
    return { ...acc, ...cur };
  }, {});
  
process.env = {
    ...process.env,
    __NEXT_IMAGE_OPTS: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        imageSizes: [],
        domains: ["static.ghost.org"],
        path: "/_next/image",
        loader: "default",
    },
};
module.exports = {
  moduleDirectories: ['./', 'node_modules'],
  testPathIgnorePatterns: ['<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    ...aliasModule,
  },

  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
      babelConfig: true,
    },
  },
};
