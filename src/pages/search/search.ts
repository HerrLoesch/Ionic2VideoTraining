import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'search.html'
})
export class SearchPage {

  public movies: any;

  public showCancel: boolean;

  public searchText: string = "";

  public onSearchInput() {

      let url = "http://www.omdbapi.com/?s=" + this.searchText;

      this.http.get(url).subscribe(data => this.movies = data.json().Search);

  }

  constructor(private http: Http) { 
  }

}
