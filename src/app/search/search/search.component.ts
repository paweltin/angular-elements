import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromSearch from '../state/reducers/search.reducer';
import * as fromSearchSelectors from '../state/selectors/search.selectors';
import * as searchActions from '../state/actions/search.actions';
import {Product} from '../../products/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() search = '';
  searchResults$: Observable<Product[]>;

  constructor(private store: Store<fromSearch.State>) { }

  ngOnInit() {
    this.searchResults$ = this.store.pipe(select(fromSearchSelectors.getResults));
  }

  loadResults() {
    this.store.dispatch(new searchActions.LoadResults());
  }

  setSearch() {
    this.store.dispatch(new searchActions.SetSearch(this.search));
  }

}
