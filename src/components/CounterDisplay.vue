<template>
  <div class="counter-display">
    <h2>Count: {{ counterStore.count }}</h2>
    <p>Double Count: {{ counterStore.doubleCount }}</p>
    <p>{{ counterStore.greeting }}</p>
    
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.incrementBy(5)">Add 5</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter' // 👈 Adjust path as needed

// Initialize the store
const counterStore = useCounterStore()

// If you need to destructure properties while keeping reactivity, 
// you can use the built-in storeToRefs utility:
// import { storeToRefs } from 'pinia'
// const { count, doubleCount } = storeToRefs(counterStore)
</script>