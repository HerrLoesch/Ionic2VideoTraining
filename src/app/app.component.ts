import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import {Omdb} from '../providers/omdb';
import {FavoriteStore} from '../providers/favorite-store';

import { StatusBar, Splashscreen } from 'ionic-native';

import { SearchPage } from '../pages/search/search';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { FavoriteInputPage } from '../pages/favorite-input/favorite-input';
import { FavoriteCollectionPage } from '../pages/favorite-collection/favorite-collection';


@Component({
  templateUrl: 'app.html',
  providers: [Omdb, FavoriteStore]
})
export class MyApp {
  rootPage = FavoriteCollectionPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
