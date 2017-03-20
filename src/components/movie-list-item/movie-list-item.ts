import { Component, Input } from '@angular/core';
import { MovieDetailsPage } from "../../pages/movie-details/movie-details";
import { NavController } from "ionic-angular";

@Component({
  selector: 'movie-list-item',
  templateUrl: 'movie-list-item.html'
})
export class MovieListItemComponent {

  @Input()
  public movie: any;

  constructor(private navCtrl: NavController) {
  }

  public showDetails(id: string){
    this.navCtrl.push(MovieDetailsPage, {'id': id })
  }

}
