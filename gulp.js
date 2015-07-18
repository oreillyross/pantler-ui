var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    plumber = require("gulp-plumber");

gulp.task('default', function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'output.js'
      }));
  return tsResult.js.pipe(gulp.dest('built/local'));
});
