<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ counter.count }}</p>
    <button @click="counter.increment()">Add</button>
    <button @click="counter.decrement()">Remove</button>
    <button @click="custom">Custom</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/store/counter";

const counter = useCounterStore();
</script>
