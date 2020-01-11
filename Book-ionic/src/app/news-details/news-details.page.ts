import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {ActivatedRoute, Router} from '@angular/router';
import {News} from '../models/news.model';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
  public url: string;
  private currentNews: News;
  constructor(
      private newsService: NewsService,
      private routes: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = atob(this.activatedRoute['snapshot'].params.id);
    console.log(this.url);
    this.getNews();
  }

  getNews(){
    this.newsService.recupererURL(this.url)
        .subscribe(resp => {
              this.currentNews = resp;
              console.log(this.currentNews);
          },
            error => alert(error)
    );
  }

  backToNews() {
    return this.routes.navigateByUrl("/tabs/tab2");
  }
}
