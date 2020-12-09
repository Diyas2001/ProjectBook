export class Book {

  id: number;
  name: string;
  author: string;
  img: string;
  more: string;


  constructor(id: number, name: string, author: string, img: string, more: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.img = img;
    this.more = more;
  }
}
