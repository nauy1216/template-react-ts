module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
    'jsx-control-statements/jsx-control-statements': true // 能够在jsx中使用if，需要配合另外的babel插件使用
  },
  globals: {
    // "wx": "readonly",
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-control-statements/recommended', // 需要另外配合babel插件使用
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'react', 'jsx-control-statements', 'prettier'],
  settings: {
    react: {
      version: 'detect' // 自动读取已安装的react版本
    }
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'], // 强制使用单引号
    'no-unused-vars': 'error' // 不允许未定义的变量
  }
};
