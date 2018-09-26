import * as products from './news.json';
import { NewsItem } from './news.model';
import { EventEmitter } from '@angular/core';


export class NewsService {
    newsList: [NewsItem];
    selectedNewsList: NewsItem[] = [];

    newsSelected = new EventEmitter<NewsItem>();
    selectedNewsListChanged = new EventEmitter<NewsItem[]>();
    newsCategoryChanged = new EventEmitter<number>();

    constructor() {
        this.newsList = <[NewsItem]>products.default;
    }
    
    getNewsListData() {
        console.log('getNewsListData in NewsService');
        console.log(this.newsList);
        return this.newsList.slice();
    }

    setNewSelectedNews(newsItem: NewsItem) {
        console.log('setNewSelectedNews in NewsService');
        this.selectedNewsList.push(newsItem);
        this.selectedNewsListChanged.emit(this.selectedNewsList.slice());
    }

}