'use strict';

const {series, src, dest} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const srcBasePath = './middleware/theme-chalk/src';
const outBasePath = './assets/element-ui/lib';

function compile() {
  return src(srcBasePath + "/*.scss")
  .pipe(sass.sync())
  .pipe(autoprefixer({
    browsers: ['ie > 9', 'last 2 versions'],
    cascade: false
  }))
  .pipe(cssmin())
  .pipe(dest(outBasePath + '/lib'));
}

function copyfont() {
  return src(srcBasePath + '/fonts/**')
  .pipe(cssmin())
  .pipe(dest(outBasePath + '/lib/fonts'));
}

exports.build = series(compile, copyfont);
