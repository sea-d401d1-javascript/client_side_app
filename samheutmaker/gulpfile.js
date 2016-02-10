const gulp = require('gulp');
const webpack = require('webpack-stream');

const file = {
	js: ['app/**/*.js']
}

// Copy HTML to build
gulp.task('html:dev', () => {
	gulp.src(__dirname + '/app/**/*.html')
	.pipe(gulp.dest(__dirname + '/build'));
});

// Webpack

gulp.task('webpack:dev', () => {
	gulp.src(__dirname + '/app/js/app.js')
	.pipe(webpack({
		output: {
			filename: 'bundle.js'
		}
	}))
	.pipe(gulp.dest('build/'))
});

gulp.task('watch', () =>{
	gulp.watch(file.js, ['webpack:dev', 'html:dev'])
});

gulp.task('default', ['watch']);