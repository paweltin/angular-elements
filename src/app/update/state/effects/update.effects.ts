import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {map, mergeMap} from 'rxjs/operators';
import * as updateActions from '../actions/update.actions';
import {UpdateService} from '../../update.service';



@Injectable()
export class UpdateEffects {


  @Effect()
  loadUpdates$ = this.actions$.pipe(
    ofType(updateActions.UpdateActionTypes.LoadUpdates),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    mergeMap((action: updateActions.LoadUpdates) => this.updateService.getValue().pipe(
      map((updateValue: string) => new updateActions.SetUpdates(updateValue))
    ))
  );

  @Effect()
  postUpdates$ = this.actions$.pipe(
    ofType(updateActions.UpdateActionTypes.PostUpdates),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    mergeMap((action: updateActions.PostUpdates) => this.updateService.updateValue(action.payload).pipe(
      map(() => new updateActions.SetUpdates(action.payload))
    ))
  );


  constructor(private actions$: Actions<updateActions.UpdateActions>,
              private updateService: UpdateService) {}

}
