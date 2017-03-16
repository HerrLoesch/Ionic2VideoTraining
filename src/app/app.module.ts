import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { FavoriteInputPage } from '../pages/favorite-input/favorite-input';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    MovieDetailsPage,
    FavoriteInputPage
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
    FavoriteInputPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
