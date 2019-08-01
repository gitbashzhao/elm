//当前文件的文件夹绝对路径
global.__basename = __dirname;

//导入配置文件
global.config = require(__basename + '/config/config.js');

//导入连接mysql数据库文件
global.connection = require(__basename + '/lib/db/db.config.js');

//导入请求路由文件
const route = require(__basename + '/route/route.js');

//加载第三方express web服务器模块
const express = require('express');

//加载第三方解析post请求的请求体参数
const bodyParser = require('body-parser');

//创建express实例
const app = new express();

//服务器端口
let port = config.server.port;

//解析post请求体
app.use(bodyParser.json({limit: '2048kb'})); //将post请求参数解析为json
app.use(bodyParser.urlencoded({ //false: 接受任何数据格式, true: 字符串或者数组
  extended: false,
  limit: '2048kb'
}));

//设置静态目录, 可以在浏览器请求静态文件，如 http://127.0.0.1:5001/images/topc1.jpg, 这样就可以跳过pubilc文件夹访问服务器的静态文件
app.use(express.static(__basename + '/public'));

//设置跨域资源资源共享 CORS: cross origin resource share
app.all('*', (req, res, next) => {
  //允许跨域地址, 可以使用 * 表示允许所有地址请求
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");

  //如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  //该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求。
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  //传递给下一个中间件或者路由处理, 如果不执行next方法，请求就无法执行下面的逻辑
  next();
});


//加载所有路由
route(app);

//处理404
app.use((req, res) => {
	res.status(404);
	res.send('找不到资源');
})

//处理500
app.use((err, req, res) => {
	if (err) {
		res.status(500);
		res.send('服务器报错');
	}
	
})

//配置服务器监听端口并且启动服务器
app.listen(port, () => {
	console.log(`server运行于${config.server.host}:${port}`);
})