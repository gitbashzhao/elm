<template>
	<div class="findbottom">
		<h3>-<i class="material-icons">alarm</i>限时好礼-</h3>
		<span>金币换好礼</span>
		<div class="middle">
			<div>
				<p>限时特惠</p>
				<img src="/static/findimg/m4.webp">
				<div style="font-size: 12px">三元饿了么鲜果</div>
				<span>90金币<s style="font-size:10px; color:#999;">￥3</s></span>
			</div>
			<div>
				<p>特价换购</p>
				<img src="/static/findimg/m5.webp">
				<div style="font-size: 12px">扫地机器人</div>
				<span>9金币<s style="font-size:10px; color:#999;">￥99</s></span>
			</div>
			<div>
				<p>特价换购</p>
				<img src="/static/findimg/m6.webp">
				<div style="font-size: 12px">电动按摩理疗仪</div>
				<span>9金币<s style="font-size:10px; color:#999;">￥239</s></span>
			</div>
		</div>
		<p class="more">查看更多></p>
		<div style=" height:60px; width: 100%;"></div>
	</div>
</template>
<script>
export default {
  name: 'findbottom'
}
</script>
<style scoped>
i{
	position: relative;
    top: 4px;
    font-size: 20px;
    color:red;
}

.findbottom{
	background: #fff;
	margin-top:10px; 
}
.findbottom>h3{
  margin: 0 ;
  text-align: center;
}
.findbottom>span{
  font-size: 10px;
  display: block;
  text-align: center;
  color: #999;
}
img{
	width: 100%;
	height: auto;
}
.middle{
	width: 100%;
}
.middle>div{
	width: calc(33% - 10px);
	float: left;
	margin: 20px 5px 0;

}
.middle p{
	font-size:11px;
	color: #fff;
	display: inline;
	background: #333;
	margin-left: 20px;
}
.middle span{
	color:red;
	font-size: 12px;
}
.more{
	text-align: center;
	color: #999;
	font-size: 12px;
}

</style>