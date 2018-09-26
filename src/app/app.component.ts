import { Component, OnInit } from '@angular/core';
import { NewsItem } from './shared/news.model';
import { NewsService } from './shared/news-service';
// import * as products from './shared/news.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HaberX';
  // newsList: [NewsItem];

  constructor(private newsService: NewsService) {

  }

  onCategoryClicked(categoryId: number) {
    console.log('onCategoryClicked' + categoryId);
    this.newsService.newsCategoryChanged.emit(categoryId);
  }

  ngOnInit() {
    // this.newsList = <[NewsItem]>products.default;
    // console.log(this.newsList);
    this.newsService.newsSelected.subscribe(
      (news: NewsItem) => {
        console.log('newsSelected.subscribe in AppComponent');
        this.newsService.setNewSelectedNews(news);
      }
    )
  }
}
