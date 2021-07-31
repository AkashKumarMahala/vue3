<template>
    <div class="flex w-full">
        <div class="m-auto">
            <h1 class="text-2xl my-5 font-semibold">Reusable Modal</h1>
            <Modal v-if="isModal1Open" @close-modal="isModal1Open = false">
                <template #title>
                     Modal 1
                </template>
                <template #body>
                    I am the body of Modal 1
                </template>

            </Modal>

            <Modal v-if="isModal2Open"  @close-modal="isModal2Open = false">
                 <template v-slot:title>
                     Modal 2
                </template>
                <template v-slot:body>
                    I am the body of Modal 2
                </template>
            </Modal>
            <button class="mr-4 bg-blue-400 text-white px-2 py-1 rounded" @click="isModal1Open=true">Modal 1</button>
            <button class="bg-blue-400 text-white px-2 py-1 rounded" @click="isModal2Open=true">Modal 2</button>
        </div>
    </div>
</template>

<script>
import Modal from "./Modal.vue";
import { ref } from "vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);
    return {
      isModal1Open,
      isModal2Open,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>