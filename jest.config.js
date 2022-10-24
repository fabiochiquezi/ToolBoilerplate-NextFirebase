/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
        tsconfig: './tsconfig.jest.json',
        isolatedModules: false
    }
  },
  setupFilesAfterEnv: ['./pages/jest.setup.ts'],
  coverageThreshold: {
    global: {
        branches: 100,
        lines: 100,
        functions: 100,
        statements: 100
    }
  }
}
