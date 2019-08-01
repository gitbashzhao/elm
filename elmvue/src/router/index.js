import Vue from 'vue'
import Router from 'vue-router'
import  bottomnav from '@/components/bottomnav'
import home from '@/components/home/home'
import find from '@/components/find/find'
import mine from '@/components/mine/mine'
import order from '@/components/order/order'
import food from '@/components/home/HomeContent/food/food'
import pjxx from '@/components/home/HomeContent/food/foodcont/pjxx'
import sjxx from '@/components/home/HomeContent/food/foodcont/sjxx'
import swlb from '@/components/home/HomeContent/food/foodcont/swlb'
import pay  from '@/components/home/HomeContent/food/foodcont/pay/pay'
import login from '@/components/logoin/logoin.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bottomnav',
      name: 'bottomnav',
      component: bottomnav,
      children:[
	      	{
	      	  path:'home',
	      	  name:'home',
	      	  component:home
	      	},
	      	{
	      	  path:'find',
	      	  name:'find',
	      	  component:find
	      	},
	      	{
	      	  path:'mine',
	      	  name:'mine',
	      	  component:mine
	      	},
	      	{
	      	  path:'order',
	      	  name:'order',
	      	  component:order
	      	},
	      	{
	      	  path:'food',
	      	  name:'food',
	      	  component:food,
	      	  children:[
		      	{
		      	  path:'pjxx',
		      	  name:'pjxx',
		      	  component:pjxx
		      	},
		      	{
		      	  path:'sjxx',
		      	  name:'sjxx',
		      	  component:sjxx
		      	},
		      	{
		      	  path:'swlb',
		      	  name:'swlb',
		      	  component:swlb
		      	}
	      	  ]
	      	},
	      	{
	      	  path:'pay',
	      	  name:'pay',
	      	  component:pay
		    },
	      	{
      		  path: '*',
     		   //重定向
      		  redirect: {name: 'home'}
	      	}
      ]
    },
	{
  	  path:'/login',
  	  name:'login',
  	  component:login
	},
	{
	  path: '*',
	   //重定向
	  redirect: {name: 'login'}
	}


  ]
})
