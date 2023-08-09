const fs = require("fs");
//1.1 创建文件夹
// fs.mkdir("./html", (err) => {
//   if (err) {
//     console.log(`操作失败:${err}`);
//     return;
//   }
//   console.log("操作成功");
// });

//1.2 递归创建 recursive：递归
// fs.mkdir("./a/b/c", { recursive: true }, (err) => {
//   if (err) {
//     console.log(`操作失败:${err}`);
//     return;
//   }
//   console.log("操作成功");
// });

// 1.3读取文件夹 readdir readdirSync 同步读取
// fs.readdir("./files", (err, data) => {
//   if (err) {
//     console.log(`读取失败：${err}`);
//     return;
//   }
//   console.log(data);
// });

// 1.4 删除文件夹 不推荐使用
// fs.rmdir("./a", { recursive: true }, (err) => {
//   if (err) {
//     console.log(`删除失败：${err}`);
//     return;
//   }
//   console.log(`删除成功`);
// });

// 1.5 rm 删除 推荐使用
// fs.rm("./a/b/c", { recursive: true }, (err) => {
//   if (err) {
//     console.log(`删除失败：${err}`);
//     return;
//   }
//   console.log(`删除成功`);
// });
