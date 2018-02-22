// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

import Vuex from 'vuex' // Implemented for Translation
import vuexI18n from 'vuex-i18n' // Translation
import ptBR from './i18n/pt-BR'

// TRANSLATE
Vue.use(Vuex)
const store = new Vuex.Store()
Vue.use(vuexI18n.plugin, store)
Vue.i18n.add('ptBR', ptBR)
Vue.i18n.set('enUS')

// THEME
Vue.use(Vuetify, {
  theme: {
    primary: colors.amber.accent1,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})

// Vue.use(Vuetify, { theme: {
//   primary: '#ee44aa',
//   secondary: '#424242',
//   accent: '#82B1FF',
//   error: '#FF5252',
//   info: '#2196F3',
//   success: '#4CAF50',
//   warning: '#FFC107'
// }})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
