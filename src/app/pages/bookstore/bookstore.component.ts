import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { BookstoreFilter } from '../../model/bookstore';
import { BookstoreService } from '../../services/bookstore.service';
import { Timeout } from 'src/app/model/utils';
import { DetailBookComponent } from 'src/app/popups/detail-book/detail-book.component';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss']
})
export class BookstoreComponent {

  constructor(
    private bookstoreService: BookstoreService,
    public dialog: MatDialog
  ) { }

  list_books: any = []

  filter: BookstoreFilter = {
    q: 'Marvel',
    langRestrict: 'pt-BR',
    orderBy: 'relevance',
    terms: 'intitle'
  }

  searchTimeout: Timeout;

  ngOnInit(): void {
    this.getBooks(1);
  }

  getBooks(page: number) {
    this.bookstoreService.getBooks(page, this.filter).subscribe(data => {

      this.list_books = data.items.map((map: any) => {

        map['title'] = map.volumeInfo.title;
        map['description'] = map.volumeInfo?.description;
        map['thumbnail'] = map.volumeInfo?.imageLinks?.thumbnail;
        map['smallThumbnail'] = map.volumeInfo?.imageLinks?.smallThumbnail;
        map['pageCount'] = map.volumeInfo?.pageCount;

        return map;
      });
      
    }, error => {
      console.error(error);
    })
  }

  handleInputChange(e: string) {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.filter.q = e;
      this.getBooks(1);
    }, 500);
  }

  openDialog(book: any) {
    let _book = Object.assign({}, book)

    const dialogRef = this.dialog.open(DetailBookComponent, {
      width: '95vw',
      maxWidth: '760px',
      data: _book
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
