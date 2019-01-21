<template>
  <div>{{ maxValue }}</div>
</template>

<script>
import Knapsack from "@/service/Knapsack";

export default {
  name: "Knapsack",
  data() {
    return {
      maxValue: 0
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      this.maxValue = Knapsack.getValue(4, 5);
    }
  }
};
</script>

<style scoped>
</style>
