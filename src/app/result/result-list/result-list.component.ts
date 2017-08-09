import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';

import { Result } from '../../shared/models/result.model';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { ResultService } from '../result.service';

@Component({
	selector: 'app-result-list',
	templateUrl: './result-list.component.html',
	styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit, OnDestroy {

	results: Result[];
	subscription: Subscription;

	constructor(private resultService: ResultService, 
		private dataStorageService: DataStorageService) { }

	ngOnInit() {
		this.subscription = this.resultService.resultsChanged
		.subscribe(
			(results: Result[]) => {
				this.results = results;
			});
		this.results = this.resultService.getResults();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
