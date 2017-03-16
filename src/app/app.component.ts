import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import {Omdb} from '../providers/omdb';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SearchPage } from '../pages/search/search';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';


@Component({
  templateUrl: 'app.html',
  providers: [Omdb]
})
export class MyApp {
  rootPage = SearchPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
