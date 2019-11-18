import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@/styles/main.scss"

import App from "./App.vue";
import router from "./router";
import Axios from "axios";

import './icons'
import store from './store'

// 配置公共URF
Axios.defaults.baseURL = "http://127.0.0.1:2345";


Axios.defaults.withCredentials = true  

// 配置axios
Vue.prototype.$axios = Axios;


Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


