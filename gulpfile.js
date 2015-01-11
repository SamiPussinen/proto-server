var gulp = require('gulp');
var coffee = require('gulp-coffee');

gulp.task('server', function() {
	gulp.src('src/js/*.coffee')
		.pipe(coffee())
		.pipe(gulp.dest('.'));
});

gulp.task('default', ['server']);
