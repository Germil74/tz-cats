module.exports = function() {
  $.gulp.task('html', () => {
    return $.gulp.src('src/index.html')
      .pipe($.gp.debug({title: 'html:src'}))
      // .pipe($.gp.rigger())
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'html',
          message: error.message
        };
      }))
      .pipe($.gulp.dest('public/'))
      .on('end', $.browserSync.reload);
  });
};
