// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import qs from 'qs';
import axios from 'axios';
Vue.use(Mint);
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll);
import 'mint-ui/lib/style.css';
Vue.config.productionTip = false;
Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
