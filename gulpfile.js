const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
	// 1. where is my scss file
	return gulp.src('./scss/**/*.scss')
	// 2. pass that file through sass compiler
	.pipe(sass().on('error', sass.logError))
	// 3. where do i save the compiled css?
	.pipe(gulp.dest('./css'))
	// 4. stream changes to all browsers
	.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./scss/**/*.scss', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

// const style = () => {
// 	return gulp.src('./scss/**/*.scss')
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(gulp.dest('./css'))
// 	.pipe(livereload());
// }


// const watch = () => {
// 	livereload.listen();
// 	gulp.watch('./scss/**/*.scss', style);
// }

// exports.style = style;
// exports.watch = watch;