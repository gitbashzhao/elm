<template>
	<div >
		<div v-if='list!=[]' v-for='item in list' style="width: 95%;overflow: hidden;margin: 10px auto;border:1px solid #ddd;">
			<img v-if='item.userimg' :src="'http://127.0.0.1:5001/foodimg/'+item.userimg" style=" width: 40px;height: 40px;float: left;">
			<span style=" font-size: 10px; float: right;" >{{item.nickname}}</span>
			<p style="margin: 15px;">{{item.pingjia=''?'无':item.pingjia}}</p>
			<p style=" font-size: 10px; float: left;">曾购买{{item.food}}等商品</p>
			<p style=" font-size: 10px; float: right;">{{item.time}}</p>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
	name: 'fooddet',
	data(){
		return{
			list:[]
		}
	},
	computed:{
		...mapState(['username','bname'])
	},
	created:function(){
		this.$http.get('http://127.0.0.1:5001/findping?user='+this.username)
		.then((d) => {
	    var data =d.data
	    for (var i = 0; i < data.length; i++) {
	    	if(data[i].bname==this.bname){
	    		this.list.push(data[i])
	    	}
	    }
	    console.log(this.list)
	})
	}
}

</script>
<style scoped>
	img{
		width: 40px;
		height: 40px;
	}
</style>