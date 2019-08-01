<template>
	<div style="background: #ddd">
		<ul style="background: #fff">
			<li >头像<img v-if='userslist.avatar' :src="'http://127.0.0.1:5001/foodimg/'+userslist.avatar" class="fr"></li>
			<li>
				用户名：
				<span class="fr">{{userslist.username}}</span>
			</li>
			<li>
				昵称：
				<span class="fr">{{userslist.nickname}}</span>
			</li>
			<li>
				地址：
				<span class="fr">{{userslist.comment}}</span>
			</li>
			<li>
				手机：
				<span class="fr">{{userslist.utel}}</span>
			</li>

			<li @click='xgxx(true)' style="background: green;color: #fff;text-align: center;font-size: 18px;font-weight: 1000">修改信息</li>
			<li style="background: red;color: #fff;text-align: center;font-size: 18px;font-weight: 1000" @click="banhui()">退出登录</li>
		</ul>
		<div v-if='isxgxx' class="xgxx" style="position: fixed;top: 0px;width: 100%;height:100%;z-index: 88;background: rgb(255,255,255);">
			<h2 style="text-align: center;">修改信息</h2>
			<span>用户名：</span><mu-text-field v-model="xgusername" placeholder="用户名"></mu-text-field><br/>
			<span>昵称：</span><mu-text-field v-model="xgnickname" placeholder="昵称"></mu-text-field><br/>
			<span>地址：</span><mu-text-field v-model="xgcomment" placeholder="地址"></mu-text-field><br/>
			<span>电话：</span><mu-text-field v-model="xgutel" placeholder="电话"></mu-text-field><br/>
			<mu-text-field style="width: 200px" v-model="xgpwd" label="密码：" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field><br/>
			<p @click='tijiaou()' style="background: green;color: #fff;text-align: center;font-size: 18px;font-weight: 1000;padding: 10px 0;">提交</p>
			<p  style="background: red;color: #fff;text-align: center;font-size: 18px;font-weight: 1000;padding: 10px 0;"@click='xgxx(false)'>关闭</p>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'mine',
  data(){
  	return{
  		userslist:'',
  		xgusername:'',
  		xgnickname:'',
  		xgcomment:'',
  		xgutel:'',
  		xgpwd:'',
  		visibility: false,
  		isxgxx:false
  	}
  },
  methods:{
  	xgxx(is){
  		this.isxgxx=is
  	},
  	banhui(){
  		this.$router.push({name:'login'})
  	},
  	tijiaou(){
  		this.$http.get('http://127.0.0.1:5001/nowuser?username='+this.xgusername+'&nickname='+this.xgnickname+'&comment='+this.xgcomment+'&utel='+this.xgutel+'&pwd='+this.xgpwd+'&id='+this.userslist.id)
		.then((d) => {
        console.log(d)
        this.$router.push({name:'login'})
		})
  	}
  },
  computed:{
		...mapState(['username'])
	},
  created:function(){
		this.$http.get('http://127.0.0.1:5001/userinfo?username='+this.username)
		.then((d) => {
        this.userslist=d.data[0]
        this.xgusername=this.userslist.username
        this.xgnickname=this.userslist.nickname
        this.xgcomment=this.userslist.comment
        this.xgutel=this.userslist.utel
        this.xgpwd=this.userslist.pwd
		})
	}
}
</script>
<style scoped>
ul{
	list-style: none;
	padding: 10px 0;
}
li{
	padding: 20px 10px;
	border-bottom: 1px solid #ddd;
}
img{
	width: 60px;
	height:60px;
	margin-top: -30px;
}
.fr{
	float: right;
}
.xgxx>span{
	font-size: 12px;
}

</style>