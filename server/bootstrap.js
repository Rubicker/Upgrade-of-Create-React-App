// Node 不识别 JSX，需要用 babel 转义
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

require('ignore-styles')
require('babel-register')({
  ignore: [/(node_modules)/],
  presets: ['es2015', 'react-app']
})
require('./index')
