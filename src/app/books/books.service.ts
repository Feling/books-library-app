import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Book} from "./book.model";
import {Observer} from "rxjs/Observer";

@Injectable()
export class BooksService {

  private books: Book[] = [
    {name: 'Leonard Byiork', date: '2000-07-22', title: 'First book'},
    {name: 'Leonard Byiork', date: '2001-08-26', title: 'Secondbook'},
    {name: 'Leonard Byiork', date: '2002-09-29', title: 'Third book'},
    {name: 'Leonard Byiork', date: '2003-10-12', title: 'Fird book'},
    {name: 'Leonard Byiork', date: '2004-11-04', title: 'Fifth book'}
  ];

  constructor() { }

  loadBooks(): Observable<Book[]> {
    const booksLoader = Observable.create((observer: Observer<Book[]>) => {
      setTimeout(() => {
        observer.next(this.books);
      }, 2000);
    });
    return booksLoader;
  }

  getBook(index: number) {
    return this.books[index];
  }
   addBook(book: Book) {
    this.books.push(book);
  }
}
