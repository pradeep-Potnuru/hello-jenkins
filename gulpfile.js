var gulp = require('gulp');

// plugins for gulp tasks
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runseq = require('run-sequence');


// gulp tasks
gulp.task('useref', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js',uglify()))
        .pipe(gulpIf('*.css',cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('clean:dist',function () {
    return del.sync('dist');
})


// synchronizing the tasks as each task depend on other. - build tasks
gulp.task('build', function (callback) {
    runseq('clean:dist','sass','useref', callback);
});

gulp.task('default', function (callback) {
    runseq('sass', callback);
});