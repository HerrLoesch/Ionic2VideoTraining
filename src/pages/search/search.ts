import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Omdb } from '../../providers/omdb';
import { MovieDetailsPage } from '../movie-details/movie-details';

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

  constructor(private omdb: Omdb, private navCtrl: NavController) { 
  }

}
