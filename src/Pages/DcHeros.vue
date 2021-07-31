<template>
  <div class="flex justify-center w-full mt-8">
      <div class=" py-4 px-12 rounded-md inner-box">
      <h1 class="text-3xl font-semibold mb-4">DC Heros {{herosLength}}</h1>
        <div class="flex justify-between" 
             v-for="(hero,index) in heros" 
             :key="index">
            <div class="mr-5">{{index+1}} : {{hero.name}}</div>
            <button class="border border-2 border-gray-600 px-2  mt-1" 
                    @click="removeHero(index)">X</button>
      </div>
     <div class="mt-4">
       <input type="text" class="border-2 w-full border-gray-500 pl-2" placeholder="Add Hero Name" v-model="newHero"
       ref="newHeroRef">
       <button class="w-full py-2 mt-2 rounded-full bg-blue-400 text-white" @click="addHero">Add</button>
     </div>
  </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const heros = ref([
      { name: "Batman" },
      { name: "Aquaman" },
      { name: "Wonder Woman" },
      { name: "Superman" },
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });

    function addHero() {
      if (newHero.value != "") {
        heros.value.push({ name: newHero.value });
        newHero.value = "";
      }
    }

    function removeHero(index) {
      heros.value = heros.value.filter((el, i) => {
        return i != index;
      });
    }

    const herosLength = computed({
      get: () => heros.value.length,
    });
    return {
      newHero,
      heros,
      addHero,
      removeHero,
      newHeroRef,
      herosLength,
    };
  },
};
</script>

<style scoped>
.inner-box {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>