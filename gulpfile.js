const gulp = require("gulp")
const requireDir = require('require-dir')

requireDir('./gulptask',{recurse: true});

gulp.task('default',
    gulp.series('browser-sync',
        gulp.parallel(
            'assemble', 'copy', 'watch'
        )
    )
);

gulp.task('build', gulp.series('assemble', 'copy'))


// const gulp = require('gulp');
// const browserSync = require('browser-sync');
// const less = require('gulp-less');
// const cssmin = require('gulp-cssmin');
// const rename = require('gulp-rename');
//
// gulp.task('browser-sync', function (done) {
//     browserSync({
//         server: {
//             baseDir: "./htdocs/"       //対象ディレクトリ
//             , index: "index.html"      //インデックスファイル
//         }
//     });
//     done();
// });
//
// //
// //ブラウザリロード
// //
// gulp.task('bs-reload', function (done) {
//     browserSync.reload();
//     done()
// });
//
// //
// // build
// //
// gulp.task('less', function(done) {
//     gulp.src('./htdocs/css/less/*.less')
//         .pipe(less())
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('./htdocs/css/'))
//     done();
// });
//
// //
// //監視ファイル
// //
// gulp.task('default', gulp.series('less', 'browser-sync', function (done) {
//     gulp.watch("./htdocs/css/less/*.less", gulp.task('less'));
//     gulp.watch("./htdocs/*.html", gulp.task('bs-reload'));
//     gulp.watch("./htdocs/css/*.css", gulp.task('bs-reload'));
//     gulp.watch("./htdocs/js/*.js", gulp.task('bs-reload'));
//     done();
// }));
