<template>
    <div class="w-full">
        <div  v-for="(slider,i) in sliders" :key="slider" >
         <transition name="fade">
             <div :class="slider" class="absolute w-full" style="height:350px; " v-if="currSlide==i">
             </div>
         </transition>
        </div>
    </div>
       <div class="w-full flex justify-center absolute" style="height:330px">
           <div class="flex  absolute bottom-0">
             <div class="h-3 w-3 z-10 cursor-pointer mx-2 rounded-full bg-gray-400 bottom-0" v-for="(slider,ii) in sliders" :key="slider"
             :class="currSlide==ii ? 'bg-gray-100':'bg-gray-700'"
             @click="makeActive(ii)"></div>
           </div>
       </div>
</template>

<script>
export default {
  data() {
    return {
      currSlide: 0,
      interva: "",
      sliders: ["bg-green-500", "bg-red-500", "bg-blue-500"],
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currSlide = this.currSlide == 2 ? 0 : this.currSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    makeActive(index) {
      this.currSlide = index;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  /* transition: all 1s ease; */
}

.fade-enter-from {
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>