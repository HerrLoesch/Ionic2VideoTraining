import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { FavoriteInputPage } from '../pages/favorite-input/favorite-input';
import { FavoriteCollectionPage } from '../pages/favorite-collection/favorite-collection';
import { MovieDescriptionComponent } from '../components/movie-description/movie-description';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    MovieDetailsPage,
    FavoriteInputPage,
    FavoriteCollectionPage,
    MovieDescriptionComponent
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
    FavoriteCollectionPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
