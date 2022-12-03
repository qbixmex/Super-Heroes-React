module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 0,
    'arrow-parens': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'arrow-body-style': 0,
    'object-curly-newline': 0,
    'react/jsx-curly-spacing': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/naming-convention': 0,
  },
};
