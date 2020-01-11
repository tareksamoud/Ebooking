import {Component, OnInit} from '@angular/core';
import {NewsService} from '../services/news.service';
import {News} from '../models/news.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  private newsPaper: News[];
  private url: string;

  constructor(private newsService: NewsService, private routes: Router) {}

  ngOnInit(): void {
    this.newsService.recupererTousNews()
        .subscribe(data =>{
          this.newsPaper=data['_embedded'].news;
        },
        erreur =>{
          alert(erreur)
        });
  }

  goToNewsDetails(n: News) {
    this.url = n['_links'].self.href;
    return this.routes.navigateByUrl('/news-details/' +  btoa(this.url));
  }
}
