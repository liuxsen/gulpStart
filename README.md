 npm包安装
========

1.npm init

> 安装gulp

2.npm i gulp -save-dev

> 安装sprite

3.npm i gulp.spritesmith --save-dev

> 安装 gulp-minify-css

4. npm i gulp-minify-css --save-dev

> 安装 gulp-uglify （用于压缩js文件）

5. npm i gulp-uglify --save-dev

## 最后的package.json 文件
> 复制以下内容

```json
{
  "name": "liujianhui",
  "version": "1.0.0",
  "description": "gulp相关有用的npmg包整理",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^3.9.1",
    "gulp-minify-css": "^1.2.4",
    "gulp-uglify": "^1.5.3",
    "gulp.spritesmith": "^6.2.1"
  }
}
```


# 想要快速设置的话，复制package.json文件中的devDependencies
 > npm install 即可








