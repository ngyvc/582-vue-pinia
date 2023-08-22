<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ counter.count }}</p>
    <button @click="counter.increment()">Add</button>
    <button @click="counter.decrement()">Remove</button>
    <button @click="custom">Custom</button>
  </div>
</template>

<script>
import { useCounterStore } from "@/store/counter";

export default {
  name: "AboutView",
  setup() {
    const counter = useCounterStore();
    return { counter };
  },
  methods: {
    custom() {
      console.log("custom");
      this.counter.increment();
    },
  },
};
</script>
