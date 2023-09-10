const path = require("path");

// 1、resolve 中文释义 解决，这里是拼接路径的意思
// 不同系统路径分隔符不同 Window 系统是\ Linux系统是/
// console.log(path.resolve(__dirname, "index.html"));

// 2、sep 获取当前系统路径分隔符
// console.log(path.sep);

// 3、parse 解析路径并返回一个对象
// /Users/wf/Documents/projects/node/nodejs-start/1-fs/index.html
const pathStr =
    "/Users/wf/Documents/projects/node/nodejs-start/1-fs/index.html";
/*
{
  root: '/',
  dir: '/Users/wf/Documents/projects/node/nodejs-start/1-fs',
  base: 'index.html',
  ext: '.html',
  name: 'index'
}
*/
// console.log(
//     path.parse(pathStr)
// );

// 4、 basename 获取路径中的文件名
// console.log(path.basename(pathStr)); // 打印 index.html

// 5、 dirname 获取路径中的目录名
// console.log(path.dirname(pathStr)); //打印 /Users/wf/Documents/projects/node/nodejs-start/1-fs

// 6、获取路径扩展名
// console.log(path.extname(pathStr));//打印 .html
