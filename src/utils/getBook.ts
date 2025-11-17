import { books, Book } from "@/data/books";

export function getBook(id: number): Book | undefined {
  return books.find(b => b.id === id);
}