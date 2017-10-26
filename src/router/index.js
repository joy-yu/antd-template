import Vue from 'vue'
import VueRouter from 'vue-router'
// import component
import Login from '~/views/login.vue'
import Home from '~/views/home.vue'
import User from '~/views/user/user.vue'
import Hospital from '~/views/hospital/hospital.vue'
import Section from '~/views/hospital/section.vue'
import NotFound from '~/views/404.vue'

import Category from '~/views/project/category.vue'
import Activity from '~/views/activity/activity.vue'

import userStat from '~/views/statistic/user.vue'
import dataStat from '~/views/statistic/data.vue'
import orderStat from '~/views/statistic/order.vue'
import pharmacyStat from '~/views/statistic/pharmacy.vue'
import productStat from '~/views/statistic/product.vue'

/**
 * content
 */
import Banner from '~/views/content/banner.vue'

/* my */
import Pharmacy from '~/views/pharmacy/pharmacy.vue'
import Account from '~/views/pharmacy/account.vue'
import Product from '~/views/product/product.vue'
import ProductAdd from '~/views/product/add.vue'
import Order from '~/views/order/order.vue'
import OrderCfg from '~/views/order/ordercfg.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: 'admin',
  routes: [{
    path: '/login',
    name: 'login',
    component: Login,
    ignore: true
  },{
    path: '/',
    name: '',
    leaf: true,
    component: Home,
    redirect: {name: '用户管理'},
    iconCls: 'el-icon-information',
    children: [{
      path: '/user',
      name: '用户管理',
      component: User
    }]
  },{
    path: '/',
    name: '',
    iconCls: 'el-icon-information',
    leaf: true,//只有一个节点
    component: Home,
    children: [{
      path: '/pharmacy',
      name: '药店管理',
      component: Pharmacy
    }, {
      path: '/pharmacyaccount/:pharmacyId',
      name: '药店子账号管理',
      component: Account
    }]
  },{
        path: '/404',
        component: NotFound,
        name: '',
        ignore: true,
    },{
    path: '/',
    name: '',
    iconCls: 'el-icon-information',
    leaf: true,//只有一个节点
    component: Home,
    children: [{
      path: '/hospital',
      name: '医院科室',
      component: Hospital
    },{
    path: '/section/:hospital',
    ignore: true,
    component: Section
  }]
},
   {
    path: '/',
    name: '',
    iconCls: 'el-icon-information',
    leaf: true,//只有一个节点
    component: Home,
    children: [{
      path: '/product',
      name: '商品管理',
      component: Product
    }, {
      path: '/product/add',
      name: '商品添加',
      component: ProductAdd
    }, {
      path: '/product/edit/:productId',
      name: '商品编辑',
      component: ProductAdd
    }]
  },{
   path: '/',
   name: '',
   iconCls: 'el-icon-information',
   leaf: true,//只有一个节点
   component: Home,
   children: [{
     path: '/activity',
     name: '活动管理',
     component: Activity
   }]
  }, {
    path: '/',
    name: '订单管理',
    component: Home,
    iconCls: 'el-icon-information',
    children: [{
      path: '/order',
      name: '订单列表',
      component: Order
    }, {
      path: '/ordercfg',
      name: '订单设置',
      component: OrderCfg
    }]
  },{
    path: '/',
    name: '分类管理',
    component: Home,
    iconCls: 'el-icon-information',
    children: [{
      path: '/category/project',//project
      name: '商品分类',
      component: Category
    }]
  },{
    path: '/',
    name: '内容管理',
    component: Home,
    iconCls: 'el-icon-information',
    children: [{
      path: '/banner',
      name: 'banner管理',
      component: Banner
    }]
  },{
    path: '/',
    name: '统计分析',
    iconCls: 'el-icon-information',
    component: Home,
    children: [{
      path: '/statistic/user',
      name: '用户统计',
      component: userStat
    },{
      path: '/statistic/pharmacy',
      name: '药店统计',
      component: pharmacyStat
    },{
      path: '/statistic/data',
      name: '数据概况',
      component: dataStat
    },{
      path: '/statistic/product',
      name: '商品统计',
      component: productStat
    },{
      path: '/statistic/order',
      name: '订单统计',
      component: orderStat
    }]
  },{
        path: '*',
        ignore: true,
        redirect: { path: '/404' }
    }]
})
