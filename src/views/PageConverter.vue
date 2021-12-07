/* eslint-disable prettier/prettier */
<template>
  <div>
    <h1>Page Converter</h1>
    <div>
      <div>
        <select v-model="currentValuteOfInputOne">
          <option
            v-for="(itemValute, index) in listValute"
            :key="itemValute + index + 1"
          >
            {{ itemValute.CharCode }}
          </option>
        </select>
        <input type="number" v-model.number="numOfValuteOne" />
      </div>

      <div>
        <button @click="swappingValute">Поменять местами валюты</button>
        Разница валют: <b><span> {{ differenceBetweenCurrencies }} </span> </b> 
      </div>
      
        
        <select v-model="currentValuteOfInputTwo">
          <option
            v-for="(itemValute, index) in listValute"
            :key="itemValute + index + 2"
          >
            {{ itemValute.CharCode }}
          </option>
        </select>
        <input v-model.number="numOfValuteTwo"
        type="number"
         />
      </div>
    </div>
</template>

<script>
import { mapActions, mapState} from "vuex";


export default {
  data() {
    return {
      currentValuteOfInputOne: '', // Текущее выбранное значение первой валюты
      currentValuteOfInputTwo: '', // Текущее выбранное значение второй валюты
      numOfValuteOne: 1, // Кол-во единиц в первой валюте
      numOfValuteTwo: 0, // Кол-во единиц во второй валюте 
    };
  },
  methods: {
    ...mapActions(["getValute"]),
    
    swappingValute() {
      const temporaryValue = this.currentValuteOfInputOne;
      this.currentValuteOfInputOne = this.currentValuteOfInputTwo;
      this.currentValuteOfInputTwo = temporaryValue;
    },
  },
  computed: {
    ...mapState(["listValute"]),
    differenceBetweenCurrencies() {
      const first_currency = this.numOfValuteOne * this.listValute[0].Value;
      const second_currence = this.numOfValuteTwo * this.listValute[1].Value;
      const sum = second_currence - first_currency
      return sum.toFixed(2);
    }
  },
  created() {
    this.getValute();
  },
  beforeMount() {
    // differenceBetweenCurrencies();
  }
};
</script>
