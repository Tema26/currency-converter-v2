
<template>   
   <form class="search">
      <label class="search__label">Поиск валюты</label>
      <input type="text" 
      v-model="searchCurrency" 
      placeholder="Наименование валюты"
      class="search__input">
   </form>
   <h2>Список валют</h2>
   <div v-if="currencyNotFound()">
      <ul v-if="isFilterList"> 
         <base-currency></base-currency>    
         <currency-item
            v-for="cur in tickerList"
            :key="cur.ID + 'tl'"
            :id="cur.ID"
            :name="cur.Name"
            :charCode="cur.CharCode"
            :numCode="cur.NumCode"
            :value="cur.Value">           
         </currency-item>            
      </ul>
      <ul v-else> 
         <base-currency></base-currency>    
         <currency-item
            v-for="cur in filterTickerList"
            :key="cur.ID + 'ftl'"
            :id="cur.ID"
            :name="cur.Name"
            :charCode="cur.CharCode"
            :numCode="cur.NumCode"
            :value="cur.Value"
            :previous="cur.Previous">                
         </currency-item>            
      </ul>
   </div>
   <h3 v-else>По вашему запросу валюта не найдена!</h3>
</template>

<script>
import { mapActions, mapState} from "vuex";
export default {    
   components: {     
      mapActions,
      mapState,
   },        
   data() {
      return {
         filterTickerList: [], 
         searchCurrency: '',                                           
      }
   },
   methods: {
      currencyNotFound() {
         if(!this.searchCurrency == '' && this.filterTickerList.length == 0) {
            return false;
         } else {
            return true;
         }        
      },      
   },    
   computed: {         
      isFilterList()  {
         return this.filterTickerList.length == 0;            
      },
      tickerList() {
         return this.$store.state.tickerList;
      },    
   }, 
   created() {
      this.$store.dispatch('getTickers');  
   },
   watch: {
      searchCurrency: function() {
         const arrayFilterCharCode = this.$store.state.tickerList.filter(ticker => 
         ticker.CharCode.toLowerCase().includes(this.searchCurrency.toLowerCase()));
         
         const arrayFilterName = this.$store.state.tickerList.filter(ticker =>
         ticker.Name.toLowerCase().includes(this.searchCurrency.toLowerCase()));
         this.filterTickerList = [...arrayFilterCharCode, ...arrayFilterName];
         
         if(this.searchCurrency == '') { 
            this.filterTickerList = [];
         }
      },                               
   },
}
</script>

<style scoped>
   h2 {
      text-align: center;
   }
   .search__label {
      font-size: 18px;
   }
   .search__input {
      margin-left: 20px;
      font-size: 14px;
      padding: 5px;
      cursor: pointer;
   }
   ul {
      padding: 0;
   }
   @media (max-width: 992px) {
      .search {
         display: flex;
         justify-content: center;
         margin: 50px 0;
      }
   }   
</style>

    © 2021 GitHub, Inc.

    Terms
    Privacy
    Security
    Status
    Docs
    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

