import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  pricesRange: [],
  gramsRange: [],
  sortBy: ''
}

const mutations = {
  setRange (state, rangeData) {
    state[rangeData.property] = rangeData.value;
  },
  setSortBy (state, value) {
    state.sortBy = value;
  }
}

const actions = {
  setRange: ({ commit }, rangeData) => commit('setRange', rangeData),
  setSortBy: ({ commit }, value) => commit('setSortBy', value)
}

const getters = {
  pricesRange: state => state.pricesRange,
  gramsRange: state => state.gramsRange,
  sortBy: state => state.sortBy
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
