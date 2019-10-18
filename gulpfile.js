// =========================================================
// gulpfile.js
// =========================================================
// ------------------------------------------------ requires
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

// ------------------------------------------------- configs
var paths = {
  sass: {
    src: 'scss/*.scss',
    dest: 'styles',
    opts: {

    }
  }
};

// ---------------------------------------------- Gulp Tasks
gulp.task('sass', function () {
  return gulp.src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(paths.sass.dest))
});

// ------------------------------------ Gulp Testing Message
gulp.task('message', function(){
  console.log('It works!!');
});

// ---------------------------------------------- Gulp Watch
gulp.task('watch:styles', function () {
  gulp.watch(paths.sass.src, gulp.series('sass'));
});

gulp.task('watch', gulp.series('sass',
  gulp.parallel('watch:styles')
));


// -------------------------------------------- Default task
gulp.task('default', gulp.series('sass', 
  gulp.parallel('message', 'watch')
));