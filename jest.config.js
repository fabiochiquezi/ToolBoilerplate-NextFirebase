/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
        tsconfig: './tsconfig.jest.json'
    }
  },
  setupFilesAfterEnv: ['./pages/jest.setup.ts']
};