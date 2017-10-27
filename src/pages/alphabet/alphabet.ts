import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlphabetService } from '../../providers/alphabet-service';
import { AlphabetDetailPage } from '../../pages/alphabet/alphabet-detail';

@Component({
  selector: 'page-alphabet',
  templateUrl: 'alphabet.html'
})
export class AlphabetPage {
  alphabet:any;  
  queryText ='';

  constructor(public navCtrl: NavController, public alphabetService: AlphabetService) {
    this.alphabetService.load().subscribe(
                       alphabet => this.alphabet = alphabet);
  }

  search(){
    this.alphabetService.search(this.queryText)
    .subscribe(alphabet => this.alphabet = alphabet);
  }

  selectItem(event, topic){
    this.navCtrl.push(AlphabetDetailPage, {
      topic: topic
    });
  }

}
