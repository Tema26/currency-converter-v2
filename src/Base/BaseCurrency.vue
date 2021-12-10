<template>
   <section>      
      <h3  class="currency__name">Наименование валюты</h3>
      <h3  class="currency__char">Буквенный код</h3>
      <h3  class="currency__num">Цифровой код</h3>
      <h3  class="currency__value">Курс к рублю</h3>   
   </section>
</template>

<style scoped>
   section {
      display: flex;
   }
   .currency__name {
      width: 50%; 
      flex-wrap: wrap;     
   }
   .currency__char,
   .currency__num,
   .currency__value {
      width: 16.6%;
      text-align: center;
   } 

   @media (max-width: 992px) {
      h3 {
         font-size: 16px;
         text-align: center;
      }
   }
   
   @media (max-width: 768px) {
      h3 {
         margin-left: 16px;
      }
      .currency__name {
         width: 30%;
         margin-left: 0;
      }
      

   }
</style>