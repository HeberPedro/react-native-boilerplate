module.exports = {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      babelConfig: true,
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!native-base)/'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  coveragePathIgnorePatterns: ['<rootDir>/src/__tests__/test-utils.jsx'],
  cacheDirectory: '.jest/cache',
}
