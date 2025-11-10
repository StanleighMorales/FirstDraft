<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
import { Button } from '@/components/ui/button'
</script>

<template>
  <h1 class="text-3xl font-bold underline text-red-100 p-4">
    Hello Tailwind CSS!
  </h1>
  <Button variant="outline" class="mt-4">
    Click Me
  </Button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
