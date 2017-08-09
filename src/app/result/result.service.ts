import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Result } from '../shared/models/result.model';


@Injectable()
export class ResultService {

	resultsChanged = new Subject<Result[]>();

   private items: Result[] = [];

  constructor() { }

    setResults(items: Result[]) {
    this.items = items;
    this.resultsChanged.next(this.items.slice());
  }

  getResults() {
    return this.items.slice();
  }

  getResult(index: number) {
    return this.items[index];
  }

}