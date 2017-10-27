import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuranService } from '../../providers/quran-service';
import { SurahPage } from '../surah/surah';
@Component({
  selector: 'page-quran',
  templateUrl: 'quran.html'
})
export class QuranPage {
  surahs: Array<any>;
  
  constructor(public navCtrl: NavController, public quranService: QuranService) {
    this.quranService.getSurahs().subscribe(
                       surahs => this.surahs = surahs);
                       
  }

  selectSurah(event, surah){
    this.navCtrl.push(SurahPage, {
      surah: surah
    });  
  }
}
