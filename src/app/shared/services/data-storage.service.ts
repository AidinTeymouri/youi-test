import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import 'rxjs/Rx';

import { Result } from '../../shared/models/result.model';
import { ResultService } from '../../result/result.service';

@Injectable()
export class DataStorageService {
  res: Result[];
  constructor(private http: Http, private resultService: ResultService) {}


  getResults() {
    let url = 'https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=votes&tagged=angular&site=stackoverflow';
    
    return this.http.get(url)
    .map(
      (response: Response) => {
        const results: Result[] = response.json();
        return results;
      })

      .subscribe(res1 =>
      {
        const myArray = [];
        for (let key in res1) {
          myArray.push(res1[key]);
        }
        this.res = myArray;
        this.resultService.setResults(this.res);
        console.log(JSON.stringify(this.res))
      }
      );
    }
  }

