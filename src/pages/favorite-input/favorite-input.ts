import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewController, NavParams } from 'ionic-angular';
import { FavoriteStore } from '../../providers/favorite-store';

@Component({
  selector: 'page-favorite-input',
  templateUrl: 'favorite-input.html'
})
export class FavoriteInputPage {

  constructor(private viewCtrl: ViewController, 
              private navParams: NavParams,
              private formBuilder: FormBuilder,
              private store: FavoriteStore) {

               this.formData = this.formBuilder.group({
                  comments: ['', Validators.compose([Validators.minLength(3), Validators.required])]
                });
              }

  movieYear: string;
  movieTitle:string;

  formData: FormGroup;

  ionViewDidLoad() {
    this.movieTitle = "Test"; //this.navParams.get("Title");
    this.movieYear = "1984"; //this.navParams.get("Year");    
  }

  save(){
    
    let favorite = new Favorite();
    favorite.Comment = this.formData.value.comments;
    favorite.Title = this.navParams.get("Title");
    favorite.Poster = this.navParams.get("Poster");
    favorite.imdbID = this.navParams.get("imdbID");
    favorite.Year = this.navParams.get("Year");  

    this.store.addFavorite(favorite);
  
//    this.dismiss();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
