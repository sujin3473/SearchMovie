import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Movies from '../views/Movies.vue'
import Movie from '../views/Movie.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies
    },    {
        path: '/movies/:id',
        name: 'Movie',
        component: Movie
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y:0 }
        }
    }
})

export default router