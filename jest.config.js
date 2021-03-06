module.exports = {
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/packages/'],
  cacheDirectory: '<rootDir>/.jest/',
  testMatch: ['**/packages/**/src/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['<rootDir>/packages/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: ['json', 'lcov', 'text-summary'],
  preset: 'ts-jest',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  automock: false,
};
