<template>
	<div class="sjxx" style="background: #f1f1f1;">
		<div>
			<h3>配送信息</h3>
			<p>由商家配送提供配送，约{{sjxx.songtime}}分钟送达，距离{{sjxx.juli}}m</p>
			<p>配送费{{sjxx.peisong}}￥</p>
		</div>
		<div>
			<h3>活动与服务</h3>
			<div style="text-align: left;">
				<span class="youhuicolor" :style="'background:'+sjxx.youhuicolor">{{sjxx.youhui}}</span>
				<span class="youhuiactive">{{sjxx.active}}</span>
			</div>
		</div>
		<div>
			<h3>商家信息</h3>
			<p>{{sjxx.sjxinxi}}</p>
			<ul>
				<li>
					<span class="fl">品类</span>
					<span class="fr">{{sjxx.comment}}</span>
				</li>
				<li>
					<span class="fl">商家电话</span>
					<span class="fr">{{sjxx.tel}}</span>
				</li>
				<li>
					<span class="fl">地址</span>
					<span class="fr">{{sjxx.dizhi}}</span>
				</li>
				<li style="border-bottom: #d1d1d1 solid 1px;">
					<span class="fl">营业时间</span>
					<span class="fr">{{sjxx.alltime}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'sjxx',
	data(){
		return{
			sjxx:{}
		}
	},
	computed:{
		...mapState(['bname'])
  	},
  	created:function(){
		this.$http.get('http://127.0.0.1:5001/bnamefood?bname='+this.bname)
		.then((d) => {
        this.sjxx=d.data[0]
        console.log(this.sjxx)
		})
	}
}
</script>
<style scoped>
.youhuicolor{
	color: rgb(255, 255, 255);
    display: inline-block;
    width: 15px;
    font-size: 10px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 10px;
}
.youhuiactive{
	overflow: hidden;
	font-size: 11px;
}
ul{
	list-style: none;
	overflow: hidden;
	padding-left: 0;
}
p,span,li{
	font-size: 12px;
	text-align: left;
	overflow: hidden;
}
li{
	padding:10px 0;
	border-top: #d1d1d1 solid 1px;
}
.sjxx>div{
	margin:15px 0;
	background: #fff;
	padding: 10px 0;
	padding-left: 15px;
}
h3{
	margin:5px 0;
	text-align:left;
}
.fl{
	float: left;
	font-size: 13px;
}
.fr{
	float: right;
	padding-right:10px;
}
</style>