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
    getValute({commit}) {
      fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
        .then((response) => response.json())
        .then((data) => {
          const valutes = Object.values(data.Valute);
          valutes.forEach((item) => commit('setListValute', item));
          // console.log(this.state.listValute);
        });
    },
    
  },
  modules: {},
});
