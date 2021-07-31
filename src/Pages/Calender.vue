<template>
    <div class="flex justify-center w-full mt-6">
      <div>
        <h1 class="text-2xl font-semibold text-center mb-4">Vue Calender</h1>
          <div class="flex justify-between my-2">
              <h1 class="text-xl font-semibold">{{currMonth}}</h1>
              <h1 class="text-xl font-semibold">{{currentYear}}</h1>
          </div>
        <div class="flex">
            <h4 class="text-center font-semibold" style="width:14.28%" v-for="day in days" :key="day">{{day}}</h4>
        </div>
        <div class="flex flex-wrap">
            <h4 class="text-center border" style="width:14.28%"  v-for="num in startDay" :key="num"></h4>
            <h4 class="text-center border" style="width:14.28%"  
            v-for="num in numberOfDays" 
            :key="num"
            :class="currentDateClass(num)">{{num}}</h4>
        </div>
          <div class="flex justify-between mt-2">
            <button class="bg-red-400 text-white px-2" @click="gotoPrev()">Prev</button>
            <button class="bg-red-400 text-white px-2" @click="gotoNext()">Next</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),

      days: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    };
  },
  methods: {
    gotoNext() {
      if (this.currentMonth == 11) {
        this.currentYear++;
        this.currentMonth = 0;
      } else {
        this.currentMonth++;
      }
    },
    gotoPrev() {
      if (this.currentMonth == 0) {
        this.currentYear--;
        this.currentMonth = 11;
      } else {
        this.currentMonth--;
      }
    },
    presentDay() {
      return new Date().getUTCDate();
    },
    currentDateClass(num) {
      const calenderFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calenderFullDate === currentFullDate ? "bg-green-300" : "";
    },
  },
  computed: {
    numberOfDays() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    currMonth() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        "default",
        { month: "long" }
      );
    },
  },
};
</script>

<style scoped>
</style>