import * as products from './news.json';
import * as newsCat1 from './newsCat1.json';
import * as newsCat2 from './newsCat2.json';
import * as newsCat3 from './newsCat3.json';
import * as newsCat4 from './newsCat4.json';
import * as newsCat5 from './newsCat5.json';
import * as newsCat6 from './newsCat6.json';
import { NewsItem } from './news.model';
import { EventEmitter } from '@angular/core';


export class NewsService {
    newsListArray: [[NewsItem]];
    newsList: [NewsItem];
    selectedNewsList: NewsItem[] = [];
    categoryId: number = 0;

    newsSelected = new EventEmitter<NewsItem>();
    selectedNewsListChanged = new EventEmitter<NewsItem[]>();
    newsCategoryChanged = new EventEmitter<number>();

    constructor() {
        this.newsList = <[NewsItem]>products.default;

        this.newsListArray = [<[NewsItem]>newsCat1.default];
        this.newsListArray.push(<[NewsItem]>newsCat2.default);
        this.newsListArray.push(<[NewsItem]>newsCat3.default);
        this.newsListArray.push(<[NewsItem]>newsCat4.default);
        this.newsListArray.push(<[NewsItem]>newsCat5.default);
        this.newsListArray.push(<[NewsItem]>newsCat6.default);
        
        console.log(this.newsListArray);
    }

    get NewsList() {
        return this.newsListArray[this.categoryId];
        // if(this.categoryId == 0) {
        //     return this.newsList;
        // } else { 
        //     return this.newsList.filter(n=> n.category == this.categoryId);
        // }
    }
    
    getNewsListData() {
        return this.newsList.slice();
    }

    getNewsById(id: string) {
        return this.NewsList.filter(n=> n.detail.id == id)[0];
    }

    getTop2NewsData() {
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
        this.selectedNewsList.push(newsItem);
        this.selectedNewsListChanged.emit(this.selectedNewsList.slice());
    }
    

}