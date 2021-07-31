<template>
    <div class="w-full mt-6">
        <div class="flex justify-center my-2">
          <div class="border border-gray-500 p-2">
                <h1 class="text-3xl text-center font-semibold">Calculator</h1>
                <div class="mt-5 mb-2 text-3xl overflow-x-scroll w-52 h-20 text-right bg-gray-100" style="direction:rtl">
                    {{currentNum}}  
                </div>
                <div class="h-8 mb-2">
                   <div v-if="selectedOperation" class="w-52 overflow-x-scroll overflow-x-scroll">{{prevNum}} {{selectedOperation}} {{currentNum}}</div>
                </div>
            <div class="grid grid-cols-4 gap-1">
                <button @click="pressed('1')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">1</button>
                <button @click="pressed('2')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">2</button>
                <button @click="pressed('3')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">3</button>
                <button @click="pressed('+')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">+</button>
                <button @click="pressed('4')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">4</button>
                <button @click="pressed('5')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">5</button>
                <button @click="pressed('6')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">6</button>
                <button @click="pressed('-')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">-</button>
                <button @click="pressed('7')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">7</button>
                <button @click="pressed('8')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">8</button>
                <button @click="pressed('9')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">9</button>
                <button @click="pressed('*')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">*</button>
                <button @click="pressed('=')" class="p-2 border border-gray-400 rounded-sm w-12 h-12">=</button>
                <button @click="pressed('0')" class="p-2 border border-gray-400 rounded-sm h-12">0</button>
                <button @click="pressed('c')" class="p-2 border border-gray-400 rounded-sm h-12">C</button>
                <button @click="pressed('/')" class="p-2 border border-gray-400 rounded-sm h-12">/</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const prevNum = ref("");
    const currentNum = ref("");
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operations = ["+", "-", "*", "/"];
    const selectedOperation = ref("");

    function pressed(value) {
      if (value == "=" || value == "Enter") doCalculation();
      else if (value == "c") clearAll();
      else if (operations.includes(value)) store(value);
      else if (numbers.includes(value)) appendNumber(value);
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }

    function doCalculation() {
      if (selectedOperation.value == "+") add();
      else if (selectedOperation.value == "-") substract();
      else if (selectedOperation.value == "*") multiply();
      else if (selectedOperation.value == "/") divide();

      prevNum.value = "";
      selectedOperation.value = "";
    }

    function clearAll() {
      currentNum.value = "";
      prevNum.value = "";
      selectedOperation.value = "";
    }

    function store(value) {
      doCalculation();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
      // doCalculation();
    }

    function add() {
      currentNum.value = +prevNum.value + +currentNum.value;
    }
    function substract() {
      currentNum.value = prevNum.value - currentNum.value;
    }
    function multiply() {
      currentNum.value = prevNum.value * currentNum.value;
    }
    function divide() {
      currentNum.value = prevNum.value / currentNum.value;
    }

    function handleKeydown(e) {
      pressed(e.key);
    }

    onMounted(() => window.addEventListener("keydown", handleKeydown));

    onUnmounted(() => window.removeEventListener("keydown", handleKeydown));

    return {
      prevNum,
      currentNum,
      pressed,
      selectedOperation,
    };
  },
};
</script>

<style  scoped>
</style>