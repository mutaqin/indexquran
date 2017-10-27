import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html'
})
export class BookmarkPage {
  bookmarks = [{name: "Belum ada penanda"}];  
  constructor(public navCtrl: NavController) {
  }

}
