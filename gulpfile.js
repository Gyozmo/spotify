var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

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

// gulp.task('browserSync', function(){
// browserSync({
//     server:{
//         baseDir: 'server'
//     },
// })
// });



//test

// gulp.task('default', ['browser-sync'], function(){

// });

// gulp.task('browser-sync', ['nodemon'], function(){
//     browserSync.init(null, {
//             proxy: "http://localhost:3000",
//             files: ["views/**/*.*"],
//             port: 3000,
//     });
// });

// gulp.task('nodemon', function(cb){
//     var started = false;

//     return nodemon({
//         script:'server.js'
//     }).on('start', function(){
//         //evite a nodemon de se lancer plusieurs fois
//         if(!started){
//             cb();
//             started = true;
//         }
//     });
// });

gulp.task('watch', ['browserSync', 'sass', 'nodemon'], function(){
gulp.watch('sass/**/*scss', ['sass']);
});




// faire fonctionner les routes avec gulp :'(
    //ne marche pas 
gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["views/**/*.*"],
        browser: "",
        port: 3000,
	});
});
gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});