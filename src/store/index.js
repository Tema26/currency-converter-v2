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
          // const valutes = data.Valute;  
          data.Valute.forEach((item) => commit('setListValute', item));
          console.log(data)

        });
    },
    
  },
  modules: {},
});
