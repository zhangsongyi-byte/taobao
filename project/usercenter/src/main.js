import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { post,get,put } from "./utils/axios"
import moment from "moment";
Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.yPost=post;
Vue.prototype.yGet=get;
Vue.prototype.yPut=put;

Vue.filter('globalFormatTime',value=>{
  let time = moment(value).format("YYYY-MM-DD, HH:mm:ss a");
  return time;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
