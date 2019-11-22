import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedFormsModule } from 'src/app/admin/shared/shared-forms-module/shared-forms-module.module';
import { SharedTablesModule } from 'src/app/admin/shared/shared-tables-module/shared-tables-module.module';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
import { ProductStore } from './stores/product.store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';
import { ProductDataSourceServiceService } from './services/product-data-source-service.service';
import { ProductService } from './services/product.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormModalComponent } from './components/product-form-modal/product-form-modal.component';
import { MatCheckboxModule } from '@angular/material';
import { SharedModalModule } from 'src/app/admin/shared/shared-modal-module/shared-modal-module.module';
import { AlertModule } from '@addapptables/alert';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    ProductFormModalComponent
  ],
  entryComponents: [
    ProductFormModalComponent
  ],
  imports: [
    SharedModule,
    SharedFormsModule,
    SharedTablesModule,
    SharedModalModule,
    MatCheckboxModule,
    AlertModule,
    ReduxRegisterModule.forFeature('product', { list: ProductStore }),
    EffectsModule.forFeature([ProductEffects]),
  ],
  providers: [
    ProductDataSourceServiceService,
    ProductService
  ]
})
export class ProductModule { }
