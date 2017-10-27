import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class QuranService {
  surahs:any;
  data:any;
  constructor(public http: Http) {}

  getSurahs(): any {
    if (this.surahs) {
      return Observable.of(this.surahs);
    } else {
      return this.http.get('assets/data/quran.json')
        .map(this.processData, this);
    }
    
  }

  processData(data: any) {
    let json = data.json();
    return json.surah;
  }

  getSurah(index){
    return this.getSurahs().map(data=>{
      return data[index-1];
    });
  }

  getAyahs(surah_index:number, ayah_start, ayah_end){
    return this.getSurahs().map((data: any) => {
      let surahs=[];
        let surah = data[surah_index];
        let ayahs = [];
        for(let i=ayah_start-1;i<ayah_end;i++){
          ayahs.push(surah.aya[i]);
        }
        surah.aya = ayahs;
        surahs.push(surah);
        return surahs;
      });
  }


}
