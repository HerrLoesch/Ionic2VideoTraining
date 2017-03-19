import { Component, OnInit } from '@angular/core';
import { FavoriteStore } from '../../providers/favorite-store';

@Component({
  selector: 'page-favorite-collection',
  templateUrl: 'favorite-collection.html'
})
export class FavoriteCollectionPage implements OnInit {

  favorites:Array<Favorite> = [];

  constructor(private store : FavoriteStore) { }

  ngOnInit() {
    //this.favorites = this.store.getFavorites();

    this.createTestData();      
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

}
