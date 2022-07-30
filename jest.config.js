/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jest-environment-jsdom',
    coverageReporters: ["json-summary", "lcov", "text-summary", "text", "html"],
    collectCoverage: false,
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{ts,tsx}",
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "transformIgnorePatterns": [
        "node_modules/(?!ky/.*)"
    ],
};