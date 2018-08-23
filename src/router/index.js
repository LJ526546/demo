import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import header from '@/components/header'
import content from '@/components/content'
import admin from '@/components/admin'
import home from '@/components/home'
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
    {
      path: '/login',
      component: login,
      meta: {
        login_require: false
      }
    },
    {
      path: '/content',
      component: content,
      name: 'content',
      meta: {
        login_require: true
      },
      children: [
        {
          path: 'header',
          name: 'header',
          component: header
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: {
        login_require: true
      }
    },
    {
      path: '***', // 错误路由
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
