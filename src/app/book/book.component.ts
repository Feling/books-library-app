import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Book} from "../books/book.model";
import {NgForm} from "@angular/forms";
import {BooksService} from "../books/books.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
@Input() book: Book;
@Input() index: number;
@ViewChild('f') bookForm: NgForm;
public indexing: number;
public newBook: Book;

@Output() bookDeleted = new EventEmitter<void>();
private relevantBook: Book;
 constructor(private booksservice: BooksService) { }

  onDelete() {
    this.bookDeleted.emit();
  }
  ngOnInit() {
  this.indexing = this.index;

  }

  addBook(form: NgForm) {
   const newBook = new Book(form.value.name, form.value.date, form.value.title);
  this.booksservice.addBook(newBook);
  form.reset();
 }
onEdit() {
  this.newBook = this.booksservice.getBook(this.indexing);
   this.bookForm.setValue({
     name: 'Test',
     date: this.newBook.date,
     title: this.newBook.title
   });
}
}
