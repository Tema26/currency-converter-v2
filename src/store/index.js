import { createStore } from "vuex";

export default createStore({
  state: {
    listValute: [],
  },
  mutations: {
    setListValute(state, payload) {
    state.listValute.push(state, payload);
    },
  },
  actions: {
    getValute() {
      fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
        .then((response) => response.json())
        .then((data) => {
          const valutes = data.Valute;  
          valutes.forEach((item) => this.setListValute(item));
          // context.commit('setListValute', context);
          console.log(valutes)

        });
    },
    setListValute({commit}) {
      commit('setListValute')
    } 
  },
  modules: {},
});
