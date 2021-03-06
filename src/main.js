// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import axios from './api/api.js'

Vue.use(axios)

Vue.use(MuseUI)

Vue.config.productionTip = false

import store from './store/store.js'


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})



router.beforeEach((to, from, next) => {
	/**
	 * to -> 跳转的路由的信息  name meta path ...etc
	 * from -> 当前路由的信息
	 * @type {[type]}
	 */
	// console.info(to, from)
	document.title = to.name || document.title
	next();
})