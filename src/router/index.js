import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import '@/assets/css/reset.css'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },{
    //动态路由 带一个参数 参数值放到id中
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
  ]
})
