import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { NativeStorage } from 'ionic-native';
import { ToastController } from 'ionic-angular';


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
//    this.load();
  }

  ngOnDestroy() {
    this.save();
  }

  private createTestData() {
        let favorite =  {
         "Title":"The Test",
         "Year": 2012,
         "imdbID":"tt1986180",
         "Comment":"movie",
         "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNTgzMjM5M15BMl5BanBnXkFtZTcwNDUzMTE1OA@@._V1_SX300.jpg"
      };

      this.favorites.push(favorite)
    
      favorite = {
          "Title":"Rabbit Test",
          "Year": 1978,
          "imdbID":"tt0078133",
          "Comment": "another movie",
          "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MDEwNDI5Ml5BMl5BanBnXkFtZTYwNTQ1Mjg5._V1_SX300.jpg"
        };

      this.favorites.push(favorite)
  }

  constructor(private toastCtrl: ToastController) {
    this.createTestData();   
  }

}
