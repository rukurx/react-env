var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

// 既存のビルド済みファイルを削除する
gulp.task('cleanBuild', function (cb) {
  var rimraf = require('rimraf');
  rimraf('./src/js/', cb);
});

// jsxをトランスパイル+minifyする
gulp.task('build', ['cleanBuild'], function (cb) {
  return gulp.src('')
  .pipe(webpack(webpackConfig))
  .pipe(uglify())
  .pipe(gulp.dest(''));
});

// 監視実行
gulp.task('default', function() {
    // JSファイル監視
    gulp.watch('./src/jsx/**/*.jsx', ['build']);
});
