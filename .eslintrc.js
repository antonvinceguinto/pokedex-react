module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 1,
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        '': 'never',
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.js'],
      },
    ],
  },
};
