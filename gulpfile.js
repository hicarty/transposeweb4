// Load plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

function styles() {
    sourceMap: false
    return gulp
        .src('./Sass/Application.scss')
        //.on('error', errorLog)
        .pipe(sass())
        .pipe(rename('site.css'))
        .pipe(gulp.dest('./wwwroot/css'));
}

gulp.task('sass', function () {
      return gulp
        .src('./Sass/Application.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('site.css'))
        .pipe(gulp.dest('./wwwroot/css'));
});

//Watch Task
function watchFiles() {
    gulp.watch('./Sass/*.scss', gulp.series('sass'));
}

// define complex task
const start = gulp.series(styles, watchFiles);

// export tasks
exports.default = gulp.series(styles, watchFiles);