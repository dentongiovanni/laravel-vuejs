import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Member from '@/views/Member'
import MemberList from '@/components/Member/MemberList'
import MemberForm from '@/components/Member/MemberForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/member',
      name: 'member',
      component: Member,
      children: [
        { name: 'list', path: 'list', component: MemberList },
        { name: 'form', path: 'form', component: MemberForm },
        { name: 'edit', path: 'edit', component: MemberForm },
      ]
    },

    
    { path: '*', redirect: '/' }
  ]
})
