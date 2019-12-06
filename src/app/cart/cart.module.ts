import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {createCustomElement} from '@angular/elements';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './state/reducers/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './state/effects/cart.effects';
import {ProductsModule} from '../products/products.module';
import {environment} from '../../environments/environment';



@NgModule({
  declarations: [CartComponent],
  imports: [
    ProductsModule,
    CommonModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([CartEffects])
  ],
  entryComponents: [
    CartComponent,
  ],
  exports: [CartComponent],
})
export class CartModule {

  constructor(private injector: Injector) {
    if (environment.production) {
      customElements.define('app-cart', createCustomElement(CartComponent, {injector}));
    }
  }

}
