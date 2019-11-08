import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";

// 配置公共URF
Axios.defaults.baseURL = "http://10.18.250.10:5000";

// 配置axios
Vue.prototype.$axios = Axios;


Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
<<<<<<< HEAD
}).$mount("#app");
=======
}).$mount("#app");
>>>>>>> ab1eef025c558b31f8d99b5e5ee7406a614d41db
