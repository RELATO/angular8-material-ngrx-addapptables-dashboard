import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-invoice-products',
  templateUrl: './invoice-products.component.html',
  styleUrls: ['./invoice-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class InvoiceProductsComponent implements OnInit {

  dataSourceBehaviorSub: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([]);

  dataSource$: Observable<ProductModel[]> = this.dataSourceBehaviorSub.asObservable();

  displayedColumns: string[] = ['id', 'name', 'quantity', 'price', 'subTotal'];

  constructor() {
  }

  ngOnInit() {
    this.dataSourceBehaviorSub.next([{
      id: 1,
      name: 'Computer',
      price: 1250,
      quantity: 1,
      subTotal: 1250,
      iva: 16
    }, {
      id: 2,
      name: 'Mouse',
      price: 100,
      quantity: 2,
      subTotal: 200,
      iva: 19
    }]);
  }

}
