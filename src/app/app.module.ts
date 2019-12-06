import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {NewsletterComponent} from './newsletter/newsletter.component';
import {FormsModule} from '@angular/forms';
import {ProductsModule} from './products/products.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {CartModule} from './cart/cart.module';
import { SearchModule } from './search/search.module';
import { UpdateModule } from './update/update.module';

@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ProductsModule,
    CartModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Angular elements',
      maxAge: 25,
      logOnly: environment.production
    }),
    SearchModule,
    UpdateModule,
  ],
  providers: [],
  entryComponents: [
    AppComponent,
    NewsletterComponent,
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
    customElements.define('app-root', createCustomElement(AppComponent, {injector}));
    customElements.define('app-newsletter', createCustomElement(NewsletterComponent, {injector}));
  }

  ngDoBootstrap() {}
}
