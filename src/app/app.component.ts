import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { QuranPage } from '../pages/quran/quran';
import { AlphabetPage } from '../pages/alphabet/alphabet';
import { NotePage } from '../pages/note/note';
import { TopicPage } from '../pages/topic/topic';
import { DoaPage } from '../pages/doa/doa';
import { AboutPage } from '../pages/about/about';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';
import { SettingService } from '../providers/setting-service';

@Component({
  templateUrl: 'app.html'
})
export class QuranApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = QuranPage;

  mainPages: Array<{title: string, name: string, component: any, icon: string}>;
  otherPages: Array<{title: string, name: string, component: any, icon: string}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public setting: SettingService
  ) {
    this.initializeApp();
    this.mainPages = [
      { title: "Al-Qur'an", name: "QuranPage", component: QuranPage, icon:'book' },
      { title: "Topik", name: "TopicPage", component: TopicPage, icon:'list-box' },
      { title: "Abjad", name: "AlphabetPage", component: AlphabetPage, icon:'quote' },
      { title: "Do'a", name: "DoaPage", component: DoaPage, icon:'hand' },
      { title: "Catatan", name: "NotePage", component: NotePage, icon:'list-box' },
    ];
    this.otherPages = [
      { title: "Pengaturan", name: "SettingsPage", component: SettingsPage, icon:'settings' },
      { title: "Bantuan", name: "HelpPage", component: HelpPage, icon:'help-circle' },
      { title: "Tentang Aplikasi", name: "AboutPage", component: AboutPage, icon:'information-circle' }
    ];
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.setting.setTranslation(true);
    this.setting.setLargerFontSize(false);
    this.setting.setNightMode(false);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  isActive(page) {

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}
