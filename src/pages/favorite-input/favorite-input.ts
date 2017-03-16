import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-favorite-input',
  templateUrl: 'favorite-input.html'
})
export class FavoriteInputPage {

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {}

  movieTitle:string;

  ionViewDidLoad() {

    this.movieTitle = this.navParams.get("Title");

    console.log('ionViewDidLoad FavoriteInputPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
