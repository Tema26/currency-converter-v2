<template>
   <section>
      <slot></slot>
   </section>
</template>

<style scoped>
   section {
      display: flex;        
      margin: 0 auto;
      padding: 20px;
   }

   @media (max-width: 992px) {
      section {
         flex-direction: column;
      }
   }
</style>