import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { Omdb } from '../../providers/omdb';
import { MovieDetailsPage } from '../movie-details/movie-details';
import { FavoriteInputPage } from '../favorite-input/favorite-input';


@Component({
  templateUrl: 'search.html'
})
export class SearchPage {

  public movies: any;

  public showCancel: boolean;

  public searchText: string = "";

  public onSearchInput() {

     this.omdb.search(this.searchText)
         .then(data => this.movies = data)
         .catch(error => console.log(error));
  }

  public showDetails(id: string){
    this.navCtrl.push(MovieDetailsPage, {'id': id })
  }

  constructor(private omdb: Omdb, private navCtrl: NavController, private modalCtrl : ModalController) { 
  }

  public addFavorite(movie: any) {
    let modal = this.modalCtrl.create(FavoriteInputPage, movie);
    modal.present();
  }
}
