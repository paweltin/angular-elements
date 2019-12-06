import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, mergeMap} from 'rxjs/operators';
import * as productActions from '../actions/product.actions';
import {ProductsService} from '../../products.service';
import {Product} from '../../product';



@Injectable()
export class ProductEffects {


  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.LoadProducts),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    mergeMap((action: productActions.LoadProducts) => this.productService.getProducts().pipe(
      map((products: Product[]) => new productActions.SetProducts(products))
    ))
  );


  constructor(private actions$: Actions<productActions.ProductActions>,
              private productService: ProductsService) {}

}
