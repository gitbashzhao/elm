const routeController = require(__basename + '/route_controller/route_controller.js');

module.exports = function (app) {
	//app: express实例

	//接收路径为/emailcode的get请求, app.get(请求路径, 回调函数), 路径自己随意定义
	app.get('/userinfo', routeController.userInfoController);
	app.get('/userinto', routeController.intoUserController);
	app.get('/findbusiness', routeController.findbusinessController);
	app.get('/foodbname', routeController.foodbnameController);
	app.get('/bnamefood', routeController.bnamefoodController);
	app.get('/inaddorder',routeController.inaddorderController);
	app.get('/findorder',routeController.findorderController);
	app.get('/nowuser',routeController.nowuserController);
	app.get('/findping',routeController.findpingController);
	app.get('/intoping',routeController.intopingController)
	app.get('/haoping',routeController.haopingController)
	app.get('/dashu',routeController.dashuController)
}