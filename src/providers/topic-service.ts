import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class TopicService {
  data: any;
  topic: any;
  constructor(public http: Http) { }

  load(): any {
    return this.http.get('assets/data/topic.json')
        .map(this.processData, this);
  }

  processData(data: any) {
    this.data = data.json();
    this.topic = this.data.topics
    return this.topic;
  }


}
