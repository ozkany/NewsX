import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news-service';
import { NewsItem } from '../shared/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsItemList: NewsItem[];
  top2NewsData: NewsItem[];
  recentNewsData: NewsItem[];
  generalNewsData: NewsItem[];
  mostReadNewsData: NewsItem[];
  featuredNewsData: NewsItem[];
  bottom2NewsData: NewsItem[];
  mostReadBottomNewsData: NewsItem[];
  featuredBottomNewsData: NewsItem[];

  constructor(private newsService: NewsService) {

  }

  onNewsSelected(selectedNews: NewsItem) {
    console.log(selectedNews);
    this.newsService.newsSelected.emit(selectedNews);
  }

  ngOnInit() {
    this.getAllNewsData();

    // console.log(this.newsList);
    this.newsService.newsSelected.subscribe(
      (news: NewsItem) => {
        console.log('newsSelected.subscribe in AppComponent');
        this.newsService.setNewSelectedNews(news);
      }
    )

    this.newsService.newsCategoryChanged.subscribe(
      (categoryId: number) => {
        console.log('root.newsCategoryChanged.subscribe : ' + categoryId);
        this.newsService.categoryId = categoryId;
        this.getAllNewsData();
        console.log(this.top2NewsData);
    });
  }

  getAllNewsData() {
    this.newsItemList = this.newsService.getNewsListData();
    this.top2NewsData = this.newsService.getTop2NewsData();
    this.recentNewsData = this.newsService.getRecentNewsData();
    this.mostReadNewsData = this.newsService.getMostReadNewsData();
    this.generalNewsData = this.newsService.getGeneralNewsData();
    this.featuredNewsData = this.newsService.getFeaturedNewsData();
    this.bottom2NewsData = this.newsService.getBottom2NewsData();
    this.featuredBottomNewsData = this.newsService.getFeaturedBottomNewsData();
    this.mostReadBottomNewsData = this.newsService.getMostReadBottomNewsData();
    console.log("news-list-component -> getAllNewsData finished");
  }
  

}
