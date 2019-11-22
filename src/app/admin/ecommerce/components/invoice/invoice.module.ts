import { NgModule } from '@angular/core';
import { InvoiceHeaderComponent } from './components/invoice-header/invoice-header.component';
import { InvoiceClientComponent } from './components/invoice-client/invoice-client.component';
import { InvoiceProductsComponent } from './components/invoice-products/invoice-products.component';
import { InvoiceIvaComponent } from './components/invoice-iva/invoice-iva.component';
import { InvoiceTotalComponent } from './components/invoice-total/invoice-total.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceComponent } from './invoice.component';
import { CardModule } from '@addapptables/card';
import { SharedTablesModule } from 'src/app/admin/shared/shared-tables-module/shared-tables-module.module';

@NgModule({
  declarations: [
    InvoiceHeaderComponent,
    InvoiceClientComponent,
    InvoiceProductsComponent,
    InvoiceIvaComponent,
    InvoiceTotalComponent,
    InvoiceComponent
  ],
  imports: [
    SharedModule,
    CardModule,
    SharedTablesModule
  ]
})
export class InvoiceModule { }
