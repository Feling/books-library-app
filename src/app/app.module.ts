import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import {BooksService} from "./books/books.service";
import {MdToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SpecialPipe } from './book/special.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    SpecialPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    NgbModule.forRoot()
  ],
  providers: [BooksService],
  bootstrap: [AppComponent],
  entryComponents: [BookComponent]
})
export class AppModule { }
