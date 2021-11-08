<template>
    <div>
        <h1>Page Valute List</h1>
        <div class="container">
            <div class="container-one">
            <select name="first-currency" id="first-currency" v-model="currency_one">
                <option v-for="(currency, index) in listOfCurrencies" :key="currency + index + 1">{{ currency.CharCode }}</option>
            </select>
            <input
                type="number"
                name="input-one"
                id="input-one"
                v-model.number="amountOne"
            >
            </div>
            <div class="container-two">
            <button @click="switchValues">Switch</button>
            <h4> {{ viewDifferenceCurrency }}</h4>
            <h4 id="baseValue">1 {{ currency_one }} = {{ rate.Value }} {{currency_two}}</h4>
            </div>
            <div class="container-three">
            <select name="second-currence" id="second-currence" v-model="currency_two">
                <!-- <option v-for="(currency, index) in listOfCurrencies" :key="currency + index + 1">{{ currency[0] }}</option> -->
                <option v-for="currency in listOfCurrencies" :key="currency">{{ currency.CharCode }}</option>
            </select>
            <input type="number" value="differenceBetweenCurrencies" id="amount-two" placeholder="0"/>
            </div>

            <div class="container-four">
            <h4 id="lastlyUpdated">Последнее обновление: {{ lastUpdateValue }}</h4>

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>