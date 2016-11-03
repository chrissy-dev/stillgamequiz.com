var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    cp = require('child_process'),
    jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll',
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    nmq = require('gulp-no-media-queries'),
    changed = require('gulp-changed'),
    reload = browserSync.reload,
    runSequence = require('run-sequence'),
    include = require("gulp-include"),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    gutil = require('gulp-util'),
    debug = require('gulp-debug');

gulp.task('jekyll-build', function(done) {
    return cp.spawn(jekyll, ['build', '--watch', '--incremental'], {
            stdio: 'inherit'
        })
        .on('close', done);
});


gulp.task('dev-server', function() {
    return browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('share', function() {
    return browserSync.init({
        server: {
            baseDir: "_site"
        },
        ghostMode: false
    });
});

gulp.task('javascripts', function() {
    return gulp.src(['./_scripts/**/*.js', '!./_scripts/_libs/**/*.js'])
        .pipe(gulpif(!argv.force, changed('./cdn/scripts', {
            extension: '.js'
        })))
        .pipe(include({
            includePaths: "./_scripts"
        }))
        .on('error', function(err) {
            browserSync.notify(err.message, 10000);
            console.log(err);
            this.emit('end');
        })
        .pipe(uglify())
        .pipe(debug({
            title: 'JavaScripts Bundled:'
        }))
        .pipe(gulp.dest('./cdn/scripts'))
});

gulp.task('stylesheets', function() {
    return gulp.src('./_scss/**/*.scss')
        .pipe(gulpif(!argv.force, changed('./cdn/css', {
            extension: '.css'
        })))
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: [
                './_scss/'
            ]
        })).on('error', function(err) {
            browserSync.notify(err.message, 10000);
            console.log(err);
            this.emit('end');
        })
        .pipe(prefix(['last 15 versions', '> 5%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(debug({
            title: 'SCSS Compiled:'
        }))
        .pipe(gulp.dest('./cdn/css'))
});

gulp.task('ie', function() {
    return gulp.src(['./cdn/css/**/*.css', '!./cdn/css/**/*_ie.css'])
        .pipe(nmq({
            width: "1200px",
            type: "screen"
        }))
        .pipe(rename(function(path) {
            path.basename += '_ie';
            path.extname = '.css';
        }))
        .pipe(debug({
            title: 'Fuck Microsoft:'
        }))
        .pipe(gulp.dest('./cdn/css'))
});

gulp.task('watch', function() {
    gulp.watch('./_scss/**/*.scss', ['stylesheets']);
    gulp.watch('./_scripts/**/*.js', ['javascripts']);
    gulp.watch(['./_site/**/*', '!./_site/cdn/css/**/*_ie.css']).on("change", reload);
});

gulp.task('server', function(callback) {
    runSequence(['jekyll-build', 'dev-server', 'watch'], callback);
});

gulp.task('default', function() {
    console.log("try running 'gulp server'...");
});
