import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {map, mergeMap} from 'rxjs/operators';
import * as searchActions from '../actions/search.actions';
import {SearchService} from '../../search.service';
import {Product} from '../../../products/product';



@Injectable()
export class SearchEffects {


  @Effect()
  loadResults$ = this.actions$.pipe(
    ofType(searchActions.SearchActionTypes.LoadResults),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    mergeMap((action: searchActions.LoadResults) => this.searchService.getResults().pipe(
      map((searchResults: Product[]) => new searchActions.SetResults(searchResults))
    ))
  );


  constructor(private actions$: Actions<searchActions.SearchActions>,
              private searchService: SearchService) {}

}
