import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../shared/news-service';
import { NewsItem } from '../shared/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() newsItem: NewsItem; 

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  onSelected() {
    console.log('onselected in NewsItemComponent');
    console.log(this.newsItem);
    this.newsService.newsSelected.emit(this.newsItem);
  }

}
