import { Action } from '@ngrx/store';
import { TablePaginationModel } from '../models/table-pagination.model';

export enum TablePaginationActionTypes {
  LoadData = '[TablePagination] Load data',
  DataLoaded = '[TablePagination] Data loaded',
  ErrorLoad = '[TablePagination] Error load'
}

export class LoadDataTablePagination implements Action {
  readonly type = TablePaginationActionTypes.LoadData;
  constructor(public payload: { sort: string, order: string, page: number }) { }
}

export class DataLoadedTablePagination implements Action {
  readonly type = TablePaginationActionTypes.DataLoaded;
  constructor(public payload: { data: TablePaginationModel }) { }
}

export class ErrorLoadDataTablePagination implements Action {
  readonly type = TablePaginationActionTypes.ErrorLoad;
  constructor() { }
}

export type PaginationTableActions = DataLoadedTablePagination | LoadDataTablePagination | ErrorLoadDataTablePagination;
