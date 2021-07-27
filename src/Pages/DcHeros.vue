<template>

    <div class=" py-4 px-12 rounded-md inner-box">
      <h1 class="text-3xl font-semibold mb-4">DC Heros {{heros.length}}</h1>
        <div class="flex justify-between" 
             v-for="(hero,index) in heros" 
             :key="index">
            <div class="mr-5">{{index+1}} : {{hero.name}}</div>
            <button class="border border-2 border-gray-600 px-2  mt-1" 
                    @click="removeHero(index)">X</button>
      </div>
     <div class="mt-4">
       <input type="text" class="border-2 w-full border-gray-500 pl-2" placeholder="Add Hero Name" v-model="newHero">
       <button class="w-full py-2 mt-2 rounded-full bg-blue-400 text-white" @click="addHero">Add</button>
     </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      newHero: "",
      firstName: "Akash",
      lastName: "Mahala",
      heros: [
        { name: "Batman" },
        { name: "Aquaman" },
        { name: "Wonder Woman" },
        { name: "Superman" },
      ],
    };
  },
  methods: {
    addHero() {
      if (this.newHero != "") {
        this.heros.push({ name: this.newHero });
        this.newHero = "";
      }
    },
    removeHero(index) {
      this.heros = this.heros.filter((el, i) => {
        return i != index;
      });
    },
    randM() {
      return Math.random();
    },
  },
  computed: {
    randC() {
      return Math.random();
    },
  },
};
</script>

<style scoped>
.inner-box {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>