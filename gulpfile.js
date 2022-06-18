global.$ = {
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  sass: require('gulp-sass')(require('sass')),
  webpack: require("webpack-stream"),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  console.log(taskPath);
  require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
  'clean',
  $.gulp.parallel('html', 'scss:dev', 'scripts:dev', 'img:copy', 'dev:font')
  ));

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel('html', 'scss:build', 'scripts:build', 'img:copy-build', 'build:font')));

$.gulp.task('default', $.gulp.series(
  'dev',
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
