import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsService } from './shared/news-service';
import { HeaderComponent } from './header/header.component';
import { NewsModalComponent } from './news-modal/news-modal.component';
import { AsideComponent } from './aside/aside.component';

const appRoutes: Routes = [
  { path: '', component: NewsListComponent},
  { path: 'haber/:id', component: NewsItemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    NewsListComponent,
    HeaderComponent,
    NewsModalComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
