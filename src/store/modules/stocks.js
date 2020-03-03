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
  rndStocks(state) {
    state.stocks.forEach(stock => {
      stock.stockPrice = Math.round(stock.stockPrice * (1 + Math.random() - 0.4));
    });
  }
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
