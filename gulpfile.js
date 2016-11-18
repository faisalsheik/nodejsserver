var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

gulp.task('browser-sync', [], function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('serve', ['browser-sync'], function(){
  watch('./css/*.css').on('change', browserSync.reload);
  watch('./html/**/*.html').on('change', browserSync.reload);
  watch('./js/**/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
