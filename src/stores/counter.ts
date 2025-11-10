// src/stores/counter.js
import { defineStore } from 'pinia'

// The first argument is the store ID, which must be unique across your app
export const useCounterStore = defineStore('counter', {
  // 1. STATE: The data that holds your store's information
  state: () => ({
    count: 0,
    name: 'Vue User'
  }),
  
  // 2. GETTERS: Functions equivalent to computed properties for your state
  getters: {
    doubleCount: (state) => state.count * 2,
    
    // Getters can access other getters
    greeting: (state) => `Hello, ${state.name}! Your count is ${state.count}`
  },
  
  // 3. ACTIONS: Functions equivalent to methods to change the state
  actions: {
    increment() {
      // You can directly mutate the state
      this.count++
    },
    incrementBy(amount) {
        this.count += amount
    },
    // Actions can be asynchronous
    async fetchData() {
        // ... API call logic
    }
  }
})