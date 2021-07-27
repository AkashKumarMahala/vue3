<template>
<div>
  <Navbar/>
  <div class="outer-box flex justify-center" style="height:88vh">
  <router-view></router-view>
  </div>
</div>

</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style scoped>
.outer-box {
  align-items: center;
}
</style>