import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './sass/reset.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (createElement) => createElement(App)
})

