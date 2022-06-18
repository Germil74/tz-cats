module.exports = () => {
  $.gulp.task('dev:font', () => {
    return $.gulp.src('./src/font/**/*')
      .pipe($.gulp.dest('./public/font/'))
      .on('end', $.browserSync.reload);
  });
  $.gulp.task('build:font', () => {
    return $.gulp.src('./src/font/**/*')
      .pipe($.gulp.dest('./public/font/'));

  });
};
