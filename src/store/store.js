import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  rangeFilters: {
    exchangeRate: [],
    grams: null
  },
  sortBy: 'priceAsc'
}

const mutations = {
  setRangeSliderValue (state, rangeData) {
    state.rangeFilters[rangeData.property] = rangeData.value;
  },
  setSortBy (state, value) {
    state.sortBy = value;
  }
}

const actions = {
  setRangeSliderValue: ({ commit }, rangeData) => commit('setRangeSliderValue', rangeData),
  setSortBy: ({ commit }, value) => commit('setSortBy', value)
}

const getters = {
  exchangeRateRangeSliderValue: state => state.rangeFilters.exchangeRate,
  gramsRangeSliderValue: state => state.rangeFilters.grams,
  sortBy: state => state.sortBy
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
