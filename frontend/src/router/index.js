import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/IndexPage'
import LoginPage from '@/components/LoginPage'

import Main from '@/views/Main'
import Movies from '@/views/Movies'
import Movie from '@/views/Movie'
import VueRouter from 'vue-router'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/loginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/movies/:id',
      name: 'Movie',
      component: Movie
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.Base_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x:0, y:0 }
    }
  }
})

export default router