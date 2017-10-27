import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuranService } from '../../providers/quran-service';

@Component({
  selector: 'page-doa-detail',
  templateUrl: 'doa-detail.html',
  providers:[QuranService]
})
export class DoaDetailPage {
  abc: any;
  surahs: any;
  doa: any;
  doas: Array<any>;  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public quranService: QuranService) {
    this.doa = navParams.get('doa');
    
  }

  ionViewWillEnter(){
    this.quranService.getAyahs(this.doa.surah, this.doa.ayah_start, this.doa.ayah_end)
                      .subscribe(
                       sura => {this.surahs = sura;});
  }

  getSurah(){
    return JSON.stringify(this.abc);
  }

}