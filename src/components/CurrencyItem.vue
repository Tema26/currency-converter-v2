<template>
   <li>  
      <p class="currency__name">{{ name }}</p>          
      <p class="currency__char">{{ charCode }}</p>   
      <p class="currency__num">{{ numCode }}</p>         
      <p class="currency__value">{{ value }}</p>      
   </li>
</template>

<script>
export default {   
   props: ['name', 'charCode', 'numCode', 'value'],    
}
</script>

<style scoped>

   li {
      display: flex;          
   }

   p {     
      margin-left: 10px;
   }

   p:first-child {
      margin-left: 0;
   } 

   .currency__name {
      width: 50%;      
   }

   .currency__char,
   .currency__num,
   .currency__value {
      width: 16.6%;
      text-align: center;      
   }

   li:hover {
      background: rgb(204, 204, 204);        
   }

   @media (max-width: 768px) {
      .currency__name {
         width: 30%;      
      }
   }   
</style>