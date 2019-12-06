import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Product} from '../../product';
import {select, Store} from '@ngrx/store';
import * as fromProduct from '../../state/reducers/product.reducer';
import * as fromProductSelectors from '../../state/selectors/product.selectors';
import * as productActions from '../../state/actions/product.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-shell',
  templateUrl: './products-shell.component.html',
  styleUrls: ['./products-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsShellComponent implements OnInit {
  products$: Observable<Product[]>;
  showSku$: Observable<boolean>;

  constructor(private store: Store<fromProduct.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new productActions.LoadProducts());

    this.products$ = this.store.pipe(select(fromProductSelectors.getProducts));
    this.showSku$ = this.store.pipe(select(fromProductSelectors.getShowSku));
  }

  toggleSku(value: boolean) {
    this.store.dispatch(new productActions.ToggleSKU(value));
  }

}
