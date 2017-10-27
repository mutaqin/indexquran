import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController, PopoverController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { PopoverPage } from '../../pages/popover/popover';
import { SettingService } from '../../providers/setting-service';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-surah',
  templateUrl: 'surah.html'
})

export class SurahPage {
  surah: any;
  ayahs: any;
  translation: any;
  largerFontSize: any;
  nightMode: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController,
    private clipboard: Clipboard, 
    public popoverController: PopoverController,
    public setting: SettingService,
    private socialSharing: SocialSharing
  ) {
    this.surah = navParams.get('surah');
    this.ayahs = this.surah.aya;
    this.setting.isTranslation().then(a=> this.translation= a);
    this.setting.isNightMode().then(a=> this.nightMode= a);
    this.setting.isLargerFontSize().then(a=> this.largerFontSize= a);
  }


 presentPopover(event) {
    let popover = this.popoverController.create(PopoverPage,{
      page: this
    });
    popover.present({
      ev: event,
    });
  }

  setTranslation(trans:boolean){
    this.translation = trans;
  }
  setNightMode(mode:boolean){
    this.nightMode = mode;
  }
  setLargerFontSize(size:boolean){
    this.largerFontSize = size;
  }

 selectAyah(surah, ayah) {
   let title = 'Q.S '+surah.tname+': '+ayah.index;
   let actionSheet = this.actionSheetCtrl.create({
     title: title,
     buttons: [
       {
         text: 'Salin',
         role: 'destructive',
         icon: 'copy',
         handler: () => {
           this.clipboard.copy(ayah.text);
           let toast = this.toastCtrl.create({
              message: title+' sudah disalin...',
                duration: 3000,
                  position: 'middle'
              });
           toast.present();
         }
       },
       {
         text: 'Quote',
         role: 'destructive',
         icon: 'image',
         handler: () => {
           
         }
       },
       {
         text: 'Bagikan',
         icon: 'share',
         handler: () => {
           this.socialSharing.share("Testing, sharing this from inside an app I'm building right now", null, "www/assets/img/hulk.jpg", null);
         }
       }
     ]
   });

   actionSheet.present();
 }

}