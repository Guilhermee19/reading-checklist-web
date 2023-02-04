import { Router, ActivatedRoute } from '@angular/router';
import { BookstoreService } from './../../../services/bookstore.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  constructor(
    private bookstoreService: BookstoreService,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.book_id = this.route.snapshot.paramMap.get('id');
  }

  book_id: any = null;
  book: any = []

  ngOnInit(): void {
    this.getColectionBook();
  }

  getColectionBook() {
    console.log(this.book_id);
    
    this.bookstoreService.getColectionBook(this.book_id).subscribe(data => {
      console.log(data);
      
      // this.router.navigate(['/colection']);

    }, error => {
      console.error(error);
    })
  }
}
