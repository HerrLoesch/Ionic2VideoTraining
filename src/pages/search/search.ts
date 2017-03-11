import { Component } from '@angular/core';
import { Omdb } from '../../providers/omdb';

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

  constructor(private omdb: Omdb) { 
  }

}
