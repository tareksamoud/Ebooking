import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../services/book.service';
import {Book} from '../models/book.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public book: Book;
  constructor(
      private routes: Router,
      private bookService: BookService
  ) {}

  ajouterBook(data: Book) {
    this.bookService.ajouterBook(this.bookService.host+"/ajouterBook",data)
        .subscribe(resp=>{
          console.log(resp);

          //window.alert("Recommandation bien envoyée :)");
          //this.book=resp;
          //console.log(this.book);
          //this.routes.navigateByUrl("/tabs/books");
        },erreur=>{
          console.log(erreur);
        });
  }
}
