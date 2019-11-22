import { NgModule } from '@angular/core';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { MatTableModule } from '@angular/material/table';
import { SimpleTableStore } from './components/simple-table/stores/simple-table.store';
import { EffectsModule } from '@ngrx/effects';
import { SimpleTableEffects } from './components/simple-table/effects/simple-table.effects';
import { CardModule } from '@addapptables/card';
import { MatIconModule, MatDividerModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule } from '@angular/material';
import { SimpleTableContentComponent } from './components/simple-table/components/simple-table/simple-table.component';
import { PrimaryTableComponent } from './components/simple-table/components/primary-table/primary-table.component';
import { AccentTableComponent } from './components/simple-table/components/accent-table/accent-table.component';
import { DefaultTableComponent } from './components/simple-table/components/default-table/default-table.component';
import { PaginationTableComponent } from './components/pagination-table/pagination-table.component';
import { DefaultPaginationComponent } from './components/pagination-table/components/default-pagination/default-pagination.component';
import { ExtendedPaginationComponent } from './components/pagination-table/components/extended-pagination/extended-pagination.component';
import { PaginationTableEffect } from './components/pagination-table/components/default-pagination/effects/pagination-table.effects';
import { TablePaginationStore } from './components/pagination-table/components/default-pagination/stores/table-pagination.store';
import { ExtendedPaginationStore } from './components/pagination-table/components/extended-pagination/stores/extended-pagination.store';
import {
  ExtendedPaginationEffects
} from './components/pagination-table/components/extended-pagination/effects/extended-pagination.effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';

@NgModule({
  imports: [
    SharedModule,
    TablesRoutingModule,
    MatTableModule,
    CardModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    ReduxRegisterModule.forFeature('tables', {
      simple: SimpleTableStore,
      pagination: TablePaginationStore,
      extendedPagination: ExtendedPaginationStore
    }),
    EffectsModule.forFeature([SimpleTableEffects, PaginationTableEffect, ExtendedPaginationEffects]),
  ],
  declarations: [
    TablesComponent,
    SimpleTableComponent,
    SimpleTableContentComponent,
    PrimaryTableComponent,
    AccentTableComponent,
    DefaultTableComponent,
    PaginationTableComponent,
    DefaultPaginationComponent,
    ExtendedPaginationComponent
  ]
})
export class TablesModule { }
