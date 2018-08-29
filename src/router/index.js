import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import details from '@/components/details'
Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    //路由跳转传参必须在配置路由时加上参数;
    {
      path:'/details/:id',
      name: 'details',
      component: details,
      meta: {
        title: '详情'
      }
    },
    // {
    //   path: '/content',
    //   component: content,
    //   name: 'content',
    //   meta: {
    //     login_require: true
    //   },
    //   children: [
    //     {
    //       path: 'header',
    //       name: 'header',
    //       component: header
    //     }
    //   ]
    // },
    {
      path: '*', // 错误路由
      redirect: '/'
    }
  ]
})

route.beforeEach((to, from, next) => {
  // if (to.meta.login_require) {
  //   var login = this.a.isLogin
  //   if (login) {
  //     next()
  //   } else {
  //     next('/')
  //   }
  // } else {
  //   next()
  // }
  if (to.meta.title) {
    document.title = to.meta.title
    next()
  } else {
    next()
  }
})
export default route
