export class Book {

  id: number;
  name: string;
  author: string;
  likes: number;


  constructor(id: number, name: string, author: string, likes: number) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.likes = likes;
  }
}
