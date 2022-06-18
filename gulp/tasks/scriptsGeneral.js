module.exports = function() {
    $.gulp.task('scripts:dev', () => {
        return $.gulp.src("./src/main.js")
          .pipe($.webpack({
              mode: 'development',
              output: {
                  filename: 'script.js'
              },
              watch: false,
              devtool: "source-map",
              module: {
                  rules: [
                      {
                          test: /\.m?js$/,
                          exclude: /(node_modules|bower_components)/,
                          use: {
                              loader: 'babel-loader',
                              options: {
                                  presets: [['@babel/preset-env', {
                                      debug: true,
                                      corejs: 3,
                                      useBuiltIns: "usage"
                                  }],
                                    "@babel/react"]
                              }
                          }
                      }
                  ]
              }
          }))
          .on("error", $.gp.notify.onError((error) => {
              return{
                  title: "Ошибка в js скриптах",
                  message: error.message
              }
          }))
          .pipe($.gulp.dest('public/js/'));
    });

    $.gulp.task('scripts:build', () => {
        return $.gulp.src("./src/main.js")
          .pipe($.gp.debug({title: 'js:'}))
          .pipe($.gp.webpack({
              mode: 'production',
              output: {
                  filename: 'script.js'
              },
              watch: false,
              devtool: "source-map",
              module: {
                  rules: [
                      {
                          test: /\.m?js$/,
                          exclude: /(node_modules|bower_components)/,
                          use: {
                              loader: 'babel-loader',
                              options: {
                                  presets: [['@babel/preset-env', {
                                      debug: true,
                                      corejs: 3,
                                      useBuiltIns: "usage"
                                  }],
                                    "@babel/react"]
                              }
                          }
                      }
                  ]
              }
          }))
          .pipe($.gulp.dest('public/js/'));
    });
};
