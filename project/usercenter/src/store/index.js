import Vue from "vue";
import Vuex from "vuex";
import * as types from './mutation-type'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('userInfo'))||{}  //定义一个新的对象来接收传过来的list
  },
  mutations: {
    /* 获取login页面传过来的用户信息list */
    [types.UPDATE_INFO](state,data){
      state.user=data
      console.log("vuex data",data)
    }
  },
  actions: {
    updateInfo({commit},data){
      localStorage.setItem('userInfo',JSON.stringify(data));
      // console.log(data)
      commit(types.UPDATE_INFO,data)
    }
  },
  modules: {}
});
