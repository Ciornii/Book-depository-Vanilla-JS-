const autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create(),
      cleanCss = require('gulp-clean-css'),
      del = require('del'),
      htmlmin = require('gulp-htmlmin'),
      cssbeautify = require('gulp-cssbeautify'),
      gulp = require('gulp'),
      sass = require('gulp-sass'),
      wait = require('gulp-wait'),
      fileinclude = require('gulp-file-include'),
      plumber = require('gulp-plumber'),
      webpackStream = require('webpack-stream');
      CircularDependencyPlugin = require('circular-dependency-plugin'),
      DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin"),
      eslint = require('gulp-eslint'),
      rename = require("gulp-rename"),
      imagemin = require('gulp-imagemin');


// ----------------------------------------------------------------------------------------------------------
// -------------------------------------------   Define paths   
const paths = {
    dist: {
        base: './dist/',
        css: './dist/styles',
        js: './dist/js',
        html: './dist/',
        assets: './dist/assets'
    },
    base: {
        base: './',
        node: './node_modules'
    },
    src: {
        base: './src/',
        css: './src/styles',
        js: './src/js',
        assets: './src/assets/**/*.*',
        fonts: './src/assets/fonts',
        icons: './src/assets/icons',
        img: './src/assets/img',
        pdf: './src/assets/pdf',
        partials: './src/partials/**/*.html',
        scss: './src/styles'
    }
};


// Clean
gulp.task('clean:dist', function () {
    return del([paths.dist.base]);
});

// ----------------------------------------------------------------------------------------------------------
// --------------------------------------------------   HTML development
gulp.task('copy:html', function () {
    return gulp.src([paths.src.base + '*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/partials/',
            context: {
                environment: 'development'
            }
        }))
        .pipe(gulp.dest(paths.dist.html))
        .pipe(browserSync.stream());
});


// --------------------------------------------------   HTML production

gulp.task('minify:html', function () {
    return gulp.src([paths.dist.base + '*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/partials/',
            context: {
                environment: 'production'
            }
        }))
        .pipe(gulp.dest(paths.dist.base))
        .pipe(browserSync.stream());
});


// ----------------------------------------------------------------------------------------------------------
// --------------------------------------------------   Styles
gulp.task('compile:scss', function () {
    return gulp.src([paths.src.scss + '/style.scss'])
        .pipe(wait(500))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 0%, last 2 versions']
        }))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(browserSync.stream());
});

gulp.task('beautify:css', function () {
    return gulp.src([
            paths.dev.css + '/style.css'
        ])
        .pipe(cssbeautify())
        .pipe(gulp.dest(paths.dist.css))
        .pipe(browserSync.stream());
});

gulp.task('minify:css', function () {
    return gulp.src([
            paths.dist.css + '/style.css'
        ])
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.dist.css))
        .pipe(browserSync.stream());
});


// ----------------------------------------------------------------------------------------------------------
// --------------------------------------------------   JS development
// Bundle and minify js
gulp.task('js:main', function () {
    return gulp.src([
            paths.src.js + '/**/*.js',
            paths.src.js + '/main.js'
        ])
        .pipe(plumber())
        .pipe(webpackStream({
            mode: 'development',
            output: {
                filename: '[name].js',
            },
            devtool: "source-map",
            plugins: [
                new CircularDependencyPlugin(),
                new DuplicatePackageCheckerPlugin()
            ]
        }))
        .pipe(gulp.dest(paths.dist.js))
        .on("end", browserSync.reload);
})

// --------------------------------------------------   JS production
// Bundle and minify js
gulp.task('js:main:build', function () {
    return gulp.src([
            paths.src.js + '/**/*.js',
            paths.src.js + '/main.js'
        ])
        .pipe(plumber())
        .pipe(webpackStream({
            mode: 'production',
            output: {
                filename: '[name].js',
            },
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', {
                                debug: true,
                                corejs: 3,
                                useBuiltIns: "usage"
                            }]]
                        }
                    }
                }]
            },
            plugins: [
                new CircularDependencyPlugin(),
                new DuplicatePackageCheckerPlugin()
            ]
        }))
        .pipe(gulp.dest(paths.dist.js))
        .on("end", browserSync.reload);
})


// ----------------------------------------------------------------------------------------------------------
// --------------------------------------------------   Assets  
gulp.task('copy:fonts', function () {
    return gulp.src([paths.src.fonts + '/*', paths.src.fonts + '/**/*'])
        .pipe(gulp.dest(paths.dist.assets + '/fonts'))
        .pipe(browserSync.stream());
});

gulp.task('copy:icons', function () {
    return gulp.src([paths.src.icons + '/*', paths.src.icons + '/**/*'])
        .pipe(gulp.dest(paths.dist.assets + '/icons'))
        .pipe(browserSync.stream());
});

gulp.task('copy:img', function () {
    return gulp.src([paths.src.img + '/*', paths.src.img + '/**/*'])
        .pipe(gulp.dest(paths.dist.assets + '/img'))
        .pipe(browserSync.stream());
});

gulp.task('compress:img', function () {
    return  gulp.src([paths.src.img + '/*', paths.src.img + '/**/*'])
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 7}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest(paths.dist.assets + '/img'));
});

gulp.task('copy:db', function () {
    return gulp.src([paths.src.base + '/db.json'])
        .pipe(gulp.dest(paths.dist.base))
        .pipe(browserSync.stream());
});

gulp.task('copy:pdf', function () {
    return gulp.src([paths.src.pdf + '/*', paths.src.pdf + '/**/*'])
        .pipe(gulp.dest(paths.dist.assets + '/pdf'))
        .pipe(browserSync.stream());
});



// ----------------------------------------------------------------------------------------------------------
// --------------------------------------------------  Tasks 

// build
gulp.task('build', gulp.series('clean:dist', 'copy:html', 'minify:html', 'copy:db', 'copy:img', 'copy:fonts', 'copy:icons', 'compile:scss', 'minify:css', 'js:main:build'));

// serve
gulp.task('serve', gulp.series('copy:html', 'copy:db', 'copy:img', 'copy:fonts', 'copy:icons', 'copy:pdf', 'compile:scss', 'js:main', function () {
    browserSync.init({
        server: paths.dist.base
    });

    gulp.watch([paths.src.base + '*.html', paths.src.partials], gulp.series('copy:html'));
    gulp.watch([paths.src.base + '/db.json'], gulp.series('copy:db'));
    gulp.watch([paths.src.fonts + '/*', paths.src.fonts + '/**/*'], gulp.series('copy:fonts'));
    gulp.watch([paths.src.icons + '/*.svg', paths.src.icons + '/**/*.svg'], gulp.series('copy:icons'));
    gulp.watch([paths.src.img + '/*', paths.src.img + '/**/*'], gulp.series('copy:img'));
    gulp.watch([paths.src.assets + '/pdf/*', paths.src.assets + '/pdf/**/*'], gulp.series('copy:pdf'));
    gulp.watch([paths.src.scss + '/scss/**/*.scss', paths.src.scss + '/style.scss'], gulp.series('compile:scss'));
    gulp.watch([paths.src.js + '/**/*.js', paths.src.js + '/*.js', paths.src.js + '/main.js'], gulp.series('js:main'));
}));

// default
gulp.task('default', gulp.series('serve'));