import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
import router from './router'
import Portfolio from '@/components/Portfolio'

require('bootstrap')
require('jquery.easing')

require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')

Vue.prototype.jquery = jquery

Vue.config.productionTip = false

Vue.component(Portfolio)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
