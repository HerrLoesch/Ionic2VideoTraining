import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { FavoriteInputPage } from '../pages/favorite-input/favorite-input';
import { FavoriteCollectionPage } from '../pages/favorite-collection/favorite-collection';
import { MovieListItemComponent } from "../components/movie-list-item/movie-list-item";
import { FavoriteStore } from "../providers/favorite-store";
import { SideMenuPage } from "../pages/side-menu/side-menu";
import { TabsPage } from "../pages/tabs/tabs";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    MovieDetailsPage,
    FavoriteInputPage,
    FavoriteCollectionPage,
    MovieListItemComponent,
    SideMenuPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    MovieDetailsPage,
    FavoriteInputPage,
    FavoriteCollectionPage,
    SideMenuPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, FavoriteStore]
})
export class AppModule {}
