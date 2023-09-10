const http = require("http");
const fs = require("fs");

const serve = http.createServer((request, response) => {
    const html = fs.readFileSync("./7-响应.html");
    response.end(html);
});
serve.listen(9000, () => {
    console.log("服务启动成功---");
});
