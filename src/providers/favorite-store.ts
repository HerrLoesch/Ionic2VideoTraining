import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';


@Injectable()
export class FavoriteStore implements OnInit, OnDestroy {

  favorites:Array<any> = new Array<any>();

  key: string = "favorites";

  public addFavorite(favorite: any) {
    this.favorites.push(favorite);
    this.save();
  }

  public getFavorites(){
    return this.favorites;
  }

  private save() {
    NativeStorage.setItem(this.key, this.favorites)
      .catch(error => console.log(error));
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

  private errorToast:Toast;

  constructor(private toastController:ToastController) {
    this.errorToast = this.toastController.create({
      message: "Favorite could not be saved.",
      duration: 5000
    });
  }

}
