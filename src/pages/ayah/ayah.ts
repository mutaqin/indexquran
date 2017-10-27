import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuranService } from '../../providers/quran-service';

@Component({
  selector: 'page-ayah',
  templateUrl: 'ayah.html'
})
export class AyahPage {
  errorMessage: string;
  surah: any;
  doa: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public quranService: QuranService) {
    this.doa = navParams.get('doa');
    quranService.getSurahs().map((data: any) => {
      return data[this.doa.surah];
    }).subscribe(
            surah => {this.surah = surah;});
  }

}