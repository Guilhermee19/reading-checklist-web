import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor() { }

  list_books = [
    { name: 'Harry Potter e a Câmara Secreta' , capa: 'https://m.media-amazon.com/images/I/71NsVQ5MlwL.jpg'},
    { name: 'As aventuras de Sherlock Holmes' , capa: 'https://m.media-amazon.com/images/I/613LTnr4lgL.jpg'},
    { name: 'A Sutil Arte de Ligar o F*da-Se' , capa: 'https://m.media-amazon.com/images/I/6175IU0qFgL.jpg'},
    { name: 'GUERRA CIVIL - MARVEL' , capa: 'https://m.media-amazon.com/images/I/71FTAkJQLrL.jpg'},
  ]

  ngOnInit(): void {
  }

}
