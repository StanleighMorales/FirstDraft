export interface Book {
  id: number;
  title: string;
  author: string;
  publishedYear: string;
  cover: string;
  chapters: number;
  status: "Ongoing" | "Completed" | "Hiatus";
  rating: number;
  genre: string[];
}




export const books: Book[] = [
  {
    id: 1,
    title: "The Hundreth Decent",
    author: "Karino Shin",
    publishedYear: "2025",
    cover: "manhwa-cover.webp",
    chapters: 1,
    status: "Ongoing",
    rating: 4.8,
    genre: ["Action", "Adventure", "Fantasy"," Supernatural"]
  },
  //   {
  //   id: 2,
  //   title: "The Hundreth Decent",
  //   author: "Karino Shin",
  //   publishedYear: "2025",
  //   cover: "manhwa-cover.webp",
  //   chapters: 1,
  //   status: "Ongoing",
  //   rating: 4.8,
  //   genre: ["Action", "Adventure", "Fantasy"," Supernatural"]
  // },
  //   {
  //   id: 3,
  //   title: "The Hundreth Decent",
  //   author: "Karino Shin",
  //   publishedYear: "2025",
  //   cover: "manhwa-cover.webp",
  //   chapters: 1,
  //   status: "Ongoing",
  //   rating: 4.8,
  //   genre: ["Action", "Adventure", "Fantasy"," Supernatural"]
  // },
  //   {
  //   id: 4,
  //   title: "The Hundreth Decent",
  //   author: "Karino Shin",
  //   publishedYear: "2025",
  //   cover: "manhwa-cover.webp",
  //   chapters: 1,
  //   status: "Ongoing",
  //   rating: 4.8,
  //   genre: ["Action", "Adventure", "Fantasy"," Supernatural"]
  // },
  //   {
  //   id: 5,
  //   title: "The Hundreth Decent",
  //   author: "Karino Shin",
  //   publishedYear: "2025",
  //   cover: "manhwa-cover.webp",
  //   chapters: 1,
  //   status: "Ongoing",
  //   rating: 4.8,
  //   genre: ["Action", "Adventure", "Fantasy"," Supernatural"]
  // },
  // {
  //   id: 6,
  //   title: "The Hundreth Decent",
  //   author: "Karino Shin",
  //   publishedYear: "2025",
  //   cover: "manhwa-cover.webp",
  //   chapters: 1,
  //   status: "Ongoing",
  //   rating: 4.8,
  //   genre: ["Action", "Adventure", "Fantasy"," Supernatural"]
  // },
  // {
  //   id: 7,
  //   title: "The Hundreth Decent",
  //   author: "Karino Shin",
  //   publishedYear: "2025",
  //   cover: "manhwa-cover.webp",
  //   chapters: 1,
  //   status: "Ongoing",
  //   rating: 4.8,
  //   genre: ["Action", "Adventure", "Fantasy"," Supernatural"]
  // }

] as const;
