<template>
	<div @touchmove="scroll($event)" class="homeContent">
		<topc/>
		<midc/>
		<btmc/>
		<business/>
	</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import topc from './HomeContent/topc'
import midc from './HomeContent/midc'
import btmc from './HomeContent/btmc'
import business from './business'
export default{
	name:'homeContent',
	components:{
	    topc,
	    midc,
	    btmc,
	    business
	},
	computed:{
		...mapState(['isScroll'])
	},
	methods:{
		scroll($event){
			if($event.path[$event.path.length-3].scrollTop<30&&this.$store.state.isScroll){
				return
			}
			if($event.path[$event.path.length-3].scrollTop>=30){
				this.$store.dispatch('changeScrolls',[false,'scrollActive'])
			}else{
				this.$store.dispatch('changeScrolls',[true,''])
			}
			if($event.path[$event.path.length-3].scrollTop>=400){
				this.$store.dispatch('changescrollplms','scrollplms')
			}else{
				this.$store.dispatch('changescrollplms','')
			}
		}
	}
}
</script>
<style scoped>
.homeContent{
	width: 100%;
}

</style>