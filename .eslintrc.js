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
  extends: 'eslint:recommended',
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  rules: {
    "dot-notation": 2
  }
}
