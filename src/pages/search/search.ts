import { Component } from '@angular/core';

@Component({
  templateUrl: 'search.html'
})
export class SearchPage {

  public movies: any;

  public showCancel: boolean;

  public searchText: string = "";

  public onSearchInput() {
this.movies = [
      {
         "Title":"Beta Test",
         "Year":"2016",
         "imdbID":"tt4244162",
         "Type":"movie",
         "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODdlMjU0MDYtMWQ1NC00YjFjLTgxMDQtNDYxNTg2ZjJjZDFiXkEyXkFqcGdeQXVyMTU2NTcxNDg@._V1_SX300.jpg"
      },
      {
         "Title":"Johnny Test",
         "Year":"2005–",
         "imdbID":"tt0454349",
         "Type":"series",
         "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NjMyMTc5NF5BMl5BanBnXkFtZTcwNTI5ODAwMw@@._V1_SX300.jpg"
      },
      {
         "Title":"Test Pilot",
         "Year":"1938",
         "imdbID":"tt0030848",
         "Type":"movie",
         "Poster":"http://ia.media-imdb.com/images/M/MV5BODMwNzkyNDg3OV5BMl5BanBnXkFtZTgwMDU2NjQzMTE@._V1_SX300.jpg"
      },
      {
         "Title":"Test",
         "Year":"2013",
         "imdbID":"tt2407380",
         "Type":"movie",
         "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDU5NDkxNF5BMl5BanBnXkFtZTcwMjk5OTk4OQ@@._V1_SX300.jpg"
      },
      {
         "Title":"The Test",
         "Year":"2012",
         "imdbID":"tt1986180",
         "Type":"movie",
         "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNTgzMjM5M15BMl5BanBnXkFtZTcwNDUzMTE1OA@@._V1_SX300.jpg"
      },
      {
         "Title":"Baka and Test: Summon the Beasts",
         "Year":"2010–",
         "imdbID":"tt1655610",
         "Type":"series",
         "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTE0NTc1MzE5OV5BMl5BanBnXkFtZTgwNTMyMTgwMzE@._V1_SX300.jpg"
      },
      {
         "Title":"The Test",
         "Year":"2013",
         "imdbID":"tt2616114",
         "Type":"movie",
         "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMDQwMzM2M15BMl5BanBnXkFtZTcwMzA1OTg1OQ@@._V1_SX300.jpg"
      },
      {
         "Title":"Rabbit Test",
         "Year":"1978",
         "imdbID":"tt0078133",
         "Type":"movie",
         "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MDEwNDI5Ml5BMl5BanBnXkFtZTYwNTQ1Mjg5._V1_SX300.jpg"
      },
      {
         "Title":"This Is Not a Test",
         "Year":"1962",
         "imdbID":"tt0183884",
         "Type":"movie",
         "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTU5MDkwNDAzOV5BMl5BanBnXkFtZTgwNjE4NDgwMzE@._V1._CR76,175,222,296_SY132_CR5,0,89,132_AL_.jpg_V1_SX300.jpg"
      },
      {
         "Title":"Sound Test for Blackmail",
         "Year":"1929",
         "imdbID":"tt0249159",
         "Type":"movie",
         "Poster":"N/A"
      }
   ]

  }

  constructor() { 
  }

}
