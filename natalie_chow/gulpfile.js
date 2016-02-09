const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!**/node_modules/*', '!**/build/*'])
    .pipe(eslint({
      'rules': {
        'indent': [2, 2],
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'no-console': 0
      },
      'env': {
        'es6': true,
        'node': true,
        'browser': true,
        'mocha': true
      },
      'extends': 'eslint:recommended'
    }))
    .pipe(eslint.format());
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
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('build:dev', ['html:dev', 'webpack:dev']);

gulp.task('default', ['lint', 'build:dev']);
