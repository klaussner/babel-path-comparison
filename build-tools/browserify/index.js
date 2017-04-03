const browserify = require('browserify');

const result = browserify('./module.js')
  .transform('babelify', {
    plugins: ['../../path-reporter-plugin.js']
  })
  .bundle();
