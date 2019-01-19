const gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		rename = require("gulp-rename"),
		sourcemaps = require('gulp-sourcemaps'),
		browsersync = require("browser-sync").create();

sass.compiler = require('node-sass');

const stylesSrc = './public/styles/sass';
const stylesDest = './public/styles/css';

const sassTask = () => {
	return gulp.src(`${stylesSrc}/**/*.scss`)
			.pipe(sourcemaps.init())
			.pipe(
					sass({
						outputStyle: 'compressed'
					}).on('error', sass.logError))
			.pipe( autoprefixer(
					['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
						cascade: true
					}))
			.pipe( sourcemaps.write() )
			.pipe(rename('main.css'))
			.pipe( gulp.dest(`${stylesDest}`) )
};

const watchFiles = () => {
	gulp.watch(`${stylesSrc}/**/*.scss`, sassTask);
};

// gulp.task('default', gulp.series(gulp.parallel(sassTask)));
gulp.task('default', gulp.series(gulp.parallel(watchFiles)));
