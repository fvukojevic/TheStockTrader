import stocks from '../../data/stocks';

const state = {
  stocks: []
};

const getters = {
  getStocks: state => {
    return state.stocks;
  }
};

const mutations = {
  setStocks(state, stocks) {
    state.stocks = stocks;
  },
  /*rndStocks(state) {

  }*/
};

const actions = {
  initStocks: ({commit}) => {
    commit('setStocks', stocks);
  },
  randomizeStocks: ({commit}) => {
    commit('rndStocks');
  },
  buyStock: ({commit}, order) => {
    commit('buyStock', order);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
}
