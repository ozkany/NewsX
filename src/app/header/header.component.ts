import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '../shared/news.model';
import { NewsService } from '../shared/news-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  carouselNewsItems: NewsItem[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.carouselNewsItems = this.newsService.getNewsListData().slice(0,4);
  }

}
