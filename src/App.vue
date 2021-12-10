<template>
   <base-container>
      <the-header></the-header>
      <router-view></router-view>
   </base-container>
</template>

<script>
import BaseContainer from './Base/BaseContainer.vue';
import TheHeader from './components/nav/TheHeader.vue';

export default {
   components: {
      TheHeader,
      BaseContainer,
   }
}
</script>

<style>
   @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

   * {
      box-sizing: border-box;
   }

   html {
   font-family: "Roboto", sans-serif;
   }


   body {
      margin: 0;
      background-color: rgb(242, 242, 243);
   }   
</style>