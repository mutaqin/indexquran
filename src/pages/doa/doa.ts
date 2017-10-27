import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DoaService } from '../../providers/doa-service';
import { QuranService } from '../../providers/quran-service';
import { DoaDetailPage } from '../../pages/doa/doa-detail';


@Component({
  selector: 'page-doa',
  templateUrl: 'doa.html'
})
export class DoaPage {
  doas: Array<any>;  
  surah: any;
  constructor(public navCtrl: NavController, public doaService: DoaService, public quranService: QuranService) {
    this.doaService.load().subscribe(
                       doas => this.doas = doas);
  }

selectDoa(event, doa){
    this.navCtrl.push(DoaDetailPage, {
      doa:doa
    });  
  }
}
