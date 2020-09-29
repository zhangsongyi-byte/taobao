import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { post, get } from "./utils/axios";

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.yPost = post;
Vue.prototype.yGet = get;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
