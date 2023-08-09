const fs = require("fs");
// 查看文件资源状态信息 stat 是单词 status 的缩写
fs.stat("./files/22.jpg", (err, status) => {
  if (err) {
    console.log(`操作失败:${err}`);
    return;
  }
  //是否为文件
  console.log(status.isFile());
  //   是否为文件夹
  console.log(status.isDirectory());
  //   console.log(status);
});
/*
打印日志如下：
Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 101189893,
  size: 141015,
  blocks: 280,
  atimeMs: 1691298526978.604,
  mtimeMs: 1673262408616.5269,
  ctimeMs: 1691295142844.0454,
  birthtimeMs: 1673262408494.5933,
  atime: 2023-08-06T05:08:46.979Z,
  mtime: 2023-01-09T11:06:48.617Z,
  ctime: 2023-08-06T04:12:22.844Z,
  birthtime: 2023-01-09T11:06:48.495Z
}
*/
