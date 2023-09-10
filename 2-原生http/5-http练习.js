// 当请求方法为get 且请求路径为reg  返回reg
// 当请求方法为 get 且请求路径为login 返回login

const http = require("http");

const serve = http.createServer((request, response) => {
    const { method } = request;
    const url = new URL(request.url, "http://127.0.0.1");
    const { pathname } = url;
    console.log(`---${method}---${pathname}`);
    if (method === "GET" && pathname === "/reg") {
        response.end("reg");
    } else if (method === "GET" && pathname === "/login") {
        response.end("login");
    } else {
        response.end("hello http---");
    }
});

serve.listen(9000, () => {
    console.log("服务启动成功---且端口为9000---");
});
