import { createStore } from "vuex";

export default createStore({
  state: {
    listValute: [],
  },
  mutations: {
    setListValute(payload) {
      state.listValute.push(payload);
    },
  },
  actions: {
    getValute() {
      fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
        .then((response) => response.json())
        .then((data) => {
          const valutes = data.Valute;
          valutes.forEach((item) => this.setListValute(item));
          console.log(setListValute);
        });
    },
  },
  modules: {},
});
