const http = require("http");

const serve = http.createServer((request, response) => {
    // 1 设置响应状态码 默认为200
    // response.statusCode = 200;
    // response.statusCode = 404;

    // 2 设置响应信息 一般跟状态码一起配合很少单独使用
    // response.statusMessage = 'love'

    // 3 设置响应头
    // response.setHeader("content-type", "text/html;charset=utf-8");

    // 4 设置响应体
    response.write("love love ");

    //end 方法用来结束响应，只能被调用一次
    response.end();
});

serve.listen(9000, () => {
    console.log("服务启动成功----");
});
