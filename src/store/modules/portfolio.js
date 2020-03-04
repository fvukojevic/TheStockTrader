const state = {
  funds: 10000,
  stocks: [],
};

const getters = {
  getStocksPortfolio: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters.getStocks.find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        stockPrice: record.stockPrice
      }
    });
  },
  getFunds: (state) => {
    return state.funds;
  }
};

const mutations = {
  buyStock(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  sellStock(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  setPortfolio(state, potfolio) {
    state.funds = potfolio.funds;
    state.stocks = potfolio.stockPortfolio ? potfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock: ({commit}, order) => {
    console.log(order);
    commit('sellStock', order);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}

