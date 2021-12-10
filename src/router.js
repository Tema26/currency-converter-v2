import { createRouter, createWebHistory } from 'vue-router';

import CurrencyList from './pages/CurrencyList.vue';
import ConverterCurrency from './pages/ConverterCurrency.vue';

const router = createRouter({
   history: createWebHistory(),
   routes: [      
      { path: '/', component: CurrencyList },
      { path: '/converter', component: ConverterCurrency }
   ],
});

export default router;