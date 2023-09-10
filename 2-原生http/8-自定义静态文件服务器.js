const http = require("http");
const fs = require("fs");

// 服务器访问这个地址： http://127.0.0.1:9000/index.html
const serve = http.createServer((request, response) => {
    const { pathname } = new URL(request.url, "http://127.0.0.1");
    const pathUrl = __dirname + "/8-page" + pathname;
    fs.readFile(pathUrl, (err, data) => {
        if (err) {
            response.statusCode = 500;
            response.end("读取文件失败~");
            return;
        }
        return response.end(data);
    });
});
serve.listen(9000, () => {
    console.log("服务启动成功---");
});
