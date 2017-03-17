import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-favorite-input',
  templateUrl: 'favorite-input.html'
})
export class FavoriteInputPage {

  constructor(public viewCtrl: ViewController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder) {

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
    let favorite = {
      "imdbID": this.navParams.get("ImdbID"),
      "comment": this.formData.value.comments
    };

    this.dismiss();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
