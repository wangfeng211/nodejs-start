const fs = require("fs");
// 一 文件写入
//1.1、异步写入
// fs.writeFile("./files/a.txt", "三人行，则必有我师", (err) => {
//   if (err) {
//     console.log(`写入失败:${err}`);
//     return;
//   }
//   console.log("写入成功");
// });

//1.2、 同步写入
// fs.writeFileSync("./files/b.txt", "测试同步写入");

// 1.3、追加写入(异步)
// fs.appendFile("./files/a.txt", "，择其善者而从之", (err) => {
//   if (err) {
//     console(`追加失败:${err}`);
//     return;
//   }
//   console.log("追加成功");
// });

// 1.4、追加写入（同步）
// fs.appendFileSync("./files/a.txt", "\r\n则其不善者而改之2");

//1.5、使用writeFile 实现追加写入的效果, flag: a , 感觉是append 的意思
// 使用场景 日志追加写入 也可以使用appendFile
// fs.writeFile("./files/a.txt", "\r\nlove love love2", { flag: "a" }, (err) => {
//   if (err) {
//     console.log("追加失败");
//     return;
//   }
//   console.log("追加写入成功");
// });
// ------------------------------------------------------------------------------------------------------------------------
//2 文件读取
// 读取文件场景
/*
电脑开机后将文件读取到内存
打开文件
查看图片 打开视频
查看日志
上传文件
*/
// 2.1
// fs.readFile("./files/a.txt", (err, data) => {
//   if (err) {
//     console.log(`读取失败:${err}`);
//     return;
//   }
//   //读取到buffer
//   console.log(data.toString());
// });
// const data = fs.readFileSync("./files/a.txt");
// console.log(data.toString());

// 2.2 流式读取
// const rs = fs.createReadStream("./files/22.jpg");
// rs.on("data", (chunk) => {
//   // 默认读取的长度为65536字节 （64kb）
//   console.log(chunk.length);
//   //   console.log(chunk.toString())
// });
// rs.on("end", () => {
//   console.log("读取完毕");
// });

// ------------------------------------------------------------------------------------------------------------------------
// 3.文件复制练习
// 3.1 使用fileRead 和 fileWrite
// const data = fs.readFileSync("./files/22.jpg");
// fs.writeFileSync("./files/22-copy1.jpg", data);

// 3.2 使用流式读取 和 写入
// const rs = fs.createReadStream("./files/22.jpg");
// const ws = fs.createWriteStream("./files/22-copy3.jpg");

// 3.2.1 使用监听方式写入
// rs.on('data', chunk =>{
//     ws.write(chunk)
// })
// rs.on('end',()=>{
//     console.log('写入完毕')
// })

// 3.2.2 使用pipe 管道方式写入
// rs.pipe(ws);
