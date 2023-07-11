module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "\\.(css|png|svg|jpg)$": "identity-obj-proxy",
  },
};
