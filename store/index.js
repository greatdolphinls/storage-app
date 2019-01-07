import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
Vue.use(VueResource);

const createStore = () => {
  return new Vuex.Store({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
  })
}
export default createStore