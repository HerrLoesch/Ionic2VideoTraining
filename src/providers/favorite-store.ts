import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { NativeStorage } from 'ionic-native';
import { ToastController } from 'ionic-angular';
import { Favorite } from "../domain/favorite";


@Injectable()
export class FavoriteStore implements OnInit, OnDestroy {

  favorites:Array<Favorite> = new Array<Favorite>();

  key: string = "favorites";

  public addFavorite(favorite: Favorite) {
    this.favorites.push(favorite);
    this.save();
  }

  public getFavorites(){
    return this.favorites;
  }

  private save() {
    NativeStorage.setItem(this.key, this.favorites)
      .catch(error => {
          console.log(error);

          let toast = this.toastCtrl.create({
              message: 'Favorite could not be saved',
              position: 'middle',
              duration: 5000,
              showCloseButton: true
          });

          toast.present();
      });
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

  constructor(private toastCtrl: ToastController) {
  }

}
