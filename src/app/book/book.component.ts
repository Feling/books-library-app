import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Book} from "../books/book.model";
import {NgForm} from "@angular/forms";
import {BooksService} from "../books/books.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
@Input() book: Book;
@Input() index: number;
@Input() name: string;
@ViewChild('f') bookForm: NgForm;
public indexing: number;
  closeResult: string;
@Output() bookDeleted = new EventEmitter<void>();

 constructor(private booksservice: BooksService, private modalService: NgbModal) { }

  onDelete() {
    this.bookDeleted.emit();
  }
  ngOnInit() {
  this.indexing = this.index;

  }

   addBook(form: NgForm) {
    const newBook = new Book(form.value.name, form.value.date, form.value.title);
   this.booksservice.addBook(newBook);
  }

  editBook(form: NgForm) {
    this.book.name = form.value.name;
    this.book.date = form.value.date;
    this.book.title = form.value.title;
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log(this.closeResult);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
