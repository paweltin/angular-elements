import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product';
import * as fromProduct from '../../state/reducers/product.reducer';
import * as fromProductSelectors from '../../state/selectors/product.selectors';
import * as productActions from '../../state/actions/product.actions';
import * as cartActions from '../../../cart/state/actions/cart.actions';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() showSku: boolean;
  @Input() product: Product;
  @Input() remove: boolean;
  activeProduct: number;

  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit() {
    this.store.pipe(select(fromProductSelectors.getSelectedProduct)).subscribe(
      activeProduct => this.activeProduct = activeProduct
    );
  }

  setActiveProduct(): void {
    this.store.dispatch(new productActions.SetActiveProduct(this.product.sku));
  }

  addToCart(): void {
    this.store.dispatch(new cartActions.AddToCart({...this.product, amount: 1}));
  }

  removeFromCart(): void {
    this.store.dispatch(new cartActions.RemoveFromCart(this.product));
  }

}
