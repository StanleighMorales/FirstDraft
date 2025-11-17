<script setup lang="ts">
import BookCard from '@/components/BookCardComponent.vue'
import { Card } from '@/components/ui/card'
import NavigationBarCompenent from '@/components/NavigationBarCompenent.vue'
import BookCardCarouselComponent from '@/components/BookCardCarouselComponent.vue'
import { books } from '@/data/books'
</script>

<template>
  <div class="flex flex-col px-10 gap-10 min-h-screen ">
    <div class="pt-5 ">
      <NavigationBarCompenent />
    </div>
    <div class="flex flex-row gap-6">
      <Card class="px-6 text-stone-50 w-full bg-transparent border-stone-200/30 shadow-xl/20 shadow-stone-50/50">
        <div class="flex flex-row gap-2 text-3xl font-bold p-4">
          <h1>Welcome to </h1>
          <h1 class="font-marker">FristDraft</h1>
        </div>
      </Card>
      <Card
        class="flex-auto w-full px-6 text-stone-50 bg-transparent border-stone-200/30 shadow-xl/20 shadow-stone-50/50">
        <h2 class=" text-2xl font-bold p-4">Recommended for you</h2>
        <div>
          <BookCardCarouselComponent />
        </div>

      </Card>
    </div>
    <div class="relative justify-center bg-red pb-10">
      <Card
        class="overflow-y-none bg-white/30 backdrop-blur-xs p-4 border-stone-200/30 shadow-xl/30 shadow-amber-200/50">
        <BookCard v-for="book in books" :key="book.id" :book="book" />
      </Card>
    </div>
  </div>

</template>

<style></style>