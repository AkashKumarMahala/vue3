<template>
<div class="w-full flex justify-center flex-wrap mt-6">
    <div class="w-full text-center mb-4 text-2xl font-semibold">Markdown app</div>
    <div class="w-4/5 border border-gray-500 flex">
        <div class="w-1/2 h-72 border-r border-gray-500">
            <textarea ref="markdownRef" class="w-full h-full p-2" :value="textbox" @input="update"></textarea>
        </div>
        <div class="w-1/2 h-72 bg-gray-100 p-2" v-html="markedText"></div>
    </div>
   
</div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      textbox: "",
      timeout: "",
    };
  },
  mounted() {
    this.$refs.markdownRef.focus();
  },
  methods: {
    update(e) {
      const task = () => (this.textbox = e.target.value);
      this.debounce(task, 500);
    },
    debounce(func, wait = 1000) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(func, wait);
    },
  },
  computed: {
    markedText() {
      return marked(this.textbox);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>