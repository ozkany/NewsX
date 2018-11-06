import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsItem } from './shared/news.model';
import { NewsService } from './shared/news-service';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators' ;
// import * as products from './shared/news.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  myObservableSubscription: Subscription;

  ngOnInit() {

    const myObservable = interval(10000)
      .pipe(map(
          (data: number) => {
            return data * 2;
          }
      ));

    this.myObservableSubscription = myObservable.subscribe(
      (number: number) => {
        console.log("Observable Log: " + number);
      }
    );
  }

  ngOnDestroy() {
    this.myObservableSubscription.unsubscribe();
  }



}
