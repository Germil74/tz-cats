module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./src/**/*.html', $.gulp.series('html'));
    $.gulp.watch('./src/**/*.scss', $.gulp.series('scss:dev'));
    $.gulp.watch('./src/**/*.js', $.gulp.series('scripts:dev'));
    $.gulp.watch('./src/img/**/*', $.gulp.series('img:copy'));
    $.gulp.watch('./src/font/**/*', $.gulp.series('dev:font'));
  });

};
