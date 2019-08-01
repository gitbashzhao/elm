<template>
	<div>
		<div class="checklists"><span @click="cdhome()"><</span>确认订单</div>
		<div class="dingdanpeisong">
			<span style="color: #fff;font-size: 12px">订单配送至</span>
			<h2 style="color: #fff;margin: 10px 0;">{{usercomment}}</h2>
			<p style="color: #fff;font-size: 12px">{{nickname}}  {{usert}}</p>
			<ul>
				<li><span style="font-size: 14px">送达时间</span><span style="float: right;color: #009FFF; font-size:13px">尽快送达({{datime}}送达)</span></li>
				<li><span style="font-size: 14px">支付方式</span><span style="float: right;color: #009FFF; font-size:13px">在线支付</span></li>
			</ul>
		</div>
		<div style="overflow: hidden;">
			<h3 style="border-bottom: solid 1px #ddd;padding-bottom: 10px;margin-left: 10px;">{{bname}}</h3>
			<ul class ="foodlist">
				<li v-for="item in foodlist" style="height:60px;line-height: 60px">
					<img :src="'http://127.0.0.1:5001/foodimg/'+item.foodimg">
					<span style="margin-left: 5px;">{{item.pname}}</span>
					<span style="left:200px;font-size: 12px;">x{{item.num}}</span>
					<span style="right:20px; color: red;">￥{{item.price}}</span>
				</li>
				<li><span>配送费</span><span style="right:20px;">￥{{peisongfei}}</span></li>
			</ul>
			<p style="float: right; margin-right: 20px;">小计￥<span style="font-size: 18px">{{toul}}</span></p>
		</div>
		<div style="height:60px;width: 100%"></div>
		<div style="position: fixed;height:60px;z-index: 99;background: #00E067;color: #fff;bottom: 0;width: 100%;font-size: 20px;text-align: center;line-height: 55px;" @click="finish()">请支付￥{{toul}}</div>
		<div @click="cdhome()" class="yizhifu" :class="finishlist">已支付,点击回主页</div>

	</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
	name: 'pay',
	data(){
		return{
			datime:'',
			peisongfei:'',
			toul:0,
			finishlist:''
		}
	},
	computed:{
		...mapState(['foodlist','usercomment','usert','nickname','bname','bimg'])
  	},
  	methods:{
  		cdhome(){
  			this.$router.push({name:'home'})
  		},
  		finish(){
  			var buyid=Math.floor(Math.random()*100000)
  			for (var i = 0; i < this.foodlist.length; i++) {
  				this.$http.get('http://127.0.0.1:5001/inaddorder?bname='+this.foodlist[i].bname+'&foodimg='+this.foodlist[i].foodimg+'&num='+this.foodlist[i].num+''+'&buyid='+buyid+'&pname='+this.foodlist[i].pname+'&user='+this.foodlist[i].user+'&price='+this.foodlist[i].price+''+'&songdashijian='+this.datime+'&bimg='+this.bimg)
						.then((d) => {
							console.log(d)
							this.finishlist='finishlist'				
						})
  			}
  		}
  	},
  	created:function(){
		this.$http.get('http://127.0.0.1:5001/bnamefood?bname='+this.bname)
		.then((d) => {
			var myDate = new Date()
			var hour =myDate.getHours()
			var minutes=myDate.getMinutes()+(d.data[0].songtime*1)
			if(minutes>=60){
				hour++
				minutes-=60
				if(hour>=24){
					hour-=24
				}
			}
			if (minutes<10) {
				minutes='0'+minutes
			}
			if(hour<10){
				hour='0'+hour
			}
			for (var i = 0; i < this.foodlist.length; i++) {
  				this.toul+=this.foodlist[i].num*this.foodlist[i].price
  			}
			this.datime=hour+':'+minutes
       		this.peisongfei=d.data[0].peisong  
       		this.toul+=this.peisongfei*1
       		this.toul=Math.floor(this.toul*100)/100     		
		})
	}
}
</script>
<style scoped>
.checklists{
	position: fixed;
    height: 40px;
    width: 100%;
    top: 0;
    background: #009FFF;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
    font-weight: 800;
    text-align: center;
}
.checklists>span{
	position: absolute;
	left: 20px;
}
.dingdanpeisong{
	background: #009FFF;
	padding: 60px 10px 20px;
}
ul{
	list-style: none;
	padding: 0;
	background: #fff;
}
ul>li{
	height:40px;
	padding:5px 10px;
	border-bottom: solid #eee 1px;
}
img{
	width: 40px;
	height:40px;
	margin-top: 5px;
}
.foodlist>li>span{
	position: absolute;
}

.yizhifu{
	height:0;
	overflow: hidden;
	background: rgba(0,0,0,.65);
	position: fixed;
	z-index: 999;
	top: 0;
	width: 100%;
	color: #fff;
	line-height: 568px;
	transition: all .35s;
	text-align: center;
}
.finishlist{
	height:100%;
}
</style>