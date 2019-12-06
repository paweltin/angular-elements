import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromUpdate from '../state/reducers/update.reducer';
import * as fromUpdateSelectors from '../state/selectors/update.selectors';
import * as updateActions from '../state/actions/update.actions';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Input() value = '';
  currentValue$: Observable<string>;

  constructor(private store: Store<fromUpdate.State>) { }

  ngOnInit() {
    this.currentValue$ = this.store.pipe(select(fromUpdateSelectors.setUpdates));
    this.store.dispatch(new updateActions.LoadUpdates());
  }

  onSubmit(): void {
    this.store.dispatch(new updateActions.PostUpdates(this.value));
  }

}
