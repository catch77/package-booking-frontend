import getters from './getters'
import actions from  './actions'
import mutations from './mutations'

import  Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    packages:[],
    filterStatus: 0,//未取件
  },
  getters,
  actions,
  mutations
});

export default store;
