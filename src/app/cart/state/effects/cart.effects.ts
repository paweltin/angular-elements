import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CartActionTypes, CartActions } from '../actions/cart.actions';



@Injectable()
export class CartEffects {


  @Effect()
  loadCarts$ = this.actions$.pipe(
    ofType(CartActionTypes.AddToCart),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<CartActions>) {}

}
