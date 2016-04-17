var gulp = require('gulp');
// 获取 gulp-ruby-sass 模块
var sass = require('gulp-ruby-sass');
// 获取 gulp.spritesmith 模块 （用于生成sprite图片和css文件）
var spritesmith = require('gulp.spritesmith');
// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css');
// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');


//用于将图片合并成sprite文件并且生成相应的css文件
gulp.task('sprite', function () {
  var spriteData = gulp.src('images/*/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('path/to/output/'));
});

// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass', function() {
    return sass('sass/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('dist/css'))
});


// 压缩css文件
gulp.task('css', function () {
    // 1. 找到文件
    gulp.src('css/*.css')
    // 2. 压缩文件
        .pipe(minifyCSS())
    // 3. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
})

//压缩js文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 1. 找到文件
    gulp.src('js/*.js')
    // 2. 压缩文件
        .pipe(uglify())
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
})

// 任务汇总监听所有的任务，自动化。
gulp.task('auto', function () {
	// 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('sass/*.scss', ['sass'])
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch('css/*.css', ['css'])
    // 监听文件修改，当文件被修改则执行 sprite 任务
    gulp.watch('images/*/*.png', ['sprite'])
     // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('js/*.js', ['script'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 css 任务和 auto 任务
gulp.task('default', ['auto'])

