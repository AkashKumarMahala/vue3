<template>
    <div>
        <div class="border flex justify-center">
            <button class="border border-gray-500 px-2 my-2 rounded-sm" @click="loginWithGoogle">Login with Google</button>
        </div>
    </div>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth.signInWithPopup(provider).then(() => {
        this.$emit("close-login-modal");
      });
    },
  },
};
</script>

<style scoped>
</style>