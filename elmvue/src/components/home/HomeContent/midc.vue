<template>
	<div class="midc">
		<div class="midheader">
			<div class="fl">
				<img src="/static/midImg/mid1.jpg">
				<h4>超级会员</h4>
				<i style="float: left;width: 3px;height:3px;border-radius: 50%; background:#000;margin:16px 7px"></i>
				<p>每月领取20元红包</p>
			</div>
			<div class="fr">
				<p> 立即开通 > </p>
			</div>	
		</div>
		<div class="midbody">
			<div style="margin-right:2px; ">
				<h3>品质套餐</h3>
				<p>搭配齐全吃的好</p>
				<div><span style="color: #AF8260;">立即抢购 ></span><img src="/static/midImg/fl.jpg"></div>
			</div>
			<div style="margin-left:2px;">
				<h3 style="color: red;">限量抢购</h3>
				<p>超值美味9.9元起</p>
				<div><span style="color: red;">106人</span><span style="left: 37px;">正在抢</span><img src="/static/midImg/fr.jpg"></div>
			</div>
		</div>
		<div class="midfoot">
			<mu-carousel hide-controls style="height: 90px;">
			  <mu-carousel-item>
			    <img src="/static/midImg/lb1.jpg">
			  </mu-carousel-item>
			  <mu-carousel-item>
			    <img src="/static/midImg/lb2.jpg">
			  </mu-carousel-item>
			  <mu-carousel-item>
			    <img src="/static/midImg/lb3.jpg">
			  </mu-carousel-item>
			  <mu-carousel-item>
			    <img src="/static/midImg/lb4.jpg">
			  </mu-carousel-item>
			  <mu-carousel-item>
			    <img src="/static/midImg/lb5.jpg">
			  </mu-carousel-item>
			</mu-carousel>
		</div>
	</div>
</template>
<script>
export default{
	name:"midc"
}
</script>
<style>
h4{
	margin: 0;
	float: left;
	line-height: 35px;
	font-size: 12px;
}
p{
	margin:0;
}
.midheader{
	background: #F7E3AB;
	overflow: hidden;
	width: 95%;
	margin: 0 auto;
	height: 35px;
	margin-top: 10px;
}
.fl{
	float: left;
}
.fr{
	float: right;
}
.midheader p{
	font-size: 9px;
	line-height: 35px;
	margin: 0;
}
.fl>img{
	width: 16px;
    height: auto;
    margin: 10px;
}
.fl>p,.fl>img{
	float: left;
}
.fr>p{
	margin-right: 5px;
}
.midbody{
	width: 95%;
	margin: 0 auto;
}
.midbody>div{
	width: calc(50% - 2px);
	float: left;
	background: #f3f3f3;
	position: relative;
	padding-left:10px;
	margin-top: 3px;
}
.midbody>div>p{
	font-size: 10px;
	color: #777;
}
.midbody>div>h3{
	margin-bottom: 2px;
}
.midbody>div span{
	font-size: 9px;
	position: absolute;
	margin-top: 5px;
}
.midbody>div img{
	width: 70%;
	height:auto;
	float: right;
}
.midfoot{
    overflow: hidden;
    width: 95%;
    margin: 0 auto;
}
.midfoot img{
	width: 95%;
	height:auto;
}
.mu-carousel-indicator-button{
	width: 7px;
	height:7px;
	margin-top: 20px;
}
</style>