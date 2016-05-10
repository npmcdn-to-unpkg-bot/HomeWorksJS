var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglifyJs = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('buildCss', function () {
    return gulp.src('css/src/*.css')
      .pipe(concatCss("main.css"))
      .pipe(minifyCss())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('css/dist/'));
});

gulp.task('buildJs', function () {
    return gulp.src('js/src/*.js')
      .pipe(concat("concatenated.js"))
      .pipe(uglifyJs())
      .pipe(rename('script.min.js'))
      .pipe(gulp.dest('js/dist/'));
});

gulp.task('watch', function () {
    gulp.watch('css/src/*.css', ['buildCss']);
    gulp.watch('js/src/*.js', ['buildJs']);
});