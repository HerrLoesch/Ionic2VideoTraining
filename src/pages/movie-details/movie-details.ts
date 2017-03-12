import { Component } from '@angular/core';

@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html'
})
export class MovieDetailsPage {

  public movie: any;

  constructor() 
    {
      this.movie = {
   "Title":"Test",
   "Year":"2013",
   "Rated":"N/A",
   "Released":"04 Apr 2014",
   "Runtime":"89 min",
   "Genre":"Drama",
   "Director":"Chris Mason Johnson",
   "Writer":"Chris Mason Johnson (screenplay)",
   "Actors":"Scott Marlowe, Matthew Risch, Evan Boomer, Kevin Clarke",
   "Plot":"In 1985, a gay dance understudy hopes for his on-stage chance while fearing the growing AIDS epidemic.",
   "Language":"English, Portuguese, French",
   "Country":"USA",
   "Awards":"3 wins & 3 nominations.",
   "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDU5NDkxNF5BMl5BanBnXkFtZTcwMjk5OTk4OQ@@._V1_SX300.jpg",
   "Metascore":"70",
   "imdbRating":"6.3",
   "imdbVotes":"1,164",
   "imdbID":"tt2407380",
   "Type":"movie",
   "Response":"True"
}
    }

}
