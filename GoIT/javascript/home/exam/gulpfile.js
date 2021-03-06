var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    concatCss = require('gulp-concat-css'),
    uglifycss = require('gulp-uglifycss'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;
const filter = require('gulp-filter');

var path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/'
    },
    src: { 
        html: 'src/*.html', 
        jsV: 'src/js/vendors/vendors.js',
        js: 'src/js/script.js',
        style: [
                    'src/css/reset.css',
                    'src/css/carousel_style.css',
                    'src/css/styles.css'
                ]
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/styles/*.scss'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html)) 
        .pipe(reload({stream: true})); 
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
     //   .pipe(rigger()) 
        .pipe(uglify()) 
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest(path.build.js)) 
        .pipe(reload({stream: true})); 
});

gulp.task('vendorjs:build', function () {
    gulp.src(path.src.jsV) 
        .pipe(rigger()) 
        .pipe(uglify()) 
        .pipe(rename("vendor.min.js"))
        .pipe(gulp.dest(path.build.js)) 
        .pipe(reload({stream: true})); 
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) 
        .pipe(concatCss("main.css"))
        .pipe(uglifycss({"maxLineLen": 80,"uglyComments": true}))
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('scripts', function() {
  return gulp.src('src/js/vendors/*.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('src/js/'));
});

gulp.task('uglify', function() {
  return gulp.src('src/js/vendor.js')
    .pipe(uglify())
    .pipe(rename("vendor.min.js"))
    .pipe(gulp.dest('src/js/'));
});

gulp.task('concatCss', function () {
  return gulp.src(['src/css/reset.css','src/css/styles.css', 'src/css/carousel_style.css'])
    .pipe(concatCss("main.css"))
   // .pipe(uglifycss())
    //.pipe(rename("main.min.css"))
    .pipe(gulp.dest('build/css/'));
});
gulp.task('concatCss_ie', function () {
  return gulp.src(['src/css/ie8.css','src/css/ie8_carousel.css'])
    .pipe(concatCss("main_ie.css"))
   // .pipe(uglifycss())
    //.pipe(rename("main.min.css"))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('mincss', function () {
  gulp.src('build/css/main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest('build/css/'));
});
gulp.task('mincss_ie', function () {
  gulp.src('build/css/main_ie.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(rename("ie.min.css"))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('sass', function () {
  gulp.src('src/css/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', function () {
  gulp.watch('src/css/styles/*.scss', ['sass']);
});

gulp.task('build', [
    'js:build', 'style:build', 'vendorjs:build'
]);

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);