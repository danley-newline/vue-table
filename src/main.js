import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as _ from  'lodash'
import Carousel3d from 'vue-carousel-3d';
import {apolloProvider} from './api/graphql/provider';
import VueApollo from "vue-apollo";

Vue.use(VueApollo);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.use(Carousel3d);


new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})
