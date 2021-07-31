<template>
    <div>
        <section class="h-screen w-screen bg-gray-500 absolute top-0 opacity-50 z-20"
        @click="close"></section>
        <div class="absolute top-0">
        <div class="flex justify-center w-screen h-screen">
        <div class="m-auto z-30 border p-2 w-1/3 bg-white rounded-md shadow-md">
            <div class="border border-gray-500 p-4 rounded-sm">
            <div class="text-center">User Aunthentication</div>
                <form @submit.prevent="Submit()">
                  <LoginWithGoogle @close-login-modal="close"/>
                    <input type="email" class="border border-gray-500 w-full rounded-sm my-2 pl-2 py-1" placeholder="Enter Username" v-model="email">
                    <input type="password" class="border border-gray-500 w-full rounded-sm pl-2 py-1" placeholder="Enter Password" v-model="password">
                    <div class="w-full flex justify-center">
                        <button type="submit" class="bg-red-600 text-white  px-2 py-1 my-2 rounded-sm"><span v-if="isLoading">Loading</span><span v-else>Login</span></button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
import firebase from "../utilities/firebase.js";
import LoginWithGoogle from "./LoginWithGoogle.vue";
export default {
  components: { LoginWithGoogle },
  data() {
    return {
      email: "akashmahala3@gmail.com",
      password: "password",
      isLoading: false,
    };
  },
  methods: {
    Submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((err) => {
          alert(err);
          this.isLoading = false;
        });
    },
    close() {
      this.$emit("close-login");
    },
  },
};
</script>

<style scoped>
</style>