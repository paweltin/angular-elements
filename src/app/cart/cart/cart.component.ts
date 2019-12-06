import {
  Component, Input,
  OnInit,
} from '@angular/core';
import {ProductInCart} from '../product-in-cart';
import {select, Store} from '@ngrx/store';
import * as fromCart from '../../cart/state/reducers/cart.reducer';
import * as fromCartSelectors from '../state/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: ProductInCart[];
  amount = 0;
  price = 0;

  plural(term): string {
    return this.amount !== 1 ? `${term}s` : term;
  }

  getPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }

  constructor(private store: Store<fromCart.State>) {
  }

  ngOnInit() {
    this.store.pipe(select(fromCartSelectors.getProductsInCart)).subscribe(
      (products) => {
        this.cartProducts = products;
        this.amount = this.cartProducts.reduce((pv, cv) => pv + cv.amount, 0);
        this.price = this.cartProducts.reduce((pv, cv) => pv + cv.price * cv.amount, 0);
      }
    );
  }
}
