const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('browser-sync', function (done) {
    browserSync({
        server: {
            baseDir: "./dist/"
            , index: "index.html"
        }
    });
    done();
});

gulp.task('bs-reload', function (done) {
    browserSync.reload();
    done()
});
