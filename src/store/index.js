import { createStore } from "vuex";

export default createStore({
  state: {
    listValute: [],
  },
  mutations: {
    setListValute(payload, state) {
    state.listValute.push(payload, state);
    },
  },
  actions: {
    getValute() {
      fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
        .then((response) => response.json())
        .then((data) => {
          const valutes = data.Valute.CharCode;
          context.commit('setListValute', item);
          valutes.forEach((context) => setListValute(context));
        });
    },
  },
  modules: {},
});
