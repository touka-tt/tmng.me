const gulp = require('gulp')
gulp.task('copy', gulp.series(function () {
    return gulp.src('./src/asset/**')
        .pipe(gulp.dest('./dist/'))
}))
