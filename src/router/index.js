import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue' // 登录
import Contact from '@/pages/contact/contact.vue' // 联系我们

Vue.use(Router)
const Layout = r => require.ensure([], () => r(require('@/pages/layout.vue')), 'Layout')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'manage',
      component: Layout,
      redirect: '/login',
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        }, {
          path: '/contact',
          name: 'Contact',
          component: Contact
        }
      ]
    }
  ]
})
