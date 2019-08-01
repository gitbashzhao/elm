<template>
	<div class="btmc">
		<p>—— 推荐商家 ——</p>
		<div class="plms" :class="scrollplms">
			<span :class="activecolor[0]" @click="changeplms(0,0,'id')">综合排序<i class="activei"></i></span>
			<span :class="activecolor[1]" @click="changeplms(1,-1,'juli')">距离最近</span>
			<span :class="activecolor[2]" @click="changeplms(2,1,'xingji')">好评优先</span>
			<span :class="activecolor[3]" @click="changeplms(3,0,'')">筛选<mu-icon size ='13'value="swap_vert"></mu-icon></span>
			<div class="list" v-if="islist" @click="shouhui()">
				<ul>
					<li @click="changeplms(0,-1,'id')"style="padding-top:0;" :class="activecolor[0]">综合排序</li>
					<li @click="changeplms(1,-1,'juli')" :class="activecolor[1]">距离最近</li>
					<li @click="changeplms(2,1,'xingji')"  :class="activecolor[2]">好评优先</li>
					<li @click="changeplms(4,1,'yueshou')"  :class="activecolor[4]">销量最高</li>
					<li @click="changeplms(5,-1,'statsong')" :class="activecolor[5]">起送价最低</li>
					<li @click="changeplms(6,-1,'songtime')" :class="activecolor[6]">配送最快</li>
					<li @click="changeplms(7,-1,'peisong')" :class="activecolor[7]" style="padding-bottom:0; ">配送价最低</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
export default{
	name:'btmc',
	computed:{
		...mapState(['scrollplms'])
	},
	data(){
		return{
			islist:false,
			activecolor:['','','','','','','','']
		}
	},
	methods:{
		changeplms(i,j,r){
			this.activecolor=['','','','']
			this.activecolor[i]='activecolor'
			if (i==0) {
				if(!this.islist){
					this.islist=true
				}else{
					this.islist=false
				}
			}else{
				this.islist=false
			}
			this.$store.dispatch('changeplmss',[j,r])
		},
		shouhui(){
			this.islist=false
		}
	}
}
</script>
<style scoped>
.activecolor{
	color:#4E9FEB;
}
.list{
	position: absolute;
	z-index: 60;
	background: rgba(0,0,0,.45);
	height: 415px;
	margin-top: 35px;
}
.list>ul{
	list-style: none;
	background: #fafafa;
	top: 0;
	width: 320px;
    padding: 10px;
    margin: 0;
}
.list li{
	width: 100%;
	font-size:12px;
	padding: 8px 5px;

}
.btmc{
	margin: 0 auto;
	z-index: 50;
}
.btmc>p{
	text-align: center;
    margin-top: 10px;
    font-size: 13px;
}
.plms{
	width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
    background: #fafafa;
    z-index: 50;
    height: 50px;
}
.plms>span{
	float: left;
	width: 25%;
	text-align: center;
	font-size: 12px;
}
.activei{
	width: 0;
	height: 0;
    top: 10px;
    left: 5px;
    position: relative;
	border-top:3px solid #000;
	border-bottom:3px solid #fff;
	border-left:3px solid #fff;
	border-right:3px solid #fff;
}
.scrollplms{
	position: fixed;
	top:50px;
	background: #fff;
    left: 0px;
    width: 100%;
}
</style>