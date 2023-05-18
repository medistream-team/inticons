module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'off',
    'no-param-reassign': 'off',
    'array-callback-return': 'off',
    'no-restricted-syntax': 'off',
    'no-promise-executor-return': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
