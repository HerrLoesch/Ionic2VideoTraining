import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from "../search/search";
import { FavoriteCollectionPage } from "../favorite-collection/favorite-collection";

@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuPage {

  rootPage = SearchPage;

  pages: Array<any>;

  constructor(public navCtrl: NavController) {

    this.pages = [
      {title: "Search", component:SearchPage},
      {title: "Favorites", component:FavoriteCollectionPage}
    ]
  }

  openPage(component:any){
    this.navCtrl.setRoot(component);
  }


}
