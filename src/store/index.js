import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'


import mutations from './mutations'
/**
 * vue 中使用插件都是 用use
 */
Vue.use(Vuex)




export default new Vuex.Store({

  /**
   * 存放全局公用的数据
   */
  state:state,
  /*actions: {
    /!**
     *
     * @param ctx 上下文
     * @param city 城市
     *!/
    changCity(ctx, city) {
      ctx.commit('changCitys', city)
    }
  },*/
  mutations:mutations

});
