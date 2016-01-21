var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpUtil = require('gulp-util');
var del = require('del');

var bases = {
  build: 'build',
  bower: './bower_components'
}

var paths = {
  jquery: bases.bower + '/jquery/dist/jquery.js',
  bootstrap: bases.bower + '/bootstrap-sass',
  styles: 'stylesheets/**/*.scss',
  scripts: 'javascripts/**/*.js',
  html: 'index.html',
  assets: bases.build + '/assets'
};

gulp.task('clean', function() {
  return del(bases.build);
});

gulp.task('css', ['clean'], function() {
  return gulp.src(paths.styles)
  .pipe(sass({
    includePaths: [paths.bootstrap + '/assets/stylesheets'],
  }))
  .pipe(cssmin())
  .pipe(gulp.dest(paths.assets));
});

gulp.task('js', ['clean'], function() {
  return gulp.src([paths.jquery, paths.scripts])
  .pipe(uglify().on('error', gulpUtil.log))
  .pipe(concat('application.js'))
  .pipe(gulp.dest(paths.assets));
});

gulp.task('html', ['clean'], function() {
  return gulp.src(paths.html)
  .pipe(gulp.dest(bases.build));
});

gulp.task('default', ['clean', 'css', 'js', 'html']);
