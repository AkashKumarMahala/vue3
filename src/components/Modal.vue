<template>
  <div>
       <section class="h-screen w-screen bg-gray-500 absolute left-0 top-0 opacity-50 z-20"
        @click="close"></section>
         <div class="absolute inset-0">
        <div class="flex justify-center w-screen h-screen">
        <div class="m-auto z-30 border p-2 w-1/3 bg-white rounded-md shadow-md">
        <div class="border border-gray-500 p-4 rounded-sm">
          <div class="text-xl mb-3 text-red-500">
            <slot name="title"></slot>
          </div>
          <slot name="body"></slot>
        </div>
        </div>
        </div>
         </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close-modal");
    }
    return {
      close,
    };
  },
};
</script>

<style scoped>
</style>