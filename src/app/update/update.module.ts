import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import {createCustomElement} from '@angular/elements';
import {FormsModule} from '@angular/forms';
import {environment} from '../../environments/environment';
import { StoreModule } from '@ngrx/store';
import * as fromUpdate from './state/reducers/update.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UpdateEffects } from './state/effects/update.effects';



@NgModule({
  declarations: [UpdateComponent],
  exports: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(fromUpdate.updateFeatureKey, fromUpdate.reducer),
    EffectsModule.forFeature([UpdateEffects]),
  ],
  entryComponents: [UpdateComponent],
})
export class UpdateModule {
  constructor(private injector: Injector) {
    if (environment.production) {
      customElements.define('app-update', createCustomElement(UpdateComponent, {injector}));
    }
  }
}
