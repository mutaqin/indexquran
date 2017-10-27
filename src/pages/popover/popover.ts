import { Component } from '@angular/core';

import { ViewController, NavParams, AlertController } from 'ionic-angular';

import { SettingService } from '../../providers/setting-service';

@Component({
  template: `
    <ion-list>
      <div ion-item ><ion-label>Terjemahan</ion-label><ion-toggle (ionChange)="translationToggleChange($event)" [(ngModel)]="translation" ></ion-toggle></div>
      <div ion-item ><ion-label>Mode Malam</ion-label><ion-toggle (ionChange)="nightModeToggleChange($event)" [(ngModel)]="nightMode" ></ion-toggle></div>
      <div ion-item ><ion-label>Huruf Besar</ion-label><ion-toggle (ionChange)="largerFontSizeToggleChange($event)" [(ngModel)]="largerFont" ></ion-toggle></div>
    </ion-list>
  `
})
export class PopoverPage {
  
  translation: boolean;
  largerFont: boolean;
  nightMode: boolean;
  surahComp: any;
  constructor(
    private navParams: NavParams, 
    public viewCtrl: ViewController, 
    public alertCtrl: AlertController, 
    public setting: SettingService
  ) {
    if (this.navParams.data) {
      this.surahComp = this.navParams.data.page;
    }
    
    this.setting.isTranslation().then(a=> this.translation = a);
    this.setting.isNightMode().then(a=> this.nightMode = a);
    this.setting.isLargerFontSize().then(a=> this.largerFont = a);

  }


  translationToggleChange(evt){
    if(this.surahComp){
      this.surahComp.setTranslation(evt.checked);
      this.setting.setTranslation(evt.checked);
    }
  }
  nightModeToggleChange(evt){
    if(this.surahComp){
      this.surahComp.setNightMode(evt.checked);
      this.setting.setNightMode(evt.checked);
    }
  }
  largerFontSizeToggleChange(evt){
    if(this.surahComp){
      this.surahComp.setLargerFontSize(evt.checked);
      this.setting.setLargerFontSize(evt.checked);
    }
  }
}