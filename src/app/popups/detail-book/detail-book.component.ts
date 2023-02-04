import { BookstoreComponent } from './../../pages/bookstore/bookstore.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public book: any,
    public dialogRef: MatDialogRef<BookstoreComponent>,
  ) {}

  obj_book: any = {
    title: '',
    cover_image: '',
    count_pages: 0,
    reading_goal: 0
  }

  ngOnInit(){
    console.log(this.book);

    this.obj_book.title = this.book.title;
    this.obj_book.count_pages = this.book.pageCount;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
