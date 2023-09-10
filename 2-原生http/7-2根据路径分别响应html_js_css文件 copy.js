const http = require("http");
const fs = require("fs");

const serve = http.createServer((request, response) => {
    const { pathname } = new URL(request.url, "http://127.0.0.1");
    console.log(pathname);
    if (pathname === "/") {
        const html = fs.readFileSync(__dirname + "/7-响应/index.html");
        response.end(html);
    } else if (pathname === "/index.css") {
        const css = fs.readFileSync(__dirname + "/7-响应/index.css");
        response.end(css);
    } else if (pathname === "/index.js") {
        const js = fs.readFileSync(__dirname + "/7-响应/index.js");
        response.end(js);
    } else {
        response.end("<h1>Not Found</h1>");
    }
});
serve.listen(9000, () => {
    console.log("服务启动成功---");
});
