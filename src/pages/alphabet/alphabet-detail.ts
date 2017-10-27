import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuranService } from '../../providers/quran-service';

@Component({
    selector: 'alphabet-detail',
    templateUrl: 'alphabet-detail.html'
})

export class AlphabetDetailPage{
    topic:any;
    surahs:any;
    surah:any;
    constructor(public navController: NavController, public navParams: NavParams, public quranService: QuranService){
        this.topic = navParams.get('topic');
    }

}