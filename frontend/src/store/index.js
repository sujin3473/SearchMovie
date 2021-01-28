import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: null
    },
    mutations: {
        setList(state, data) {
            state.list = data
        },
        clearList(state) {
            state.list = null
        },   
    },
    actions: {
    },
    modules:{
    }
})