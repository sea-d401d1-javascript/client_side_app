const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('html:dev', () => {
  gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('css:dev', () => {
  gulp.src(__dirname + '/app/css/time.css')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('webpack:dev', () => {
  gulp.src(__dirname + '/app/js/controller.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('build:dev', ['webpack:dev', 'html:dev', 'css:dev']);
gulp.task('default', ['build:dev']);
