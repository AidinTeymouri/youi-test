import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Result } from '../../../shared/models/result.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {

	@Input() result: Result;
 	@Input() index: number;
 	is_answered = true;
 	
  constructor() { }

  ngOnInit() {
  }

}
