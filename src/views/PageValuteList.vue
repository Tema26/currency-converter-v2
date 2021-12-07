<template>
    <div>
        <h1>Page Valute List</h1>
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