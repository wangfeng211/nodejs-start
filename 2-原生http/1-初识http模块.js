const http = require("http");

// request 浏览器发送的请求对象
// response 服务端响应对象
const serve = http.createServer((request, response) => {
    // 设置content-type 解决中文乱码问题
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("你好");
});
serve.listen(9000, () => {
    console.log("服务启动成功");
});
