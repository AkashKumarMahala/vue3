<template>
<div>
  <CountryApi/>
</div>

</template>

<script>
import CountryApi from "./components/CountryApi.vue";

export default {
  components: { CountryApi },
};
</script>

<style scoped>
.outer-box {
  align-items: center;
}
</style>