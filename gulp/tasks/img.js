module.exports = () => {
    $.gulp.task('img:copy', () => {
        return $.gulp.src('./src/img/**/*')
            .pipe($.gulp.dest('./public/img/'))
            .on('end', $.browserSync.reload);
    });
    $.gulp.task('img:copy-build', () => {
        return $.gulp.src('./src/img/**/*')
            .pipe($.gulp.dest('./public/img/'));

    });
};
