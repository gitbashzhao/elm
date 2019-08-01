<template>
  <div class="topcl">
	<ul class="topclist" :style="'left:'+topcLeft" @touchstart="touchstartx($event)" @touchmove="touchstartxx($event)">
		<li>
			<div v-for="(item,index) in topc.top1">
				<div><img  :src="item.imgUrl"></div>
				<p>{{item.text}}</p>
			</div>
		</li>
		<li>
			<div v-for="(item,index) in topc.top2">
				<div><img  :src="item.imgUrl"></div>
				<p>{{item.text}}</p>
			</div>
		</li>
	</ul>
	<ul class="activeUl">
		<li :class="active[0]"></li>
		<li :class="active[1]"></li>
	</ul>
  </div>
</template>
<script>
export default{
	name:'topc',
	data(){
		return{
			topc:{
				top1:[],
				top2:[]
			},
			topcLeft:'0',
			active:['active',''],
			x:0,
			xx:0
		}
	},
	methods:{
		touchstartx($event){
	       this.x = 0
	       this.x = $event.changedTouches[0].pageX;
	    },
	    touchstartxx($event,z){
	      let audio =document.querySelector('#audio')
	      this.xx = 0
	      this.xx = $event.changedTouches[0].pageX;
	      //左滑
	      if(this.x-100>this.xx){
	        this.topcLeft = "-100%"
	        this.active=['','active']
	      }
	      if(this.x<this.xx-100){ 
	          this.topcLeft = "0" 
	          this.active=['active','']  
	      }
		}
	},
	created:function(){
		this.axios.get('/api/topc', {
	  	headers:{'Content-type':'application/json;charset="utf-8"'}
	   	})
	    .then(d => {
	      this.topc.top1=d.data.data.topNav1
	      this.topc.top2=d.data.data.topNav2

	    })
	}
}
</script>
<style scoped>
ul{
	list-style: none;
	margin: 0;
	padding:0;
}
.activeUl>li{
	margin: 10px 2px 0;
	float: left;
    width: 10px;
    height: 2px;
    background: #ddd;
}
.activeUl>.active{
	background: #e49;
}
.activeUl{
	width: 30px;
	margin: 0 auto;
}
.topcl{
	width: 100%;
	overflow: hidden;
}
.topclist{
	width: 200%;
	transition: left .35s;
	position: relative;
}
.topclist>li{
	float: left;
	width: 50%;
}
.topclist>li>div{
	float: left;
	width: 20%
}
.topclist>li>div>div{
	padding: 10px;
}
.topclist>li>div img{
	width: 100%;
	height:auto;
}
.topclist>li>div>p{
	margin: 0px;
	margin-top: -5px;
	text-align: center;
	font-size: 9px;
}	
</style>