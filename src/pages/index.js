import Vue from 'vue'
import Router from '../routers/router.js'
import app from '../components/main.vue'
new Vue({
	router:Router,
	render:arg=>{ return arg(app) }
}).$mount('#app')