import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { QuranApp } from './app.component';
import { QuranPage } from '../pages/quran/quran';
import { SurahPage } from '../pages/surah/surah';
import { AlphabetPage } from '../pages/alphabet/alphabet';
import { AlphabetDetailPage } from '../pages/alphabet/alphabet-detail';
import { BookmarkPage } from '../pages/bookmark/bookmark';
import { NotePage } from '../pages/note/note';
import { TopicPage } from '../pages/topic/topic';
import { DoaPage } from '../pages/doa/doa';
import { DoaDetailPage } from '../pages/doa/doa-detail';
import { AyahPage } from '../pages/ayah/ayah';
import { AboutPage } from '../pages/about/about';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';
import { PopoverPage } from '../pages/popover/popover';

import { QuranService } from '../providers/quran-service';
import { TopicService } from '../providers/topic-service';
import { DoaService } from '../providers/doa-service';
import { AlphabetService } from '../providers/alphabet-service';
import { SettingService } from '../providers/setting-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Clipboard } from '@ionic-native/clipboard'; 
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
@NgModule({
  declarations: [
    QuranApp,
    QuranPage,
    SurahPage,
    AlphabetPage,
    AlphabetDetailPage,
    BookmarkPage,
    NotePage,
    DoaPage,
    DoaDetailPage,
    TopicPage,
    AyahPage,
    AboutPage,
    HelpPage,
    SettingsPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(QuranApp),
        IonicStorageModule.forRoot({
      name: '__qurandb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    QuranApp,
    QuranPage,
    SurahPage,
    AlphabetPage,
    AlphabetDetailPage,
    BookmarkPage,
    NotePage,
    DoaPage,
    DoaDetailPage,
    TopicPage,
    AyahPage,
    AboutPage,
    HelpPage,
    SettingsPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Clipboard,
    SocialSharing,
    QuranService,
    TopicService,
    DoaService,
    AlphabetService,
    SettingService
]
})
export class AppModule {}
