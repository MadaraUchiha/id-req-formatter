var gulp = require('gulp');
var del = require('del');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var to5 = require('gulp-6to5');

gulp.task('clean', function(done) {
    del(['dist/**/*', 'target/**/*'], {force: true}, done);
});

gulp.task('lint', function() {
    return gulp.src(['**/*.js', '!node_modules/**/*.js', '!dist/**/*.js'])
        .pipe(jshint({
            esnext: true
        }))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('build', ['clean'], function() {
    gulp.src(['node_modules/knockout/build/output/knockout-latest.js'])
        .pipe(gulp.dest('dist/lib'));

    gulp.src(['client/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(to5())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['clean', 'lint', 'build']);