import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import {createCustomElement} from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './state/reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/effects/product.effects';
import {environment} from '../../environments/environment';
import { ProductsShellComponent } from './containers/products-shell/products-shell.component';



@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductsShellComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  entryComponents: [
    ProductsComponent
  ],
  exports: [ProductsComponent, ProductComponent, ProductsShellComponent],
})
export class ProductsModule {
  constructor(private injector: Injector) {
    if (environment.production) {
      customElements.define('app-products', createCustomElement(ProductsComponent, {injector}));
    }
  }

}
