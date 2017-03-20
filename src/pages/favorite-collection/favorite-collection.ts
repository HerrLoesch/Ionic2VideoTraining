import { Component, OnInit } from '@angular/core';
import { FavoriteStore } from '../../providers/favorite-store';

@Component({
  selector: 'page-favorite-collection',
  templateUrl: 'favorite-collection.html'
})
export class FavoriteCollectionPage implements OnInit {

  favorites:Array<Favorite> = [];

  constructor(private store : FavoriteStore) { }

  ngOnInit() {
    this.favorites = this.store.getFavorites();       
  }
}
