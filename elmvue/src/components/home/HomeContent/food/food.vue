<template>
	<div v-if="business.length>0" style="position: relative;z-index: 99">
		<div style="background: rgba(0,0,0,.35);height: 320px;width: 100%;">
			<img v-if='business[0].bavata' :src="'http://127.0.0.1:5001/businessimg/'+business[0].bavatar" class="mohu">
			<div class="banhui" @click="banhui()"><</div>
		</div>
		<div style="width: 100%; position: absolute;top: 50px;">
			<img :src="'http://127.0.0.1:5001/businessimg/'+business[0].bavatar" class="logo">
			<div class="bcontext">
				<h2>{{bname}}</h2>
				<p class="yueshou">评价{{business[0].xingji}} 月售{{business[0].yueshou}}单 配送约{{business[0].songtime}}分钟</p>
				<mu-chip class="demo-chip" style="font-size: 10px; height: 25px; margin: 2px 0;background: #FFF507;">
				   		{{business[0].comment}}
				</mu-chip>
				<span class="youhuicolor" :style="'background:'+business[0].youhuicolor">{{business[0].youhui}}</span>
				<span class="youhuiactive">{{business[0].active}}</span>
				<div class="foodrou">
					<span :class="chicked[0]" @click="ischicked(0,'swlb')">点餐</span>
					<span :class="chicked[1]" @click="ischicked(1,'pjxx')">评价</span>
					<span :class="chicked[2]" @click="ischicked(2,'sjxx')">商家</span>
				</div>
				<router-view/>
			</div>
			
		</div>
		
	</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'food',
  data(){
  	return{
  		business:[],
  		chicked:['chicked','','']
  	}
  },
  computed:{
		...mapState(['bname'])
  },
  methods:{
  	banhui(){
  		 this.$router.push({name:'home'})
  	},
  	ischicked(i,name){
  		this.chicked=['','','']
  		this.chicked[i]='chicked'
  		this.$router.push({name:name})
  	}
  },
  created:function(){
		this.$http.get('http://127.0.0.1:5001/bnamefood?bname='+this.bname)
		.then((d) => {
        this.business=d.data
		})
		this.$router.push({name:'swlb'})
	}
}
</script>
<style scoped>
.mohu{
	filter: blur(10px);
    width: 100%;
    position: absolute;
    z-index: -2;
}
.logo{
	width: 80px;
	position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
    height: auto;
}
.banhui{
	font-size: 30px;
	position: absolute;
	left:0;
	top: 0;
	margin: 5px 15px;
	color: #fff;
	z-index: 5;
}
.bcontext{
	background: #fafafa;
	width: 100%;
	min-height: 500px;
	margin-top: 50px;
	text-align: center;
	padding-bottom: 5px;
}
.bcontext>h2{
	padding-top: 35px;
	margin: 0
}
.bcontext>p{
	font-size: 12px;
    padding: 5px 0;
}
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
.foodrou{
	background: #f1f1f1;
	overflow: hidden;
}
.foodrou>span{
	float: left;
	width: calc(100% / 3);
	padding:10px;
}
.chicked{
	border-bottom: #5E79B7 solid;
	color:#5E79B7;
}
</style>