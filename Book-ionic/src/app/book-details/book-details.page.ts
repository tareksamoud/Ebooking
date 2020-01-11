import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../services/book.service';
import {Book} from '../models/book.model';
import {NewsService} from '../services/news.service';
import {News} from '../models/news.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {
  public currentBook: Book;
  public page = 0;
  public size = 4;
  public url: string;
  public status;

  constructor(
      private bookService: BookService,
      private newsService: NewsService,
      private routes: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = atob(this.activatedRoute['snapshot'].params.id);
    this.getBooks()
  }

  getBooks(){
      this.bookService.recupererURL(this.url)
          .subscribe(resp => {
                  this.currentBook = resp;
              },
              error => alert(error)
          );

  }

  backToBooks() {
 // this.status=null;
    return this.routes.navigateByUrl("/tabs/books");
  }

    editBook() {

    }

  supprimerBook(book: Book) {
    let link = book['_links'].self.href;
    return this.bookService.supprimerBook(link)
        .subscribe(data => {
            return this.routes.navigateByUrl('/tabs/books?page='+this.page+'&size='+this.size);
        },
        err => {
          console.log(err);
        });
  }
}
