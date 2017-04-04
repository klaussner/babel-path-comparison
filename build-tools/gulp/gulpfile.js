const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
  return gulp.src('module.js')
    .pipe(babel({
      plugins: ['../../path-reporter-plugin.js']
    }));
});
