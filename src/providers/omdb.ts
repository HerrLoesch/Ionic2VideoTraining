import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class Omdb {

  private baseUrl : string = "http://moviemaniabackend.azurewebsites.net/api/";

  public search(searchText : string)  {

    return new Promise(resolve => {

        let url = this.baseUrl + "?s=" + searchText;
        this.http.get(url).subscribe(data => resolve(data.json().Search));

      });
  }

  public getMovie(id: string) {
    return new Promise(resolve => {
        let url = this.baseUrl + "?i=" + id;
        this.http.get(url).subscribe(data => {
          console.log(data);
          resolve(data.json());
        });
    });
  }

  constructor(private http: Http) {
  }

}
