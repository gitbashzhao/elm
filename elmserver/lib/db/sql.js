//sql语句类
class SQL {

	constructor() {}

	//查询用户信息的sql语句
	findUserInfoSQL(o) {
		//o为参数对象
		return "SELECT * FROM `user` WHERE `username` = '" + o.username +"'";
	}
	intoUserSQL(o){
		return "INSERT INTO `user`(`rtime`,`username`,`pwd`,`nickname`) VALUES ('"+o.rtime+"','"+o.username+"','"+o.pwd+"','"+o.nickname+"')";
	}
	findbusiness(){
		return "SELECT * FROM `business`";
	}
	foodbnameSQL(o) {
		return "SELECT * FROM `food` WHERE `bname` = '" + o.bname +"'";
	}
	bnamefoodSQL(o){
		return "SELECT * FROM `business` WHERE `bname` = '" + o.bname +"'";
	}
	inaddorderSQL(o){
		return "INSERT INTO `order`(`pname`,`user`,`num`,`foodimg`,`bname`,`songdashij`,`price`,`buyid`,`bimg`) VALUES ('"+o.pname+"','"+o.user+"','"+o.num+"','"+o.foodimg+"','"+o.bname+"','"+o.songdashijian+"','"+o.price+"','"+o.buyid+"','"+o.bimg+"')";
	}
	findorderSQL(o) {
		return "SELECT * FROM `order` WHERE `user` = '" + o.username +"'";
	}
	nowuserSQL(o){
		return "UPDATE `user` SET `username` = '"+o.username+"',  `nickname` = '"+o.nickname+"', `comment` = '"+o.comment+"', `utel` = '"+o.utel+"', `pwd` = '"+o.pwd+"' WHERE `id` = '"+o.id+"'";
	}
	findpingSQL(o){
		return "SELECT * FROM `ping` WHERE `user` = '" + o.user +"'";
	}
	intopingSQL(o){
		return "INSERT INTO `ping`(`pingjia`,`bname`,`user`,`userimg`,`nickname`,`food`,`time`,`xingji`) VALUES ('"+o.pingjia+"','"+o.bname+"','"+o.user+"','"+o.userimg+"','"+o.nickname+"','"+o.food+"','"+o.time+"','"+o.xingji+"')";
	}
	haopingSQL(o){
		return "UPDATE `business` SET `xingji` = '"+o.xingji+"',  `yueshou` = '"+o.dashu+"' WHERE `bname` = '"+o.bname+"'";
	}
	dashuSQL(o){
		return "UPDATE `food` SET `yueshou` = '"+o.yueshou+"' WHERE `foodimg` = '"+o.foodimg+"'";
	}
	



}

//导出sql语句实例
module.exports = new SQL();