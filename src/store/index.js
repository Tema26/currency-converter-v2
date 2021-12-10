import { createStore } from 'vuex';

const store = createStore({ 
   state() {
      return {
         tickerList: [],
      }
   },
   actions: {
      getTickers(context) {
         fetch('https://www.cbr-xml-daily.ru/daily_json.js')
         .then(response => response.json())
         .then(data => {            
            const values = Object.values(data.Valute);                        
            context.commit('updateTickers', values)                                   
         });
         
      }
   },
   mutations: {
      updateTickers(state, posts) {
         state.tickerList = posts;         
      }
   }    
})

export default store;