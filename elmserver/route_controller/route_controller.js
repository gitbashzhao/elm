//导入工具库
const utils = require(__basename + '/utils/utils.js');

//导入操作数据库api文件
const API = require(__basename + '/api/api.js');

//导入操作数据库的sql语句文件
const SQL = require(__basename + '/lib/db/sql.js');


//路由控制类
class RouteController {

	constructor() {}

	//查询用户信息控制器
	userInfoController(req, res) {
		//req: 请求对象
		//res: 响应对象

		//可以使用req.query获取get请求参数
		//可以使用req.body获取post请求参数

		//我在这里直接写固定了, 实际上需要在前端传递参数过来的
		//获取sql语句
		let sql = SQL.findUserInfoSQL(req.query);

		console.log('sql ==> ', sql);

		API.query(sql)
			.then(result => {
				//返回数据给前端, 终止请求
				res.send(result[0]);
			})
			.catch(err => {
				res.send({msg: '查询失败', status: 'fail'});
			})		
	}

	//后面可以添加你所需要的方法
	intoUserController(req,res){

		let sql = SQL.intoUserSQL(req.query)
		console.log(sql)
		API.query(sql)
			.then(result => {
				//返回数据给前端, 终止请求
				res.send('注册成功');
			})
			.catch(err => {
				res.send({msg: '注册失败', status: 'fail'});
			})		
	}
	findbusinessController(req,res){
		let sql = SQL.findbusiness()
		console.log(sql)
		API.query(sql)
			.then(result => {
				//返回数据给前端, 终止请求
				res.send(result[0]);
			})
			.catch(err => {
				res.send({msg: '注册失败', status: 'fail'});
			})		
	}
	foodbnameController(req,res){
		let sql = SQL.foodbnameSQL(req.query)
		API.query(sql)
			.then(result => {
				//返回数据给前端, 终止请求
				res.send(result[0]);
			})
			.catch(err => {
				res.send({msg: '请求失败', status: 'fail'});
			})		
	}
	bnamefoodController(req,res){
		let sql = SQL.bnamefoodSQL(req.query)
		API.query(sql)
			.then(result => {
				//返回数据给前端, 终止请求
				res.send(result[0]);
			})
			.catch(err => {
				res.send({msg: '请求失败', status: 'fail'});
			})		
	}
	inaddorderController(req,res){
		let sql = SQL.inaddorderSQL(req.query)
		console.log(sql)
		API.query(sql)
		.then(result => {
			//返回数据给前端, 终止请求
			res.send('已生成订单');
		})
		.catch(err => {
			res.send({msg: '请求失败', status: 'fail'});
		})		
	}
	findorderController(req,res){
		let sql = SQL.findorderSQL(req.query)
		console.log(sql)
		API.query(sql)
		.then(result => {
			res.send(result[0]);
		})
		.catch(err => {
			res.send({msg: '请求失败', status: 'fail'});
		})		
	}
	nowuserController(req,res){
		let sql = SQL.nowuserSQL(req.query)
		console.log(sql)
		API.query(sql)
		.then(result => {
			res.send('修改成功');
		})
		.catch(err => {
			res.send({msg: '请求失败', status: 'fail'});
		})		
	}
	findpingController(req,res){
		let sql = SQL.findpingSQL(req.query)
		console.log(sql)
		API.query(sql)
		.then(result => {
			res.send(result[0]);
		})
		.catch(err => {
			res.send({msg: '请求失败', status: 'fail'});
		})		
	}
	intopingController(req,res){
		let sql = SQL.intopingSQL(req.query)
		console.log(sql)
		API.query(sql)
		.then(result => {
			res.send('提交成功');
		})
		.catch(err => {
			res.send({msg: '请求失败', status: 'fail'});
		})		
	}
	haopingController(req,res){
		let sql = SQL.haopingSQL(req.query)
		console.log(sql)
		API.query(sql)
		.then(result => {
			res.send('提交成功');
		})
		.catch(err => {
			res.send({msg: '请求失败', status: 'fail'});
		})		
	}
	dashuController(req,res){
		let sql = SQL.dashuSQL(req.query)
		console.log(sql)
		API.query(sql)
		.then(result => {
			res.send('提交成功');
		})
		.catch(err => {
			res.send({msg: '请求失败', status: 'fail'});
		})		
	}
}


//导出路由控制器实例
module.exports = new RouteController();