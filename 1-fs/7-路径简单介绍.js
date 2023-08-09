const fs = require("fs");

// 1. 相对路径
//  ./index.html 在当前文件夹下
// fs.writeFileSync("./index.html", "path test");

//  跟上面想比 少了 ./  意思是相同的， 也是相对路径，也是在当前文件夹下
// fs.writeFileSync("index.html", "path test");

// 2. 绝对路径
// /Users/wf/Desktop/index.html(当前系统为MAC系统) 桌面上的index.html
// fs.writeFileSync("/Users/wf/Desktop/index.html", "test");
// 注意： 绝对路径有一个bug: 在其他文件夹下执行 node 命令会报错，
// 所以 一般拼接绝对路径使用__dirname
fs.writeFileSync(__dirname + "/index.html", "love");

// /index.html 盘符根路径下的index.html（当前MAC系统执行报错，权限问题）
// fs.writeFileSync("/index.html", "test");
