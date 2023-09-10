const http = require("http");
const url = require("url");

const serve = http.createServer((request, response) => {
    // 1 。//获取请求路径
    // console.log(request.url);

    // 在浏览器中输入 http://127.0.0.1:9000/?keyword=hello 并按回车
    // 2、获取查询字符串
    // url.parse(request.url) 返回一个对象
    // console.log(url.parse(request.url));
    // 输出：
    //   Url {
    //   protocol: null,
    //   slashes: null,
    //   auth: null,
    //   host: null,
    //   port: null,
    //   hostname: null,
    //   hash: null,
    //   search: null,
    //   query: null,
    //   pathname: '/favicon.ico',
    //   path: '/favicon.ico',
    //   href: '/favicon.ico'
    // }

    // url.parse(request.url, true) 解析url 在query 中获取查询字符串
    const query = url.parse(request.url, true).query;
    // console.log(query);
    // 输出一个对象：
    //  {
    //      keyword: "hello";
    //  }

    // console.log(query["keyword"]);//打印 hello

    response.end("hello world");
});

serve.listen(9000, () => {
    console.log("服务启动成功");
});
