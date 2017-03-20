import { Component } from '@angular/core';
import { SearchPage } from "../search/search";
import { FavoriteCollectionPage } from "../favorite-collection/favorite-collection";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  constructor() {}

  searchRoot = SearchPage;
  favoritesRoot = FavoriteCollectionPage;

}
