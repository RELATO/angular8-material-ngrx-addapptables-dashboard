import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ProductListComponent } from './components/product/components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: '',
    redirectTo: 'invoice',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceRoutingModule { }
