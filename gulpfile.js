/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'js'
*/
gulp.task('js', function () {
  gulp.src('src/js/*.js')
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('src/js/'))
});

gulp.task('estaticos', ['js']);
