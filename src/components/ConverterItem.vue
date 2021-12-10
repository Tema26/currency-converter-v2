<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'value'],
  data() {
    return {
      converterValue: '',
    };
  },
};
</script>

<style scoped>
p {
  margin-left: 10px;
}

input {
  text-align: center;
}
</style>