module.exports = {
  transformIgnorePatterns: ['node_modules/(?!(wallet-auth-client)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  testEnvironment: 'node',
  testMatch: [
    '**/dist/test/**/*.(js)'
  ],
};
