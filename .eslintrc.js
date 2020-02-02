module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "webpack",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    'import/no-extraneous-dependencies': [1, {'devDependencies': false, 'optionalDependencies': false, 'peerDependencies': false}]
  },
};
