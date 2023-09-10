const http = require("http");

//使用URL 方式提取查询字符串
const serve = http.createServer((request, response) => {
    let url = new URL(request.url, "http://127.0.0.1");
    console.log(url); //
    // 打印：
    //     URL {
    //   href: 'http://127.0.0.1/reg?keyword=hello',
    //   origin: 'http://127.0.0.1',
    //   protocol: 'http:',
    //   username: '',
    //   password: '',
    //   host: '127.0.0.1',
    //   hostname: '127.0.0.1',
    //   port: '',
    //   pathname: '/reg',
    //   search: '?keyword=hello',
    //   searchParams: URLSearchParams { 'keyword' => 'hello' },
    //   hash: ''
    // }

    // console.log(url.searchParams); // 输出 { 'keyword' => 'hello' }
    // 提取查询字符串
    console.log(url.searchParams.get("keyword")); // 返回 hello
    response.end("hello world");
});

serve.listen(9000, () => {
    console.log("服务启动成功");
});
