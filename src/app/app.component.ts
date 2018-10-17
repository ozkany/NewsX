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

  ngOnInit() {
    
  }

}
