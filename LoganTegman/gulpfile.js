'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');

const jsFiles = ['./*.js', 'app/**/*.js', '!node_modules/**'];
const clientScripts = ['app/**/*.js'];
const staticFiles = ['app/**/*.html'];

gulp.task('static:dev', () => {
  gulp.src(staticFiles)
    .pipe(gulp.dest('build/'));
});

gulp.task('build:dev', () => {
  gulp.src(clientScripts)
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      devtool: 'source-map'
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('lint', () => {
  gulp.src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch', () => {
  gulp.watch([jsFiles, staticFiles], ['dev']);
});

gulp.task('dev', ['watch', 'lint', 'static:dev', 'build:dev']);

gulp.task('default', ['dev']);
