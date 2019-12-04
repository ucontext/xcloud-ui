import Vue from "vue";
import ElementUI from "element-ui";
import Echarts from "echarts";

import "element-ui/lib/theme-chalk/index.css";
import "@/styles/main.scss"

import App from "./App.vue";
import router from "./router";
import Axios from "axios";

import './icons'
import store from './store'




Vue.use(ElementUI);
Vue.use(Echarts)


// 配置公共URF
// Axios.defaults.baseURL = "http://127.0.0.1:2345";
// Axios.defaults.withCredentials = true  

// 配置axios
// Vue.prototype.$axios = Axios;

Vue.prototype.$echarts=Echarts


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


