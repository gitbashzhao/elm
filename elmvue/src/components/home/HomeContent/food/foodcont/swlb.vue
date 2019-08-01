<template>
	<div>
		<div style="overflow: hidden;">
			<h3>商家推荐</h3>
			<div v-if="!foodlist.length==0" style="float: left;margin: 0 7px;width: 43%;" v-for="(i,k) in shiji" @click="fooddetfn(i)">
				<img v-if='foodlist[i].foodimg' :src="'http://127.0.0.1:5001/foodimg/'+foodlist[i].foodimg">
				<p style="width:130px;">{{foodlist[i].foodname}}</p>
				<span style="font-size: 12px">月售{{foodlist[i].yueshou}} 好评率{{foodlist[i].haoping}}%</span>
				<div style="color: red;font-size: 14px">
					{{foodlist[i].foodprice}}￥起
					<div style="float: right">
						<mu-icon style="float: left;" v-if="shuliang[i]!=0" size="25" value="remove_circle_outline" color="blue"@click.stop='jiajian(-1,i)'></mu-icon>
						<p style="float: left; color: #000;" v-if="shuliang[i]!=0">{{shuliang[i]}}</p>
						<mu-icon style="float: left;" size="25" value="add_circle" color="blue"@click.stop='jiajian(1,i)'></mu-icon>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h3>商品列表</h3>
			<div v-if="!foodlist.length==0" v-for="(item,k) in foodlist" class="foodlist"@click="fooddetfn(k)">
				<img v-if='item.foodimg' :src="'http://127.0.0.1:5001/foodimg/'+item.foodimg">
				<div>
					<p style="font-weight: 1000;margin-bottom:5px;">{{item.foodname}}</p>
					<p style="font-size: 10px;margin-bottom:5px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.comment}}</p>
					<span style="font-size: 12px;margin-bottom:5px;">月售{{item.yueshou}} 好评率{{item.haoping}}%</span>
					<p style="color: red;font-size: 12px;margin-bottom:5px;">{{item.zhekou}}折</p>
					<div style="color: red">
						{{item.foodprice}}￥起
						<s style="color: #aaa">￥{{Math.floor(item.foodprice/item.zhekou*10)}}</s>
					</div>
					<div style="float: right">
						<mu-icon style="float: left;" v-if="shuliang[k]!=0" size="25" value="remove_circle_outline" color="blue" @click.stop='jiajian(-1,k)'></mu-icon>
						<p style="float: left;" v-if="shuliang[k]!=0">{{shuliang[k]}}</p>
						<mu-icon style="float: left;" size="25" value="add_circle" color="blue" @click.stop='jiajian(1,k)'></mu-icon>
					</div>
				</div>				
			</div>
			<div style="width: 100% ;height:50px;"></div>
		</div>
		<div class="btnshop">		
			<mu-icon size="40" value="add_shopping_cart"  style="position: absolute; left:20px;top: -15px;" :class='actblue' @click="isshoplistact()"></mu-icon>
			<p style="color: #fff;margin-left: 70px;width: 50px;height: 50px;line-height: 50px;font-weight: 800;">￥{{totul}}</p>
			<p style=" color: rgb(255, 255, 255);position: absolute;height: 50px;line-height: 50px; font-weight: 800;top: 0;right: 0;width: 80px;" :class='quzhifu' @click='quzhfufn()'>{{peisongtxt}}</p>
		</div>
		<div v-if="shoplist!=[]" class='shoplist' :class="shoplistact">
			<p class="yxsp">已选商品<span @click="cleanlist()">清空</span></p>
			<div v-for="item in shoplist">
				<div>
					<span>{{item.pname}}</span>
					<div style="float: right">
						<mu-icon style="float: left;"  size="25" value="remove_circle_outline" color="blue" @click='jiajian(-1,item.i)'></mu-icon>
						<p style="float: left;">{{item.num}}</p>
						<mu-icon style="float: left;" size="25" value="add_circle" color="blue" @click='jiajian(1,item.i)'></mu-icon>
					</div>
				</div>
			</div>
		</div>
		<div v-if="fooddet!={}" class="fooddet" :class='fooddetact'>
			<div style="color: #fff;font-size: 40px;position: absolute;font-weight: 800;left: 16px;" @click="closefooddat()">x</div>
			<img v-if='fooddet.foodimg' :src="'http://127.0.0.1:5001/foodimg/'+fooddet.foodimg" style="width: 100%">
			<h3 style="margin: 5px 0;">{{fooddet.foodname}}</h3>
			<p style="font-size: 12px;margin: 5px 0;">月售{{fooddet.yueshou}} 好评率{{fooddet.haoping}}%</p>
			<p style="font-size: 12px;margin: 5px 0;">{{fooddet.comment}}</p>
			<div style="color: red;float:left;margin-left: 40px">
				{{fooddet.foodprice}}￥起
				<s style="color: #aaa">￥{{Math.floor(fooddet.foodprice/fooddet.zhekou*10)}}</s>
			</div>
			<div style="float: right;margin-right: 40px">
				<mu-icon style="float: left;" v-if="shuliang[fooddet.i]!=0" size="25" value="remove_circle_outline" color="blue" @click='jiajian(-1,fooddet.i)'></mu-icon>
				<p style="float: left;" v-if="shuliang[fooddet.i]!=0">{{shuliang[fooddet.i]}}</p>
				<mu-icon style="float: left;" size="25" value="add_circle" color="blue" @click='jiajian(1,fooddet.i)'></mu-icon>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
	name: 'splb',
	data(){
  	return{
  		foodlist:[],
  		shuliang:[],
  		actblue:'',
  		startpei:'',
  		totul:0,
  		quzhifu:'',
  		peisongtxt:'',
  		shoplist:[],
  		shoplistact:'',
  		fooddet:{},
  		fooddetact:''
  	}
  },
  computed:{
		...mapState(['bname','username']),
		shiji:function(){
			return [
			Math.floor(Math.random()*this.foodlist.length),
			Math.floor(Math.random()*this.foodlist.length)
			]
		}	
  },
  methods:{
  	jiajian(a,i){
  		if (a==1) {
  			let nshu=this.shuliang[i]+1
  			this.$set(this.shuliang, i,nshu)
  		}else{
  			let nshu=this.shuliang[i]-1
  			this.$set(this.shuliang, i,nshu)
  		}
  		this.totul=0;
  		this.shoplist=[]
  		for (var j = 0; j < this.shuliang.length; j++) {
  		 		this.totul += (this.shuliang[j]*this.foodlist[j].foodprice)*1
  		 		if (this.shuliang[j]>0) {
  		 			let pname = this.foodlist[j].foodname
  		 			let num =this.shuliang[j]
  		 			let foodimg = this.foodlist[j].foodimg
  		 			let price = this.foodlist[j].foodprice
  		 			this.shoplist.push({pname:pname,num:num,user:this.username,i:j,foodimg:foodimg,bname:this.bname,price:price})
  		 		}
  		 }
  		 this.totul=Math.floor(this.totul * 10) / 10
  		 if(this.totul*1>=this.startpei*1){
  		 	console.log(111)
  		 	this.peisongtxt='去支付'
  		 	this.quzhifu='quzhifu'
  		 }else{
  		 	this.peisongtxt=this.startpei+'￥起送'
  		 	this.quzhifu=''
  		 }
  		 for (var j = 0; j < this.shuliang.length; j++) {
  		 		if(this.shuliang[j]>0){
  		 			this.actblue='actblue'
  		 			break;
  		 		}else{
  		 			this.actblue=''
  		 		}
  		 }
  	},
  	isshoplistact(){
  		if (this.actblue=='') {
  			return
  		}else{
  			if (this.shoplistact=='') {
  				this.shoplistact="shoplistact"
  			}else{
  				this.shoplistact=''
  			}
  		}
  		
  	},
  	cleanlist(){
  		this.shoplistact=''
  		this.shuliang=[]
  		for (var i = 0; i < this.foodlist.length; i++) {
				this.shuliang.push(0)
			}
		this.shoplist=[]
  	},
  	quzhfufn(){
  		if (this.actblue=='') {
  			return
  		}else{
  			this.$store.dispatch('changefoodlists',this.shoplist)
  			this.$router.push({name:'pay'})
  		}
  		
  	},
  	fooddetfn(i){
  		this.fooddet=this.foodlist[i]
  		this.fooddet.i=i
  		this.fooddetact='fooddetact'
  	},
  	closefooddat(){
  		this.fooddetact=''
  		this.fooddet={}
  	}

  },
  created:function(){
		this.$http.get('http://127.0.0.1:5001/foodbname?bname='+this.bname)
		.then((d) => {
        this.foodlist=d.data
        for (var i = 0; i < this.foodlist.length; i++) {
				this.shuliang.push(0)
			}
		})
		this.$http.get('http://127.0.0.1:5001/bnamefood?bname='+this.bname)
		.then((d) => {
        this.startpei=d.data[0].statsong*1
        this.peisongtxt=this.startpei+'￥起送'
		})
		var num = 0
		var yueshou = []
		this.$http.get('http://127.0.0.1:5001/findorder?username='+this.username)
		.then((d) => {
			var order = d.data
			for (var i = 0; i < this.foodlist.length; i++) {
				for(var j = 0; j<order.length;j++){
					if(this.foodlist[i].foodname==order[j].pname){
						num = num+(order[j].num*1)
					}
				}
				yueshou.push(num)
				num = 0
			}
			for (var i = 0; i < this.foodlist.length; i++) {
				this.$http.get('http://127.0.0.1:5001/dashu?foodimg='+this.foodlist[i].foodimg+'&yueshou='+yueshou[i])
				.then((d) => {
		  
				})
			}
			this.$http.get('http://127.0.0.1:5001/foodbname?bname='+this.bname)
			.then((d) => {
	        this.foodlist=d.data   
			})

		})
		
		


	}
}
</script>
<style scoped>
.actblue{
	color:blue!important;
}
.quzhifu{
	background:green;
}
.foodlist{
	text-align: left;
	overflow: hidden;
	margin:15px 10px;
}
.foodlist>img{
	float: left;
	width: 120px;
}
.foodlist>div{
	float: right;
	padding-left: 10px;
	width: 160px;
}
.btnshop{
	position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #505052;
    z-index: 9;
}
.shoplist{
	width: 100%;
    position: fixed;
    bottom: -500px;
    background: #fff;
    z-index: 5;
    transition: all .35s;
    overflow: hidden;
}
.shoplistact{
	bottom: 50px;
}
.shoplist>div>div{
	 padding: 10px 20px;
	 overflow: hidden;
}
.shoplist>div>div>span{
	float: left;
}
.yxsp{
	font-size: 18px;
    text-align: left;
    padding: 10px 20px;
    background: #ddd;
}
.yxsp>span{
	float: right;
	font-size: 13px;
    line-height: 25px;
}
.fooddet{
	width: 100%;
    height: 550px;
    position: fixed;
    top: 600px;
    background: #fff;
    transition: all .35s;
}
.fooddetact{
	top:0;
}


</style>