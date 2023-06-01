/*!
* Jsinh Terse - Gulp Package (https://jsinh.in/)
* Copyright 2023 Jaspalsinh Chauhan
* Licensed under MIT
* Available Main Task Command : gulp, zip
*/
'use strict';

/*
=============================
Include Gulp & Plugins
=============================
*/
const 
    fs = require('fs'),
    gulp = require('gulp'),
    clean = require('gulp-clean'),
    size = require('gulp-size'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');
    
/*
=============================
Variables & Constants
=============================
*/
var file_name = 'jsinh-terse.zip';
var css_files = [
    './assets/css/styles.css'
];
var js_files = [
    './assets/js/app.js',
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js'
];

async function main_js() {
    await gulp.src(js_files)
        .pipe(concat('build.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/js'))
        .pipe(size());
}

// Clean dist artifacts
async function main_rm() {
    await gulp.src(
        './assets/js/*.min.js', 
        { read: false})
        .pipe(clean());
}

exports.default 
    = gulp.series(
        main_rm
        ,main_js
    );