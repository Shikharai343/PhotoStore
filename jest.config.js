module.exports = {
    preset: 'react-native',
    collectCoverage: true,
    moduleDirectories: ['node_modules', 'src'],
    setupFiles: ['<rootDir>setupTests.js'],
    testPathIgnorePatterns: ['node_modules/(?!(jest-)?react-native'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    testPathIgnorePatterns: ['/dist/'], // ignores dist folder while running test cases
    coverageReporters: ['json', 'lcov', 'text'],
    coverageDirectory: './coverage',
    collectCoverageFrom: [
      '<rootDir>/src/**/*.ts',
      '<rootDir>/src/**/*.tsx',
      '<rootDir>/src/**/interfaces.ts',
      '!<rootDir>/src/assets/*',
      '!<rootDir>/src/**/*.modules.ts',
      '!<rootDir>/src/**/*.test.ts',
      '!<rootDir>/src/**/*.d.ts',
    ],
    testEnvironment: 'node',
    globals: {
      'babel-jest': {
        isolatedModules: true,
      },
    },
  };