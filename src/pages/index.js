import Vue from 'vue'
import store from '../pages/store.js'
import Router from '../routers/router.js'
import Index from '../components/index.vue'
new Vue({
	el:"#app",
	store,
	router:Router,	
	render:(render)=>render(Index)
})