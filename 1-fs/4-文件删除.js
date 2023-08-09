const fs = require("fs");
//文件删除
//unline 同步删除 unlineSynk
// fs.unlink("./files/a.txt", (err) => {
//   if (err) {
//     console.log("操作失败");
//     return;
//   }
//   console.log("操作成功");
// });

// rm node V14.4以上版本 同步删除 rmSync
fs.rm("./files/b.txt", (err) => {
  if (err) {
    console.log("操作失败");
    return;
  }
  console.log("操作成功");
});
