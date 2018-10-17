import * as products from './news.json';
import { NewsItem } from './news.model';
import { EventEmitter } from '@angular/core';


export class NewsService {
    newsList: [NewsItem];
    selectedNewsList: NewsItem[] = [];
    categoryId: number = 0;

    newsSelected = new EventEmitter<NewsItem>();
    selectedNewsListChanged = new EventEmitter<NewsItem[]>();
    newsCategoryChanged = new EventEmitter<number>();

    constructor() {
        this.newsList = <[NewsItem]>products.default;
    }

    get NewsList() {
        if(this.categoryId == 0) {
            return this.newsList;
        } else { 
            return this.newsList.filter(n=> n.category == this.categoryId);
        }
    }
    
    getNewsListData() {
        console.log('getNewsListData in NewsService');
        console.log(this.newsList);
        return this.newsList.slice();
    }

    getNewsById(id: string) {
        console.log('getNewsById in NewsService');
        return this.newsList.filter(n=> n.detail.id == id)[0];
    }

    getTop2NewsData() {
        console.log("getTop2NewsData. categoryId="+this.categoryId);
        return this.NewsList.slice(0, 2);
    }

    getRecentNewsData() {
        return this.NewsList.slice(2, 8);
    }

    getGeneralNewsData() {
        return this.NewsList.slice(8, 15);
    }

    getMostReadNewsData() {
        return this.NewsList.slice(15, 19);
    }

    getFeaturedNewsData() {
        return this.NewsList.slice(19, 21);
    }

    getBottom2NewsData() {
        return this.NewsList.slice(21, 23);
    }

    getFeaturedBottomNewsData() {
        return this.NewsList.slice(23, 26);
    }

    getMostReadBottomNewsData() {
        return this.NewsList.slice(26, 30);
    }



    setNewSelectedNews(newsItem: NewsItem) {
        console.log('setNewSelectedNews in NewsService');
        this.selectedNewsList.push(newsItem);
        this.selectedNewsListChanged.emit(this.selectedNewsList.slice());
    }
    

}