import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { BookstoreFilter } from "../model/bookstore";

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(
    private http: HttpClient,
  ) { }

  getBooks(page: number, filter: BookstoreFilter): Observable<any> {
    let options = {
      params: new HttpParams()
        .set("startIndex", page)
        .set("maxResults", 40)
        .set("key", environment.apy_key),

      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };

    if (filter?.q) options.params = options.params.set("q", filter.q)
    if (filter?.langRestrict) options.params = options.params.set("langRestrict", filter.langRestrict)
    if (filter?.orderBy) options.params = options.params.set("orderBy", filter.orderBy)

    // Object.keys(filter).reduce((acc, key) => {
    //     if (filter[key]) {
    //       options.params = options.params.set(key, filter[key])
    //     }

    //   return acc
    // })

    return this.http.get<any>(environment.path + `books/v1/volumes`, options)
  }

  getColection(): Observable<any> {
   
    return this.http.get<any>(`http://localhost:3000/colections_books`)
  }

  getColectionBook(id: number): Observable<any> {
   
    return this.http.get<any>(`http://localhost:3000/colections_books/${id}/`)
  }

  postColection(colections: any): Observable<any> {
   
    return this.http.post<any>(`http://localhost:3000/colections_books/`, colections)
  }

  patchColection(colections: any): Observable<any> {
   
    return this.http.patch<any>(`http://localhost:3000/colections_books/${colections.id}`, colections)
  }

  deletColection(colections: any): Observable<any> {
   
    return this.http.delete<any>(`http://localhost:3000/colections_books/${colections.id}`)
  }

}
