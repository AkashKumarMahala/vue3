<template>
<div>
  <Navbar :isLoggedIn="isLoggedIn" @open-login-modal="isShowing=true"/>
  <div class="outer-box flex">
  <router-view></router-view>
  </div>
  <Login v-if="isShowing" @close-login="isShowing= false"/>
</div>

</template>

<script>
import Login from "./components/Login.vue";
import Navbar from "./components/Navbar.vue";
import firebase from "./utilities/firebase";

export default {
  components: { Navbar, Login },
  data() {
    return {
      isShowing: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
  methods: {},
};
</script>

<style scoped>
/* .outer-box {
  align-items: center;
} */
</style>