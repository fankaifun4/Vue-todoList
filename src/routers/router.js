import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const first ={
	template:`<div><h1>wellCome to Vue</h1></div>`
}

const second ={
	template:`<div>
		<h1>组件</h1>
		<router-view></router-view>
	</div>`
}

const third ={
	template:`<div><h1>wellCome third to Vue</h1></div>`
}

const thirdChild ={
	template:`<div><h1>wellCome Child third to Vue</h1></div>`
}

const firstChild ={
	template:`<div><h1>wellCome firstChild啊啊 id:{{ $route.params.id }} ；   to Vue</h1></div>`
}

const router=new VueRouter({
	mode:'hash',
	base:__dirname,	
	routes:[
		{
			path:'/',
			name:"first",
			component:first
		},
		{
			path:'/second',
			component:second,
			name:"second",
			children:[
				{
					path:"first",
					name:"first-child",
					component:firstChild
				},{
					path:"thirrd",
					name:"third-child",
					component:thirdChild
				}
			]
		},
		{
			path:'/third',
			name:"third",
			component:third
		}
	]
})

export default router