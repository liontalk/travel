import Vue from 'vue'
import Vuex from 'vuex'

/**
 * vue 中使用插件都是 用use
 */
Vue.use(Vuex)

/**
 * 创建仓库
 */
export default new Vuex.Store({

  /**
   * 存放全局公用的数据
   */
  state: {
    city: "北京"
  },
  actions: {
    /**
     *
     * @param ctx 上下文
     * @param city 城市
     */
    changCity(ctx, city) {
      ctx.commit('changCitys', city)
    }
  },
  mutations: {
    changCitys(state, city) {
      state.city = city;
    }

  }

});
