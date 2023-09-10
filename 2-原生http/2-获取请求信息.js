const http = require("http");

const serve = http.createServer((request, response) => {
    //获取请求方法 method
    // console.log(request.method);

    // 获取请求路径 url
    // console.log(request.url); // 只包含路径和查询字符串 不包含协议 域名 和 端口

    //获取http httpVersions 协议版本号
    // console.log(request.httpVersion); // 打印 1.1

    // 获取 请求头 headers 对象
    console.log(request.headers);

    // headers 打印如下：
    //   {
    //   host: '127.0.0.1:9000',
    //   connection: 'keep-alive',
    //   'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    //   'sec-ch-ua-mobile': '?0',
    //   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    //   'sec-ch-ua-platform': '"macOS"',
    //   accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    //   'sec-fetch-site': 'same-origin',
    //   'sec-fetch-mode': 'no-cors',
    //   'sec-fetch-dest': 'image',
    //   referer: 'http://127.0.0.1:9000/',
    //   'accept-encoding': 'gzip, deflate, br',
    //   'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    //   cookie: 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218a21389f012b8-02edcf4216e561c-1a525634-2007040-18a21389f021012%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22url%E7%9A%84domain%E8%A7%A3%E6%9E%90%E5%A4%B1%E8%B4%A5%22%2C%22%24latest_search_keyword%22%3A%22url%E7%9A%84domain%E8%A7%A3%E6%9E%90%E5%A4%B1%E8%B4%A5%22%2C%22%24latest_referrer%22%3A%22url%E7%9A%84domain%E8%A7%A3%E6%9E%90%E5%A4%B1%E8%B4%A5%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThhMjEzODlmMDEyYjgtMDJlZGNmNDIxNmU1NjFjLTFhNTI1NjM0LTIwMDcwNDAtMThhMjEzODlmMDIxMDEyIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218a21389f012b8-02edcf4216e561c-1a525634-2007040-18a21389f021012%22%7D'
    // }

    response.end("hello ---");
});

serve.listen(9000, () => {
    console.log("服务已经启动");
});
