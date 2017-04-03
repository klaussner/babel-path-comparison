const rollup = require('rollup');
const babel = require('rollup-plugin-babel');

rollup.rollup({
  entry: './module.js',
  plugins: [babel()]
});
