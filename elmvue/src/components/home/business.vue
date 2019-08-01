<template>
	<div class="business">
		<div  class="buslist" v-if="buslist!=''" v-for="(item,index) in buslist">
			<div style='overflow: hidden;' @click.stop='intofood(item.bname,item.bavatar)'>
				<div class='zhegai' v-if="isdislike[index]">
					<div class="dislike" @click.stop='dlike(index)'>不喜欢</div>
					<div style="float: right; font-size: 18px;color: #fff;margin-right: 10px;padding:5px;"  @click.stop='ndislike()'>x</div>
				</div>
				<img class="buslogo" :src="'http://127.0.0.1:5001/businessimg/'+item.bavatar">
				<div class="busxinx">
					<span style="position: absolute; z-index: 99;right: 10px;" @click.stop='dislike(index)'>...</span>
					<h3 class="bname">{{item.bname}}</h3>
					
					<div class='pingjiayues'>
						<img src="/static/findimg/xingji.svg">
						<div class="xingji" :style="'left:'+(5-item.xingji)/5*-60+'px'"></div>	
						<p class="yueshou">{{item.xingji}} 月售{{item.yueshou}}单</p>
					</div>
					<div class="peisong">
						<p style="float: left;">{{item.statsong}}￥起送 | {{item.peisong+'￥配送费' }}</p>
						<p style="float:right;">{{item.juli}}m | {{item.songtime}}分钟</p>	
					</div>
					<mu-chip class="demo-chip" style="font-size: 10px; height: 17px; margin: 7px 0;">
				   		{{item.comment}}
				 	</mu-chip>
				 	<div>
						<span class="youhuicolor" :style="'background:'+item.youhuicolor">{{item.youhui}}</span>
						<span class="youhuiactive">{{item.active}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'business',
  computed:{
		...mapState(['buslist','username'])
  },
  data(){
  	return{
  		isdislike:[],
  		xingji:[],
  		dashu:[]
  	}
  },
  methods:{
  	intofood(bnanme,bimg){
  		this.$store.dispatch('infoods',[bnanme,bimg])
  		this.$router.push({name:'food'})
  	},
  	dislike(i){
  		this.isdislike=[]
  		for (let k=0;k<= this.buslist.length ; k++){
  			this.isdislike.push(false)
  		}
  		this.isdislike[i]=true;
  	},
  	ndislike(){
  		this.isdislike=[]
  	},
  	dlike(i){
  		this.isdislike=[]
  		this.$store.dispatch('dilikes',i)
  	}
  },
  created:function(){
		this.$http.get('http://127.0.0.1:5001/findping?user='+this.username)
		.then((d) => {
	    var data =d.data
	    var xing = []
	    var ji = []
	    var num=0
	    for (var i = 0; i < this.buslist.length; i++) {
	    	for (var j = 0; j < data.length; j++) {
	    		if (this.buslist[i].bname==data[j].bname) {
	    			xing.push(data[j].xingji)
	    		}
	    	}
	    	ji.push(xing)
	    	xing =[]
	    }
	    for (var i = 0; i < ji.length; i++) {
	    	for (var j = 0;j < ji[i].length;j++) {
	    		num = num + (ji[i][j]*1)

	    	}
	    	num = num /ji[i].length
	    	num = Math.floor(num*10)/10
	    	this.xingji.push(num)
	    	this.dashu.push(ji[i].length)
	    	num =0
	    }
	    for (var i = 0; i < this.buslist.length; i++) {
		this.$http.get('http://127.0.0.1:5001/haoping?bname='+this.buslist[i].bname+'&xingji='+this.xingji[i]+'&dashu='+this.dashu[i])
		.then((d) => {
		})		
	}
	})
	
	
	}
}
</script>
<style scoped>
	.business{
		position: relative;
		width: 100%;
		height:2000px;
	}
	.buslist{
		margin: 5px 5px 25px;
		overflow: hidden;
	}
	.buslogo{
		width: 70px;
		height:auto;
		float: left;
	}
	.busxinx{
		float: left;
		width: calc(100% - 10px - 80px);
		padding-left: 10px;
	}
	.bname{
	margin: 0;
    margin-top: 3px;
    font-size: 15px;
	}
	.pingjiayues{
		overflow: hidden;
		margin:5px 0;
	}
	.pingjiayues>img,.pingjiayues>p,.pingjiayues>div{
		float: left;
	}
	.pingjiayues>p{
		font-size: 12px;
		margin-left: 10px
	}
	.pingjiayues>img{
		margin-top: 3px;
	}
	.peisong{
		margin: 5px 0;
		overflow: hidden;
	}
	.peisong>p{
		font-size: 10px;
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
		font-size: 11px;
	}
	.xingji{
		background: #fafafa;
	    height: 10px;
	    position: relative;
	    margin-top: 3px;
	    width: 60px;
	}
	.yueshou{
		position: relative;
		left:-60px;
	}
	.zhegai{
		position: absolute;
		z-index: 5;
		width: calc(100% - 10px);
		height:135px;
		background: rgba(0,0,0,.35);
	}
	.dislike{
		width: 40px;
	    height: 40px;
	    border-radius: 50%;
	    position: absolute;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    margin: auto;
	    background: #fafafa;
	    font-size: 10px;
	    line-height: 40px;
	    text-align: center;
	}

</style>