import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsService } from './shared/news-service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    NewsListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
