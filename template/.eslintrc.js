/*
 * @Description:
 * @Author: 鲁大师
 * @Date: 2020-07-01 20:58:29
 * @LastEditors: 鲁大师
 * @LastEditTime: 2020-07-02 14:00:22
 */

module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-new': 'off',
    camelcase: [
      'warn',
      {
        allow: ['aa_bb']
      }
    ]
  }
};
