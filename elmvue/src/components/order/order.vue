<template>
	<div style="background: #ddd">
		<div v-if="orderlist!=[]&&dlist" v-for="(item,index) in orderlist" class="orderlist" @click="intodingdan(index)">
			<img :src="'http://127.0.0.1:5001/businessimg/'+item[0].bimg">
			<div style="margin-left: 60px ">
				<p style="height:43px;line-height: 43px;border-bottom: 1px solid #ddd;">{{item[0].bname}}<span style="float: right;font-size: 11px;">订单已送达</span></p>
				<p style="font-size: 11px;margin-top: 20px;">{{item[0].pname}}等{{item.length}}类商品</p>
			</div>
			<span style="border: 1px solid #e49;padding: 5px; font-size: 10px;float: right;margin-top: 10px;" @click.stop="intofood(item[0].bname,item[0].bimg)">再来一单</span>
			
		</div>
		<div style="width: 100%;height:60px;"></div>
		<div v-if="dingactive" class="dingdanxiangq" >
			<h2 style="color: #fff;background: #009fff;height:40px;line-height: 40px;text-align: center;position: fixed;top: 0;width: 100%;margin: 0"><span style="position: absolute;left:10px" @click="leavedingdan()"><</span>订单详情</h2>
			<div style="margin: 45px 3px 10px;background: #fff;padding: 10px 15px 20px;">
				<h2 style="margin-top: 0;">订单已送达></h2>
				<p>感谢您对我的支持,期待下次光临</p>
			</div>
			 <ul>
			 	<li style="font-size: 16px;" @click="intofood(bcont.bname,bcont.bavatar)">
			 		<img :src="'http://127.0.0.1:5001/businessimg/'+bcont.bavatar" style="width: 40px;height:40px;">
			 		{{bcont.bname}}
			 		<span class="fr">></span>
			 	</li>
			 	<li v-for="item in xqlist" style="font-size: 11px;line-height: 30px;">
			 		<img :src="'http://127.0.0.1:5001/foodimg/'+item.foodimg" style="width: 25px;height:25px;"  class="fl">
			 		<span style="margin-left:20px;display: inline-block; width: 150px;overflow: hidden;height: 20px;">{{item.pname}}</span>
			 		<span style="position: absolute;right: 70px;">x{{item.num}}</span>
			 		<span class="fr">￥{{item.price*item.num}}</span>	
			 	</li>
			 	<li>
			 		<span>配送费</span>
			 		<span class="fr">￥{{bcont.peisong}}</span>
			 	</li>
			 	<li>
			 		<span style="color: #009fff;">商家电话：{{bcont.tel}}</span>
			 		<span class="fr">实付￥{{totul}}</span>
			 	</li>
			 </ul>
			 <ul>
			 	<li>配送信息</li>
			 	<li>送达时间：{{xqlist[0].songdashij}}</li>
			 	<li>
			 		送货地址：
			 		<div>
			 			<p>{{nickname}}</p>
			 			<p>{{usert}}</p>
			 			<p>{{usercomment}}</p>
			 		</div>
			 	</li>
			 	<li>配送方式：商家配送</li>
			 </ul>
			 <ul>
			 	<li>订单信息</li>
			 	<li>订单号：{{xqlist[0].buyid}}</li>
			 	<li>支付方式：在线支付</li>
			 	<li><span>评价：</span><mu-text-field v-model="pingjia" placeholder=""></mu-text-field><br/>
			 		<mu-icon value="grade" :color="haopingarr[0]" @click='pingjiacheng(1)'></mu-icon>
			 		<mu-icon value="grade" :color="haopingarr[1]" @click='pingjiacheng(2)'></mu-icon>
			 		<mu-icon value="grade" :color="haopingarr[2]" @click='pingjiacheng(3)'></mu-icon>
			 		<mu-icon value="grade" :color="haopingarr[3]" @click='pingjiacheng(4)'></mu-icon>
			 		<mu-icon value="grade" :color="haopingarr[4]" @click='pingjiacheng(5)'></mu-icon>
			 		<span :style='"color:"+haopingcolor' style="font-size: 16px;float: right;">{{haopingcon}}</span>
			 		
			 	<div style="width: 100%;color: #fff; background: green;padding: 10px 0;text-align: center;" @click='intoping'>提交评价</div>
			 	</li>
			 </ul>
		</div>
	</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'order',
  data(){
  	return{
  		orderlist:[],
  		business:[],
  		dingactive:false,
  		xqlist:[],
  		bcont:{},
  		totul:0,
  		dlist:true,
  		pingjia:'',
  		pingjiadengji:4,
  		haopingcolor:'orange',
  		haopingcon:'比较满意',
  		haopingarr:['orange','orange','orange','orange','black']

  	}
  },
  computed:{
		...mapState(['username','buslist','usert','nickname','usercomment'])
  },
  methods:{
  		pingjiacheng(i){
  			this.pingjiadengji=i
  			if (i<3) {
  				this.haopingcolor='black'
  			}else{
  				this.haopingcolor='orange'
  			}
  			if(i==1){
  				this.haopingcon='非常不满意'
  			}else if(i==2){
  				this.haopingcon='不满意'
  			}else if(i==3){
  				this.haopingcon='一般'
  			}else if(i==4){
  				this.haopingcon='比较满意'
  			}else if(i==5){
  				this.haopingcon='非常满意'
  			}
  			for (var k = 0; k < this.haopingarr.length; k++) {
  				if(i-1>=k){
  				 this.haopingarr[k]='orange'	
  				}else{
  				 this.haopingarr[k]='black'	
  				}
  			}
  		},
	  	intofood(bnanme,bimg){
	  		this.$store.dispatch('infoods',[bnanme,bimg])
	  		this.$router.push({name:'food'})
	  	},
	  	intoping(){
	  		console.log(this.xqlist)
	  		var myDate = new Date()
			var time = myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate()+' '+myDate.getHours()+':'+myDate.getMinutes()+':'+myDate.getSeconds()
	  		this.$http.get('http://127.0.0.1:5001/userinfo?username='+this.username)
			.then((d) => {
				var userimg=d.data[0].avatar
				this.$http.get('http://127.0.0.1:5001/intoping?pingjia='+this.pingjia+'&bname='+this.xqlist[0].bname+'&user='+this.username+'&userimg='+userimg+'&nickname='+this.nickname+'&food='+this.xqlist[0].pname+'&time='+time+'&xingji='+this.pingjiadengji)
				.then((ds) => {
					console.log(ds)
				})
				this.dingactive=false
	  			this.dlist=true
	  			this.totul=0
			})
			

	  	},
	  	intodingdan(index){
	  		this.dingactive=true
	  		this.dlist=false
	  		this.xqlist=this.orderlist[index]
	  		for (var i = 0; i < this.buslist.length; i++) {
	  			console.log(this.xqlist[0].bname)
	  			if(this.buslist[i].bname==this.xqlist[0].bname){
	  				this.bcont=this.buslist[i]
	  			}
	  		}
	  		for (var i = 0; i < this.xqlist.length; i++) {
	  			this.totul +=this.xqlist[i].price*this.xqlist[i].num
	  		}
	  		this.totul+=this.bcont.peisong*1
	  	},
	  	leavedingdan(){
	  		this.dingactive=false
	  		this.dlist=true
	  		this.totul=0
	  	}
  },
  created:function(){
		this.$http.get('http://127.0.0.1:5001/findorder?username='+this.username)
		.then((d) => {
        	var order =[]
        	var orderid=[]
        	for (var i = 0; i < d.data.length; i++) {
        		if(orderid.indexOf(d.data[i].buyid)==-1){
        			orderid.push(d.data[i].buyid)
        		}	
        	}
 			for (var i = 0; i < orderid.length; i++) {
 				for (var j = 0; j < d.data.length; j++) {
 					if(orderid[i]==d.data[j].buyid){
 						order.push(d.data[j])
 					}
 				}
 				this.orderlist.push(order)
 				order=[]
 			}
 			function quickSort(arr){
	            if(arr.length<=1){return arr;}
	            var pivotIndex=Math.floor(arr.length/2);
	            var pivot=arr.splice(pivotIndex,1)[0];
	            var left=[];
	            var right=[];
	            for(var i=0;i<arr.length;i++){
	                if(arr[i].id<=pivot.id){
	                    left.push(arr[i]);
	                }
	                else{
	                    right.push(arr[i]);
	                }
	            }
	            return quickSort(left).concat([pivot],quickSort(right));
		    }
		    this.orderlist=quickSort(this.orderlist)             
		})
	}
}
</script>
<style scoped>
.orderlist{
	background: #fff;
	margin: 10px 0;
	padding: 20px;
	overflow: hidden;
}
.orderlist>img{
	width: 40px;
	height: 40px;
	float: left;
}
.dingdanxiangq{
	width: 100%;
	background:#ddd;
	height:0;
	position: absolute;
	top: 0;
	z-index: 999;
	transition: all .35s;
	overflow: hidden;
	min-height:568px;
	height: auto;
}
ul{
	list-style: none;
	margin: 10px 3px;
    background: #fff;
    padding: 10px;
}
li{
	border-bottom: 1px solid #ddd;
    padding: 10px 0;
    overflow: hidden;
    font-size: 13px;
}
.fr{
	float: right;
}
.fl{
	float: left;
}
</style>