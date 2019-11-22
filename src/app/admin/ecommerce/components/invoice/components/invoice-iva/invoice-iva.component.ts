import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IvaModel } from '../../models/iva.model';

@Component({
  selector: 'app-invoice-iva',
  templateUrl: './invoice-iva.component.html',
  styleUrls: ['./invoice-iva.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class InvoiceIvaComponent implements OnInit {

  dataSourceBehaviorSub: BehaviorSubject<IvaModel[]> = new BehaviorSubject<IvaModel[]>([]);

  dataSource$: Observable<IvaModel[]> = this.dataSourceBehaviorSub.asObservable();

  displayedColumns: string[] = ['base', 'iva', 'subTotal'];

  constructor() { }

  ngOnInit() {
    this.dataSourceBehaviorSub.next([{
      base: 1250,
      iva: 16,
      subTotal: 200
    },
    {
      base: 200,
      iva: 12,
      subTotal: 24
    }]);
  }

}
