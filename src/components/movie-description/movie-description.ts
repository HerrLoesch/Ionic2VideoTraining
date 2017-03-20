import { Component, Input, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MovieDetailsPage } from '../../pages/movie-details/movie-details';

@Component({
  selector: 'movie-description',
  templateUrl: 'movie-description.html'
})
export class MovieDescriptionComponent implements OnInit{

 @Input()
  public movie: any;

  constructor(private navCtrl : NavController) {
  }

  public showDetails(id: string){
    this.navCtrl.push(MovieDetailsPage, {'id': id })
  }

  ngOnInit()
  {
    console.log(this.movie);
  }
}
