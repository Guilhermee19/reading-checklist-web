import { BookstoreService } from './../../services/bookstore.service';
import { BookstoreComponent } from './../../pages/bookstore/bookstore.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public book: any,
    public dialogRef: MatDialogRef<BookstoreComponent>,
    private bookstoreService: BookstoreService,
    private router: Router
  ) {}

  obj_book: any = {
    id: 0,
    status: 'TO_READ',
    book_title: '',
    book_thumbnail: '',
    book_count_pages: 0,
    reading_goal: 0,
    date_crate: new Date().toISOString(),
    checklist: [],
    hour_alarm_reading: '',
  }

  list_colection: any = []

  ngOnInit(){
    console.log(this.book);

    this.obj_book.title = this.book.title;
    this.obj_book.count_pages = this.book.pageCount;
    this.obj_book.thumbnail = this.book.thumbnail;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addColection(){
    var time = new Date();
    var outraData = new Date();

    for (let index = 0; index < this.obj_book.reading_goal; index++) {
      this.obj_book.checklist.push({data: new Date(outraData.setDate(time.getDate() + index)).toISOString(), pages: '', check: false})
    }
    this.bookstoreService.postColection(this.obj_book).subscribe(data => {
      this.dialogRef.close();
      this.router.navigate(['/colection'])
    }, error => {
      console.error(error);
    })

  }
}
