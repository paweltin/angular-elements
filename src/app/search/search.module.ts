import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {createCustomElement} from '@angular/elements';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromSearch from './state/reducers/search.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './state/effects/search.effects';
import {ProductsModule} from '../products/products.module';
import {environment} from '../../environments/environment';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsModule,
    StoreModule.forFeature(fromSearch.searchFeatureKey, fromSearch.reducer),
    EffectsModule.forFeature([SearchEffects]),
  ],
  exports: [
    SearchComponent,
  ],
  entryComponents: [
    SearchComponent,
  ],
})
export class SearchModule {

  constructor(private injector: Injector) {
    if (environment.production) {
      customElements.define('app-search', createCustomElement(SearchComponent, {injector}));
    }
  }

  ngDoBootstrap() {}
}
