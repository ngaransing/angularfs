import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  getBooks() {
    return [
      {
        name : "Clean Code",
        author : "Robert C Martin",
        image : "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        amount: 700
      },
  
      {
        name:"The Pragmatic Programmer",
        author: "Andrew Hunt ",
        image :"https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg",
        amount: 800
      },
  
      {
        name: "Art of Computer Programming",
        author: "Donald John Fuller ",
        image:"https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/410vJZbAZGS._SY393_BO1,204,203,200_.jpg",
        amount: 899
      },
  
      {
        name: "Introduction to Algorithms",
        author:"Thomas H. Cormen",
        image:"https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41SNoh5ZhOL._SX440_BO1,204,203,200_.jpg",
        amount:900
      }
  ];
  }

  constructor() { }
}
