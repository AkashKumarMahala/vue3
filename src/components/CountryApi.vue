<template>
<div class="body">
  <div>
    <!-- search div  -->
     <div class="text-center mt-1">
        <h1 class="text-3xl font-semibold">Search a Country</h1>
          <div>
            <input type="text" placeholder="Enter a country Name" class="rounded-md my-3 border border-gray-500 px-2 py-1" v-model="countryName">
          </div>
        <div class="flex justify-center">
           <div class="">
              <button class="w-20 mr-4 bg-gradient-to-r from-blue-500 to-red-500 px-2 py-1 text-white" @click="fetchData()">Search</button>
              <button class="w-20 bg-gradient-to-r from-blue-500 to-red-500 px-2 py-1 text-white" @click="reset()">Reset</button>
           </div>
        </div>

    </div>
    <!-- !search div  -->
   
    <!-- Card div  -->
    <div class="flex justify-center mt-10 mb-5" v-if="isShowing">
        <div class="md:w-1/2 lg:w-1/3 border card pt-3 rounded-md ">
            <div v-for="data in countryData" :key="data">
               <div class="text-center">
                    <img class="mt-2 w-72 h-48 mx-auto" :src="data.flag" alt="Country IMG" @mouseover="popout()">
                    <h1 class="my-3 font-bold">{{data.name}}</h1>
                    <h2 class="mb-2 font-semibold">Capital : {{data.capital}}</h2>
               </div>
                <hr class=" border-gray-300">
                <div class="flex justify-between p-4">
                    <div>
                        <h2 class="text-center">{{data.nativeName}}</h2>
                        <h2 class="font-semibold text-center">Native</h2>
                    </div>
                    <div>
                        <h2 class="text-center">{{data.population}}</h2>
                        <h2  class="font-semibold text-center">Population</h2>
                    </div>
                   <div>
                        <h2 class="text-center">{{data.demonym}}</h2>
                        <h2  class="font-semibold text-center">Demonym</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- !Card div  -->

    <!-- footer div  -->
    <div>
      <div class="footer text-sm ml-1 mb-1 hidden:block-sm" v-if="isNameDisplayed">
         <h6>Follow me on Github</h6>
         <h6>Username : AkashKumarMahala</h6>
      </div>
    </div>
    <!-- !footer div  -->
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      countryData: [],
      isShowing: false,
      isNameDisplayed: true,
      countryName: "",
    };
  },
  mounted() {},
  methods: {
    fetchData() {
      if (this.countryName != "") {
        this.isShowing = true;
        this.isNameDisplayed = false;
        axios
          .get(`https://restcountries.eu/rest/v2/name/${this.countryName}`)
          .then((res) => {
            this.countryData = res.data;
          })
          .catch((err) => {
            console.log(`Error is ${err}`);
          });
      }
    },
    popout() {
      // transition: translateZ("200px");
    },
    reset() {
      this.isShowing = false;
      this.isNameDisplayed = true;
    },
  },
};
</script>

<style scoped>
.body {
  margin: 0px;
  padding: 0px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.footer {
  position: fixed;
  bottom: 0;
  font-size: 10px;
}
</style>