module.exports = {
  roots: ['<rootDir>/'],
  preset: 'ts-jest',
  // testEnvironment: 'node',
  moduleDirectories: ['./', 'node_modules'],
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    // '<rootDir>/node_modules/',
    '<rootDir>/out/',
    '<rootDir>/build/',
    '<rootDir>/assets/',
    '<rootDir>/server/',
    '<rootDir>/public/',
    '<rootDir>/styles/',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
      importHelpers: true,
    },
  },
};
