const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
});

gulp.task('default', gulp.series(['styles', 'watch']));