<template>
	<div class="home">
		<topNav/>
		<homeContent/>
	</div>
</template>
<script>
import topNav from './topNav'
import homeContent from './homeContent'
export default {
  name: 'home',
   components:{
  	topNav,
  	homeContent
  },
  created:function(){
		this.$http.get('http://127.0.0.1:5001/findbusiness')
		.then((d) => {
		this.$store.dispatch('getbuss',d.data)
		})
	}
}
</script>