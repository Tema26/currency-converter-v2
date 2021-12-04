<template>
    <div>
        <h1>Page Valute List</h1>
        <div class="container">
            <div class="container-one">
            <select name="currentValuteOfInputOne" id="currentValuteOfInputOne" v-model="currentValuteOfInputOne">
                <option v-for="(currency, index) in listOfCurrencies" :key="currency + index + 1">{{ currency.CharCode }}</option>
            </select>
            <input
                type="number"
                name="input-one"
                id="currentValuteOfInputOne"
                v-model.number="currentValuteOfInputOne"
            >
            </div>
            <div class="container-two">
            <button @click="switchValues">Switch</button>
            <h4> {{ viewDifferenceCurrency }}</h4>
            </div>
            <div class="container-three">
            <select name="currentValuteOfInputTwo" id="currentValuteOfInputTwo" v-model="currentValuteOfInputTwo">
                <option v-for="currency in listOfCurrencies" :key="currency">{{ currency.CharCode }}</option>
            </select>
            <input
             type="number"
              value="differenceBetweenCurrencies"
               id="currentValuteOfInputTwo"
                placeholder="0"/>
            </div>

            <div class="container-four">
            <h4 id="lastlyUpdated">Последнее обновление: {{ lastUpdateValue }}</h4>

            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState} from "vuex";
export default {
methods: {
    ...mapActions(["getValute"]),
},
computed: {
    ...mapState(["listValute"]),
  },
}
</script>

<style>

</style>