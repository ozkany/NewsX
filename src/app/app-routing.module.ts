import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewsListComponent } from "./news-list/news-list.component";
import { NewsItemComponent } from "./news-item/news-item.component";


const appRoutes: Routes = [
    { path: '', component: NewsListComponent},
    { path: 'haber/:id', component: NewsItemComponent }
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}