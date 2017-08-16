import Vue from 'vue'
import VueRouter from 'vue-router'
import Persons from '../components/persons.vue'
Vue.use(VueRouter)

const router=new VueRouter({
	mode:'hash',
	base:__dirname,	
	routes:[
		{
			path:'/persons',
			name:"persons",
			component:Persons
		}
	]
})

export default router