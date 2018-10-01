import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '../shared/news.model';
import { InvokeFunctionExpr } from '@angular/compiler';
import { NewsService } from '../shared/news-service';

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrls: ['./news-modal.component.css']
})
export class NewsModalComponent implements OnInit {

  @Input() newsItem: NewsItem;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsItem = this.newsService.getNewsListData().slice(0,1)[0];

    this.newsService.newsSelected.subscribe(
      (newsSelected: NewsItem) => {
        console.log('this.newsService.newsSelected.subscribe : ');
        this.newsItem = newsSelected;
    });
  }

  isNoImageIn(newsItem) {
    //return this.content.Groups.filter(i => i.AbsenceReservationGroupID === item.ID).length > 0
    return !newsItem.detail.contents.some(n => n.entity == 4);
  }

}
