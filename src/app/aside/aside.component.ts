import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../shared/news.model';
import { NewsService } from '../shared/news-service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  
  mostReadNewsData: NewsItem[];
  featuredNewsData: NewsItem[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getAllNewsData();
  }

  getAllNewsData() {
    this.mostReadNewsData = this.newsService.getMostReadNewsData();
    this.featuredNewsData = this.newsService.getFeaturedNewsData();
    console.log("aside-component -> getAllNewsData finished");
  }

}
