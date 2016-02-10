const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');

gulp.task('html:dev', () => {
  gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('webpack:dev', () => {
  gulp.src(__dirname + '/app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest(__dirname + '/build/'));
});

gulp.task('lint', () => {
  return gulp.src(__dirname + '/app/js/client.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build:dev', ['webpack:dev', 'html:dev']);
gulp.task('default', ['build:dev', 'lint']);
