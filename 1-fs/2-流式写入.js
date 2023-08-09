const fs = require("fs");

// 1. 流式写入
// writeStream 相对于 writeFile 更适合大文件写入或者频繁写入
// writeFile 一次性写入 写完后关闭
/*文件写入的使用场景;
文件下载;
安装程序;
下载视频;
vs code 保存文件;
需要持久化保存文件时 
*/
// const ws = fs.createWriteStream("./files/观书有感.txt");
// //执行write
// ws.write("半亩方塘一鉴开\r\n");
// ws.write("天光云影共徘徊\r\n");
// //关闭通道 close 可写可不写
// ws.close();

// 2. 流式读取
