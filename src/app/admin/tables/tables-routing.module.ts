import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { PaginationTableComponent } from './components/pagination-table/pagination-table.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'simple-table',
    component: SimpleTableComponent
  }, {
    path: 'pagination-table',
    component: PaginationTableComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
