'use strict'

/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 打开规则作为警告（不影响退出代码）
   * "error" 或 2 - 打开规则作为错误（触发时退出代码为 1）
   */
  rules: {
    'quote-props': 0,
    'dot-notation': 2,
    'eqeqeq': 0,
    'semi': 2,
    'no-extra-semi': 2,
    'comma-dangle': 0,
    'space-before-function-paren': ['error', 'never']
  }
}
