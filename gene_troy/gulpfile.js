const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');
const nodemon = require('gulp-nodemon');

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

gulp.task('develop', function () {
  nodemon({
    script: 'server.js',
    ext: 'html js',
    env: { 'NODE_ENV': 'development' }
  })
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('lint', () => {
  return gulp.src(__dirname + '/app/js/client.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build:dev', ['webpack:dev', 'html:dev']);

gulp.task('watch', function() {
    gulp.watch(['app/js/client.js', 'app/index.html', 'app/css/style.css'], ['build:dev']);
});


gulp.task('default', ['build:dev', 'lint']);
