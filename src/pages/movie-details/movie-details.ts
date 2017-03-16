import { Component } from '@angular/core';
import { Omdb } from '../../providers/omdb';
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html'
})
export class MovieDetailsPage {

  public movie: any = {};

  constructor(private omdb: Omdb) {
    this.omdb.getMovie("tt4244162").then(data => this.movie = data);
    }

}
