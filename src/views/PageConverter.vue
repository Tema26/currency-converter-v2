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
        <span> {{ differenceBetweenValutes }} </span>
      </div>

      <div>
        <select v-model="currentValuteOfInputTwo">
          <option
            v-for="(itemValute, index) in listValute"
            :key="itemValute + index + 2"
          >
            {{ itemValute.CharCode }}
          </option>
        </select>
        <input
          type="number"
          v-model.number="numOfValuteTwo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";


export default {
  data() {
    return {
      currentValuteOfInputOne: null, // Текущее выбранное значение первой валюты
      currentValuteOfInputTwo: null, // Текущее выбранное значение второй валюты
      numOfValuteOne: 0, // Кол-во единиц в первой валюте
      numOfValuteTwo: 0, // Кол-во единиц во второй валюте
    };
  },
  methods: {
    ...mapActions(["getValute"]),
    ...mapState(["listValute"]),
    swappingValute() {},
  },
  computed: {
    differenceBetweenValutes() {
      return 1;
    },
  },
  created() {
    this.getValute();
  },
};
</script>
