const gulp = require('gulp')
gulp.task('watch', function (done) {
    gulp.watch('./src/asset/css/less/*.less', gulp.series('assemble', 'copy'))
    gulp.watch('./src/asset/css/*.css', gulp.series('assemble', 'copy'))
    gulp.watch('./src/asset/img/**', gulp.series('assemble', 'copy'))
    gulp.watch('./src/asset/js/**', gulp.series('assemble', 'copy'))
    gulp.watch('./src/asset/video/**', gulp.series('assemble', 'copy'))
    gulp.watch('./src/data/*.yml', gulp.series('assemble', 'copy'))
    gulp.watch('./src/doc/*.hbs', gulp.series('assemble', 'copy'))
    gulp.watch('./src/layouts/*.hbs', gulp.series('assemble', 'copy'))
    gulp.watch('./src/partials/*.hbs', gulp.series('assemble', 'copy'))
    gulp.watch("./dist/**/*", gulp.task('bs-reload'))
    done()
})


// gulp.task('default', gulp.series('less', 'browser-sync', function (done) {
//     gulp.watch("./htdocs/css/less/*.less", gulp.task('less'));
//     gulp.watch("./htdocs/*.html", gulp.task('bs-reload'));
//     gulp.watch("./htdocs/css/*.css", gulp.task('bs-reload'));
//     gulp.watch("./htdocs/js/*.js", gulp.task('bs-reload'));
//     done();
// }));
