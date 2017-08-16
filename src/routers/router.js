import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main.vue'
import personList from '../components/personList.vue'
Vue.use(VueRouter)

const router=new VueRouter({
	mode:'hash',
	base:__dirname,	
	routes:[
		{
			path:'/',
			name:"index",
			component:Main
		},
		{
			path:"/persons",
			name:'personsList',
			component:personList
		}
	]
})

export default router
