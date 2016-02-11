const gulp = require('gulp');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');

gulp.task('css:dev', () => {
	gulp.src(__dirname + '/app/**/*.css')
	  .pipe(gulp.dest(__dirname + '/build'));
});

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
    .pipe(gulp.dest('build/'));
});

gulp.task('build:dev', ['webpack:dev', 'css:dev', 'html:dev']);
gulp.task('default', ['build:dev']);
