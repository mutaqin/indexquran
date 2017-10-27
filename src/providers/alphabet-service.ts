import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class AlphabetService {
  alphabet: any;
  constructor(public http: Http) { }

  load(): any {
    return this.http.get('assets/data/alphabet.json')
        .map(this.processData, this);
  }

  processData(res: any) {
    let data = res.json();
    this.alphabet = data.alphabet
    return this.alphabet;
  }

search(queryText){
    return this.load().map((data: any) => {
      
      let text = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
      let queryWords = text.split(' ').filter(w => !!w.trim().length);
      if(!text.trim().length){
        return data;
      }
      let result = [];
      
      data.forEach((alphabet: any) => {
          let topics = [];
          alphabet.topics.forEach((topic:any)=>{
            if(this.filterText(queryWords, topic.topic)){
              topics.push(topic);
            }
          });            
          if(topics.length>0){
            result.push({index:alphabet.index, topics: topics});
          }
          
      });
      return result;
    });
  }

  filterText(queryWords: string[], topic: string) {
    let matches = false;
    if (queryWords.length) {
      queryWords.forEach((queryWord: string) => {
        if (topic.toLowerCase().indexOf(queryWord) > -1) {
          matches = true;
        }
      });
    } else {
      matches = true;
    }
    return matches;
  }
}
