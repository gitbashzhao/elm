<template>
  <div>
    <router-view/>
    <mu-bottom-nav class="bottomNav" value="0">
      <mu-bottom-nav-item :to="{name:'home'}" title="首页" icon="face" value="0"></mu-bottom-nav-item>
      <mu-bottom-nav-item :to="{name:'find'}" title="发现" icon="explore"></mu-bottom-nav-item>
      <mu-bottom-nav-item :to="{name:'order'}" title="订单" icon="receipt"></mu-bottom-nav-item>
      <mu-bottom-nav-item :to="{name:'mine'}" title="我的" icon="perm_identity"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'bottomnav',
  data () {
    return {
      msg: 'location_on'
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottomNav{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ddd;
}
</style>
