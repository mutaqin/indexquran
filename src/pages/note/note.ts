import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-note',
  templateUrl: 'note.html'
})
export class NotePage {
  notes = [{name: "Belum ada Catatan"}];    
  constructor(public navCtrl: NavController) {
  }

}
