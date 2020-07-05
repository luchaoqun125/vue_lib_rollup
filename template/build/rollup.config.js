// rollup.config.js
import path from 'path';
import resolve from '@rollup/plugin-node-resolve'; // 查找第三方依赖
import alias from '@rollup/plugin-alias'; // 定义别名 eg:@
import commonjs from '@rollup/plugin-commonjs'; // 将commonjs模块转化为es6
import replace from '@rollup/plugin-replace'; // 取代关键字
import babel from '@rollup/plugin-babel'; // 转化为es5
import { terser } from 'rollup-plugin-terser'; // iife格式，压缩代码
import cssOnly from 'rollup-plugin-css-only';
import image from '@rollup/plugin-image'; // 图片转化为base64，但是图片路径资源有问题
import vue from 'rollup-plugin-vue'; // 编译vue插件
const projectRoot = path.resolve(__dirname, '..');

const baseConfig = {
  input: 'src/index.js',
  plugins: {
    preVue: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
      }),
      alias({
        resolve: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        entries: {
          '@': path.resolve(projectRoot, 'src')
        }
      }),
      image(),
      commonjs(),
      terser(),
      cssOnly() // rollup-plugin-css-only
    ],
    replace: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ES_BUILD': JSON.stringify('false')
    },
    vue: {
      css: false,
      include: [/\.vue$/i],
      defaultLang: {
        script: 'js'
      }
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      babelHelpers: 'runtime',
      skipPreflightCheck: true,
      presets: [['@babel/preset-env']],
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
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
    }
  }
};

// ESM/UMD/IIFE shared settings: externals
const external = ['vue'];

// TODO: 只打包了es的模块格式
const buildFormats = [];

const esConfig = {
  ...baseConfig,
  external,
  output: {
    format: 'esm',
    exports: 'named',
    file: 'lib/index.js'
  },
  plugins: [
    replace({
      ...baseConfig.plugins.replace,
      'process.env.ES_BUILD': JSON.stringify('true')
    }),
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    babel({
      ...baseConfig.plugins.babel
    })
  ]
};
buildFormats.push(esConfig);

// Export config
export default buildFormats;
