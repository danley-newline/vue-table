import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import { BootstrapVue } from 'bootstrap-vue'
import * as _ from  'lodash'
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);
Vue.use(BootstrapVue);



new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
