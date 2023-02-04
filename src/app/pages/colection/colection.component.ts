import { Component } from '@angular/core';
import { BookstoreService } from "../../services/bookstore.service";

@Component({
  selector: 'app-colection',
  templateUrl: './colection.component.html',
  styleUrls: ['./colection.component.scss']
})
export class ColectionComponent {

  constructor(
    private bookstoreService: BookstoreService
  ) { }
  
  list_colection: any = []

  ngOnInit(): void {
    this.getBooks(1);
  }

  getBooks(page: number) {
    this.bookstoreService.getColection().subscribe(data => {

      this.list_colection = data;

      console.log(this.list_colection);

    }, error => {
      console.error(error);
    })
  }

}
