// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './stylus/main.styl'
import 'animate.css'
import 'font-awesome/css/font-awesome.min.css'
import 'mdi/css/materialdesignicons.min.css'

import Vue from 'vue'
import App from './App'
import Frameworks from './frameworks'

Vue.config.productionTip = false

Frameworks.RegisterComponents(Vue)

const i18n = Frameworks.i18n
const store = Frameworks.Store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  i18n,
  store,
  template: '<App/>'
})
