<template>
<div>
 <nav>
    <div class="py-4 px-2 bg-gradient-to-r from-blue-500 to to-red-500 text-xl text-white">
      <router-link class="ml-4" v-for="tab in tabs" :key="tab" :to="tab.link">{{tab.name}}</router-link>
      <button class="ml-4" @click="logout" v-if="isLoggedIn==true">Logout</button>
      <button class="ml-4" @click="$emit('open-login-modal')" v-else>Login</button>
    </div>
 </nav>
</div>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      tabs: [
        { name: "DC Heros", link: "/dc-heros" },
        { name: "Calender", link: "/calender" },
        { name: "Markdown", link: "/markdown" },
        { name: "Carousel", link: "/slider-carousel" },
        { name: "Calculator", link: "/calculator" },
        { name: "Modal", link: "/reusable-modal" },
        { name: "CountryAPI", link: "/country-api" },
      ],
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      alert("Successfully logged Out");
      // .then(() => {})
      // .catch(() => {});
    },
  },
};
</script>

<style scoped>
</style>