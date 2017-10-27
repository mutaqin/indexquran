import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class DoaService {
  doa: any;
  constructor(public http: Http) { }

  load(): any {
    return this.http.get('assets/data/doa.json')
        .map(this.processData, this);
  }

  processData(res: any) {
    let data = res.json();
    this.doa = data.doa
    return this.doa;
  }


}
