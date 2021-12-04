import { createStore } from "vuex";

export default createStore({
  state: {
    listValute: [],
  },
  mutations: {
    setListValute(state, payload) {
    state.listValute.push(payload);
    },
  },
  actions: {
    async getValute( { commit } ) {
      const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
      const data = await response.json();

      const valutes = Object.values(data.Valute);
      valutes.forEach((item) => commit('setListValute', item));
    },
  },
  getters: {
    getListValuteLength: state => {
      return state.listValute.length;
    }
  }
});
