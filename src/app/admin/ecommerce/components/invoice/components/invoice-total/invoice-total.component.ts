import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-invoice-total',
  templateUrl: './invoice-total.component.html',
  styleUrls: ['./invoice-total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class InvoiceTotalComponent { }
