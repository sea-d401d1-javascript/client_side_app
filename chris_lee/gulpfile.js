const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('html:dev', () => {
  gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('webpack:dev', () => {
  gulp.src(__dirname + '/app/js/client.js')
    .pipe(webpack({
      watch: true,
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

// gulp.task('watch', function(){
//   return gulp.watch('bundle.js', ['html:dev', 'webpack:dev']);
// });
gulp.task('build:dev', ['html:dev', 'webpack:dev']);
gulp.task('default', ['build:dev']);
