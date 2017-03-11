import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class Omdb {

  private baseUrl : string = "http://www.omdbapi.com/";

  public search(searchText : string)  {

    return new Promise(resolve => {

        let url = this.baseUrl + "?s=" + searchText;
        this.http.get(url).subscribe(data => resolve(data.json().Search));

      });
  }

  constructor(private http: Http) {
  }

}
