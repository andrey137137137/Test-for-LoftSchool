var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssGlobbing = require('gulp-css-globbing'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename"),
    minifyCSS = require('gulp-minify-css'),
    notify = require("gulp-notify"),
    jade = require('gulp-jade');

// gulp.task('connect', function () {
//   connect.server({
//     root: "app",
//     // port: 9000,
//     // livereload: true,
//     middleware: function (connect, options) {

//         options.rule = [/\.do/, /\.jsp/, /\.htm/];
// //or        options.rule = /\.do/; 

//         options.server = "127.0.0.1:8081";

//         var proxy = new Reproxy(options);

//         return [proxy];
//     }
//   });
// });

gulp.task('css', function () {
  gulp.src('scss/*.scss')
  // .pipe(cssGlobbing())
  .pipe(sass().on('error', sass.logError))
  .pipe(concatCss("bundle.css"))
  .pipe(autoprefixer({
      browsers: ['last 15 versions'],
      cascade: false
  }))
  .pipe(minifyCSS())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest('app/css'));
  // .pipe(connect.reload());
});

gulp.task('html', function () {
  var YOUR_LOCALS = {};

  gulp.src('index.jade')
  .pipe(jade({
    locals: YOUR_LOCALS
  }))
  .pipe(gulp.dest('app'));
  // .pipe(connect.reload());
});

// gulp.task('watch', function () {
//   gulp.watch('scss/*.scss', ['css']);
//   gulp.watch('index.jade', ['html']);
// });

// gulp.task('default', ['connect', 'html', 'css', 'watch']);
// gulp.task('default', ['html', 'css', 'watch']);
gulp.task('default', ['html', 'css']);