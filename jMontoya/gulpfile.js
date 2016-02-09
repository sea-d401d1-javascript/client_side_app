const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('html:dev', () => {
  gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('css:dev', () => {
  gulp.src(__dirname + '/app/**/*.css')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('webpack-js:dev', () => {
  gulp.src([
    __dirname + '/app/js/client.js',
    __dirname + '/app/scripts.js'
  ])
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('build:dev', ['webpack-js:dev', 'html:dev', 'css:dev']);
gulp.task('default', ['build:dev']);
