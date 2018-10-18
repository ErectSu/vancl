const gulp = require('gulp'),
    connect = require('gulp-connect'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    cleanCSS = require('gulp-clean-css'),
    imageMin = require('gulp-imagemin');

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    })
})
gulp.task('all', function () {
    gulp.src('app/**/*.*')
        .pipe(gulp.dest('dist'))
})
gulp.task('html', function () {
    gulp.src('app/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
})

gulp.task('js', function () {
    gulp.src('app/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())

})

gulp.task('css', function () {
    gulp.src('app/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
})

gulp.task('img', function () {
    gulp.src('app/images/**/*.*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload())
})


gulp.task('watch', function () {
    gulp.watch(['app/**/*.html'], ['html']);
    gulp.watch(['app/**/*.js'], ['js']);
    gulp.watch(['app/**/*.css'], ['css']);
    gulp.watch(['app/images/**/*.*'], ['img']);
})

gulp.task('build', ['all', 'html', 'js', 'css', 'img'])
// gulp.task('default', [ 'build','connect', 'watch'])
gulp.task('default', [ 'connect', 'watch'，'build'])