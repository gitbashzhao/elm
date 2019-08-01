<template>
	<div class="topNav">
		<mu-appbar v-if="isScroll" style="width:100%;height:45px" color="primary">
			<mu-button icon slot="left">
				<mu-icon value="location_on"></mu-icon>
			</mu-button>
			<p>{{usercomment}}</p>
			<mu-button icon slot="right">
				<mu-icon value="add"></mu-icon>
			</mu-button>
		</mu-appbar>
		<div :class="scrollActive" class="topNav_searchd">
			<input class="topNav_search"  placeholder="搜索饿了么商家、商品名称" type="text" name="">
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'topNav',
  computed:{
		...mapState(['isScroll','scrollActive','usercomment'])
	}
}
</script>
<style scoped>

.topNav_searchd{
	width:100%;
	background: #2196F3;
    padding-bottom:10px;
}

.topNav_search{
	width: 90%;
	height: 35px;
	margin-left: 15px;
	text-align: center;
}
.scrollActive{
	position: fixed;
	top:0;
	padding-top: 10px;
	z-index: 9;
}

</style>
