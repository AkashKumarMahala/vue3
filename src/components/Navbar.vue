<template>
<div>
 <nav>
    <div class="py-4 px-2 bg-gradient-to-r from-blue-500 to to-red-500 text-xl text-white">
      <router-link class="ml-4" v-for="tab in tabs" :key="tab" :to="tab.link">{{tab.name}}</router-link>
    </div>
 </nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { name: "DC Heros", link: "/dc-heros" },
        { name: "Calender", link: "/calender" },
        { name: "Markdown", link: "/markdown" },
        { name: "Carousel", link: "/slider-carousel" },
        { name: "Shoppe", link: "shoppe" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>