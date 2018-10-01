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
  
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsItemList = this.newsService.getNewsListData().slice(6);

    this.newsService.selectedNewsListChanged.subscribe(
      (newsList: NewsItem[]) => {
        console.log('selectedNewsListChanged.subscribe in NewsListComponent');
        console.log(newsList);
    });

    this.newsService.newsCategoryChanged.subscribe(
      (categoryId: number) => {
        console.log('his.newsService.newsCategoryChanged.subscribe : ' + categoryId);
        this.newsItemList = this.newsService.getNewsListData().filter(n=> n.category==categoryId);
    });
  }

}
