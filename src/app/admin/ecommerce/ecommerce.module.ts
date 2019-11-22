import { NgModule } from '@angular/core';
import { ECommerceRoutingModule } from './ecommerce-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedFormsModule } from '../shared/shared-forms-module/shared-forms-module.module';
import { SharedModalModule } from '../shared/shared-modal-module/shared-modal-module.module';
import { SharedTablesModule } from '../shared/shared-tables-module/shared-tables-module.module';
import { InvoiceModule } from './components/invoice/invoice.module';
import { ProductModule } from './components/product/product.module';

@NgModule({
  imports: [
    SharedModule,
    ECommerceRoutingModule,
    SharedFormsModule,
    SharedModalModule,
    SharedTablesModule,
    InvoiceModule,
    ProductModule
  ]
})
export class ECommerceModule { }
