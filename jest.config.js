module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['/node_modules/', '/.build/'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  resetMocks: true,
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '^@finder/(.*)$': '<rootDir>/files-manipulation/$1',
    '^@metadata/(.*)$': '<rootDir>/folder-metadata/$1',
    '^@logger/(.*)$': '<rootDir>/logging/$1',
  },
}
