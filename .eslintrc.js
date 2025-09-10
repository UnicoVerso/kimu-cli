module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off', // Disabled for TypeScript compatibility
    'no-console': 'off', // CLI tool needs console output
    'no-process-exit': 'off', // CLI tool needs process.exit
  },
  env: {
    node: true,
    es6: true,
  },
};
