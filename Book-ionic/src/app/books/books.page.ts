import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Book} from '../models/book.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  public books: Book[];
  page = 0;
  size = 4;
  totalPage: number;
  pages: number[];
    private url: string;
  constructor(
      private bookService: BookService,
      private routes: Router
      ) { }

  ngOnInit() {
    this.getBooksData();
  }

  private getBooksData() {
    return this.bookService.recupererTousBooks(this.page, this.size)
        .subscribe(data => {
            this.totalPage = data.page.totalPages;
            console.log('total pages :' +this.totalPage);
            this.pages = new Array(this.totalPage);
            this.books = data._embedded.books;
        },
            error => alert(error)
        );
  }

    goToBooksDetails(book: Book) {
      this.url = book['_links'].self.href;
      return this.routes.navigateByUrl('/book-details/' +  btoa(this.url));
  }

    goToAddBook() {
        return this.routes.navigateByUrl('/tabs/tab3');
    }

    goToNextPage(i: number) {
        return this.bookService.recupererTousBooks(i, this.size)
            .subscribe(data => {
                    this.totalPage = data.page.totalPages;
                    console.log('total pages :' +this.totalPage);
                    this.pages = new Array(this.totalPage);
                    this.books = data._embedded.books;
                },
                error => alert(error)
            );
    }
}
