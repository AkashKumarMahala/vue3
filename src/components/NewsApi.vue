<template>
  <div class="flex justify-center">
      <button class="border border-gray-500 px-2 bg-gray-200 mt-4" @click="fetchApi()">Show News</button>
        <div v-for="data in news" :key="data">
        {{data}}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      news: [],
    };
  },
  methods: {
    fetchApi() {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=tesla&from=2021-06-27&sortBy=publishedAt&apiKey=API_KEY"
        )
        .then((res) => {
          this.news = JSON.stringify(res.data);
        })
        .catch((er) => {
          console.log(`Error is ${er}`);
        });
    },
  },
};
</script>

<style scoped>
</style>