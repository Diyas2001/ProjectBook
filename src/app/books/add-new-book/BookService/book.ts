export class Book {

  id: number;
  name: string;
  author: string;
  img: string;
  more: string;
  likes: number;


  constructor(id: number, name: string, author: string, img: string, more: string, likes: number) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.img = img;
    this.more = more;
    this.likes = likes;
  }
}
