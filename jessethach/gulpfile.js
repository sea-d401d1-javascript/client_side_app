const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');
const jsFiles = ['./*.js', 'app/**/*.js', '!node_modules/**'];
const clientScripts = ['app/**/*.js'];
const staticFiles = ['app/**/*.html'];

gulp.task('html:dev', () => {
  gulp.src(staticFiles)
    .pipe(gulp.dest('build/'));
});

gulp.task('webpack:dev', () => {
  gulp.src(clientScripts)
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('lint', () => {
  return gulp.src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch', () => {
  gulp.watch([jsFiles, staticFiles], ['dev']);
});

gulp.task('dev', ['watch', 'lint', 'html:dev', 'webpack:dev']);
gulp.task('default', ['dev']);
