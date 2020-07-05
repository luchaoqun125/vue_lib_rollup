/*
 * @Description:
 * @Author: 鲁大师
 * @Date: 2020-05-13 16:50:20
 * @LastEditors: 鲁大师
 * @LastEditTime: 2020-07-02 13:50:11
 */
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    '@babel/plugin-transform-regenerator',
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: false,
        regenerator: true,
        useESModules: false
      }
    ]
  ]
};
