<template>
  <page-converter></page-converter>

</template>

<script>
  import PageConverter from './views/PageConverter.vue';
  import PageValuteList from './views/PageValuteList.vue';

  
  export default {
    components: {
      PageConverter,
      PageValuteList,
    },
  };
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

