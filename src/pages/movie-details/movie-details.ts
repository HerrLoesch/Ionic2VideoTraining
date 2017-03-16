import { Component, OnInit } from '@angular/core';
import { Omdb } from '../../providers/omdb';
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html'
})
export class MovieDetailsPage implements OnInit {

  public movie: any = {};

  constructor(private omdb: Omdb) {
  }

  ngOnInit() {
  }

  ionViewDidLoad(){
    this.omdb.getMovie("tt4244162").then(data => this.movie = data);    
  }

}
