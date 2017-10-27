import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {
  showSkip = true;

  constructor(public navCtrl: NavController) {
      
  }

}