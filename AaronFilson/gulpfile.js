const gulp = require('gulp');
const webpack = require('webpack-stream');

const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');


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

var files = ['*.js', './lib/*.js', './lib/*/*.js', './test/*.js',
 '!node_modules/**', '!*.json'];

gulp.task('lint', () => {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('mocha', () => {
  return gulp.src('test/*test*.js')
    .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('watch', () => {
  return gulp.watch(files, ['lint', 'mocha']);
});

gulp.task('default', ['lint', 'mocha', 'html:dev']);
