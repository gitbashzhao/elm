//导入第三方数据库模块
const mysql = require('mysql');

//配置数据库
let connection = mysql.createConnection(config.mysqlOptions);

//连接数据库
connection.connect();

//导出数据库连接实例, 该实例会在操作数据库使用，比如在/lib/db/db.api.js使用
module.exports = connection;