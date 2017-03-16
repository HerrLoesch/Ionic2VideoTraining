import { Component, OnInit } from '@angular/core';
import { Omdb } from '../../providers/omdb';

import {NavParams} from 'ionic-angular';
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html'
})
export class MovieDetailsPage implements OnInit {

  public movie: any = {};

  constructor(private omdb: Omdb, private params: NavParams) {
  }

  ngOnInit() {
  }

  ionViewDidLoad(){
    let id = this.params.get("id");

    this.omdb.getMovie(id).then(data => this.movie = data);    
  }

}
