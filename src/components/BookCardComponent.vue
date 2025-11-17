<script setup lang="ts">
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { books, Book } from "@/data/books";
import coverImage from "@/assets/images/manhwa-cover.webp";

defineProps<{
    book: Book
}>();

</script>

<template>
    <div id="book-card" class="flex justify-center gap-6 p-0 relative">
        <div class="w-full px-2 gap-6 grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]">
            <Card
                class="relative flex flex-col w-full h-96 bg-white rounded-lg shadow-md overflow-hidden p-0 gap-0">
                <CardHeader class="p-0 rounded-t-lg overflow-hidden">
                    <img :src="coverImage" :alt="book.title" class="w-full h-64 object-cover" />
                </CardHeader>
                <CardFooter class="flex flex-col p-4 pt-2">
                    <div class="flex flex-row justify-between w-full">
                        <div>
                            <CardTitle class="text-sm place-self-start !font-semibold">
                                {{ book.title }}
                            </CardTitle>
                        </div>
                        <div>
                            <CardTitle class="text-sm place-self-end !font-bold">
                                {{ book.rating }} ⭐
                            </CardTitle>
                        </div>


                    </div>

                    <div class=" flex flex-col gap-3">
                        <div class="flex flex-row w-full justify-between">
                            <div>
                                <CardDescription class="text-xs place-self-start">
                                    {{ book.author }} - {{ book.publishedYear }}
                                </CardDescription>
                            </div>
                            <div>
                                <CardDescription class="text-xs place-self-start">
                                    Chapter {{ book.chapters }}
                                </CardDescription>
                            </div>
                        </div>

                        <CardDescription class="text-xs flex flex-wrap gap-1">
                            <Badge variant="secondary" v-for="genre in book.genre" :key="genre">{{ genre }}</Badge>
                        </CardDescription>
                    </div>
                </CardFooter>
                <Badge :class="[
                    'absolute justify-center bottom-32 right-2 h-10 min-w-10 px-1 text-white !font-bold',
                    book.status === 'Ongoing'
                        ? 'bg-yellow-500 hover:!bg-yellow-500'
                        : book.status === 'Completed'
                            ? 'bg-green-600 hover:!bg-green-600'
                            : 'bg-red-600 hover:!bg-red-600'
                ]">
                    {{ book.status }}
                </Badge>
            </Card>
        </div>
    </div>
</template>
