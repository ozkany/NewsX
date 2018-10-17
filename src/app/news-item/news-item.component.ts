import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NewsService } from '../shared/news-service';
import { NewsItem } from '../shared/news.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit, OnDestroy {

  @Input() newsItem: NewsItem;
  today = Date();
  paramsSubscription: Subscription;

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    console.log("news id=" + id);
    this.newsItem = this.newsService.getNewsById(id);
    console.log(this.newsItem);
    
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        var id = params['id'];
        console.log("news id=" + id);
        this.newsItem = this.newsService.getNewsById(id);
        console.log(this.newsItem);
      }
    // ngOnDestroy unsubscribe needed 
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onNewsSelected() {
    console.log('onselected in NewsItemComponent');
    console.log(this.newsItem);
    this.newsService.newsSelected.emit(this.newsItem);
  }

  isNoImageIn(newsItem) {
    //return this.content.Groups.filter(i => i.AbsenceReservationGroupID === item.ID).length > 0
    return !newsItem.detail.contents.some(n => n.entity == 4);
  }

}
