<template>
	<div>
		<div>
			<img class="f1img" src="/static/findimg/f1.jpeg">
		</div>
		<div class="fladd">
			<div class="fl">
				<h4 style="color: rgb(255,153,0);">金币商城</h4>
				<p>0元好物在这里</p>
				<img style="margin-top: 20px;" class="m1img" src="/static/findimg/m1.webp">
			</div>
			<div class="fr">
				<div style="height:75px; border-bottom:1px solid #ededed; padding:10px 10px 0; ">
					<div style="float: left;">
						<h4 style="color: rgb(27,169,255);">推荐有奖</h4>
						<p>10元现金拿不停</p>
					</div>
					<img class="m2img" src="/static/findimg/m2.webp">
				</div>
				<div style="height:75px; padding: 20px 10px 0px;">
					<div style="float: left; ">
						<h4 style="color: rgb(237,102,96);">周边优惠</h4>
						<p>领取口碑好卷</p>
					</div>
					<img class="m2img" src="/static/findimg/m3.webp">
				</div>
			</div>
		</div>
		<findbottom></findbottom>
	</div>
</template>
<script>
import findbottom from './findbottom.vue'
export default {
  name: 'find',
  components:{
  	findbottom
  }
}
</script>
<style scoped>
	.fladd{
		overflow: hidden;
	}
	.f1img{
		width: 100%;
		height: auto;
		margin-bottom: 7px;
	}
	.fr{
		float: right;
		width: 50%;
		background: #fff;
		height:151px;
		overflow: hidden;
	}
	.fl{
		float: left;
		width: calc(50% - 1px);
		background: #fff;
		height:151px;
		padding:10px;
		border-right: 1px solid #ededed;
	}
	.m1img{
		width: 50%;
		height: auto;
		float: right;
	}
	.m2img{
		width: 35%;
		height:auto;
		float: right;
	}
	h4{
		margin: 0;
		width: 100%;
	}
	p{
		margin:0;
		color: #999;
		font-size: 12px;
	}
</style>