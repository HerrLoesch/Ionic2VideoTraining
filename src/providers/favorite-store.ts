import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { NativeStorage } from 'ionic-native';


@Injectable()
export class FavoriteStore implements OnInit, OnDestroy {

  favorites:Array<any> = new Array<any>();

  key: string = "favorites";

  public addFavorite(favorite: any) {
    this.favorites.push(favorite);
  }

  public getFavorites(){
    return this.favorites;
  }

  private save() {
    NativeStorage.setItem(this.key, this.favorites);
  }

  private load() {
    NativeStorage.getItem(this.key)
      .then(data => this.favorites = data)
      .catch(error => this.favorites = new Array<any>());
  }

  ngOnInit() {
    this.load();
  }

  ngOnDestroy() {
    this.save();
  }

  constructor() {
  }

}
