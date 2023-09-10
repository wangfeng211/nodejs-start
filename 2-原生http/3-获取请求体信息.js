const http = require("http");

// 使用当前文件中的html 发送一个post 请求
const serve = http.createServer((request, reponse) => {
    let chunks = "";
    request.on("data", (c) => {
        // 此时接收的是一个buffer
        chunks += c;
    });
    request.on("end", () => {
        console.log(chunks.toString());
        reponse.end("hello ---");
    });
});

serve.listen(9000, () => {
    console.log("服务启动成功");
});

//return current data
const getCurrentTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
};
