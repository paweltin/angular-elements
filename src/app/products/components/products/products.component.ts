import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() category: string;
  @Input() products: Product[];
  @Input() showSku: boolean;
  @Output() checked = new EventEmitter<boolean>();

  toggleSku(value: boolean): void {
    this.checked.emit(value);
  }

}
