import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  pricesRange: [],
  gramsRange: []
}

const mutations = {
  setRange (state, rangeData) {
    state[rangeData.property] = rangeData.value;
  }
}

const actions = {
  setRange: ({ commit }, rangeData) => commit('setRange', rangeData)
}

const getters = {
  pricesRange: state => state.pricesRange,
  gramsRange: state => state.gramsRange
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
