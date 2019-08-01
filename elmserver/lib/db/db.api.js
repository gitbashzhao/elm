//导入第三方操作数据库模块，该模块的ninvoke的方法返回一个promise, 所以在任何时候都可以得到该结果
const Q = require('q');

class SqlQuery {

	constructor() {}

	query(sql) {
		//Q.ninvoke(数据库连接实例, 固定写法query, 操作数据库的sql数据);
		return Q.ninvoke(connection, 'query', sql);
	}

}

//导出操作数据实例
module.exports = new SqlQuery();