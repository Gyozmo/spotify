var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src('sass/**/*scss')
    .pipe(sass()) //gulpSASS
    .pipe(gulp.dest('./stylesheets'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

// gulp.task('watch', function(){
//     gulp.watch('sass/**/*scss', ['sass']);
// });

gulp.task('browserSync', function(){
browserSync({
    server:{
        baseDir: 'server'
    },
})
});

gulp.task('watch', ['browserSync', 'sass'], function(){
gulp.watch('sass/**/*scss', ['sass']);
});