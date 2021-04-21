// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: [`node_modules`, `.cache`, 'dist'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}'],
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/tests/**/*.(js|jsx|ts|tsx)', '**/?(*.)+(spec|test).(js|jsx|ts|tsx)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/mock/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/src/mock/styleMock.ts',
  },
  // Indicates whether each individual test should be reported during the run
  verbose: true,
  globals: {
    __DEV__: true,
  },
}
