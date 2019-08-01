<template>
	<div class="logoin">
		<img src="/static/logoinimg/logoin.jpg">
		<div class="ym" :style='ocpity'>
			<p>{{dorz}}</p>
			<div class="de">
				 <mu-button icon @click="de()">
	      				<mu-icon value="clear"></mu-icon>
	   			 </mu-button>
   			 </div>
			<div>

				<mu-text-field style="width: 200px" v-model="value1" placeholder="用户名"></mu-text-field><br/>
				<mu-text-field style="width: 200px" v-model="value2" label="Password" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field><br/>
				<mu-text-field  v-if='isz'style="width: 200px" v-model="value4" placeholder="昵称"></mu-text-field><br/>
				<mu-text-field  v-if='isz'style="width: 200px" v-model="value3" placeholder="验证码"></mu-text-field><br/>
				<mu-button style="position: absolute;right: 0;top: 210px;" v-if='isz' color="success" @click="yzms()">获取验证码</mu-button>
			</div>
		</div>
		<div class="los">
			<mu-button @click="dl()" class="lo" color="success">登入</mu-button>
			<mu-button @click="zc()" class="lo">注册</mu-button>
		</div>

	</div>
</template>
<script>
	export default{
		name:'logoin',
		data () {
		    return {
		      value1: '',
		      value2: '',
		      value3: '',
		      visibility: false,
		      dorz:'',
		      ocpity:'opacity: 0;',
		      isz:false,
		      yzm:'',
		      value4:'',
		      value5:''
		 	}
		},
		methods:{
			dl(){
				if(this.dorz=='用户登录' && this.ocpity=='') {
					if (this.value1=='') {
						alert('用户名不能为空')
					}else if(this.value2==''){
						alert('密码不能为空')
					}else{
						console.log(this.value1)
						this.$http.get('http://127.0.0.1:5001/userinfo?username='+this.value1)
						.then((d) => {
        					if(d.data.length==0){
        						alert('没有此用户')
        					}else if(d.data[0].pwd==this.value2){
        						this.value5=d.data[0].comment
        						this.$store.dispatch('changeusernames',[this.value1,this.value5,d.data[0].utel,d.data[0].nickname])
        						this.$router.push({name:'home'})
        					}else{
        						alert('密码错误')
        					}
						})
					}
				}
				this.dorz='用户登录'
				this.isz=false
				this.ocpity=''
			},
			zc(){
				if(this.dorz=='用户注册' && this.ocpity==''){
					if (this.value1=='') {
						alert('用户名不能为空')
					}else if(this.value2==''){
						alert('密码不能为空')
					}else if(this.value4==''){
						alert('昵称不能为空')
					}else if(this.value3==''){
						alert('验证码不能为空')
					}else if(this.yzm==''){
						alert('请获取验证码')
					}else if(this.value3!=this.yzm){
						alert('验证码不正确')
					}else{
						var myDate = new Date()
						var time = myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate()+' '+myDate.getHours()+':'+myDate.getMinutes()+':'+myDate.getSeconds()
						this.$http.get('http://127.0.0.1:5001/userinto?username='+this.value1+'&pwd='+this.value2+'&nickname='+this.value4+'&rtime='+time)
						.then((d) => {
							console.log(d)
							this.dorz=''
							this.isz=false
							this.visibility=false
							this.ocpity='opacity: 0;'
							// this.value3=''
							// this.value4=''
							alert('注册成功')
						})
					}
				}
				this.dorz='用户注册'
				this.isz=true;
				this.ocpity=''
			},
			de(){
				this.dorz=''
				this.isz=false
				this.visibility=false
				this.ocpity='opacity: 0;'
				this.value1=''
				this.value2=''
				this.value3=''
				this.value4=''
			},
			yzms(){
				this.yzm=Math.round(Math.random()*10000)
				alert('验证码为  '+this.yzm)
			}
		}
	}
</script>
<style scoped>
	.logoin{
		z-index: 99;
		position: fixed;
		width: 100%;
		height: 568px;
		background: #fff;
	}
	.logins{
		height:0;
	}
	.logoin img{
		width: 100%;
		height:100%;
		position: fixed;
		z-index: -1;
	}
	.logoin>.los{
		position: absolute;
		bottom: 75px;
		left: 0;
		right: 0;
		width: 80%;
		margin: 0 auto;
	}
	.lo{
		margin:0 18px;
	}
	.ym{
		position: absolute;
		z-index: 999;
		top: 70px;
		left: 0;
		right: 0;
		width: 80%;
		height:60%;
		background: rgba(255,255,255,.65);
		margin:0 auto;
		transition: all .5s;
	}
	.ym>p{
		margin: 0;
	    text-align: center;
	    margin-top: 30px;
   		font-size: 20px;
	}
	.ym>div{
	    position: absolute;
	    top: 80px;
	    left: 0;
	    right: 0;
	    width: 200px;
	    margin: 0 auto;
	}
	.ym>.de{
		position: absolute;
		top: 0;
		margin:0;
	}
</style>