import { Action } from '@ngrx/store';
import { ExtendedPaginationModel } from '../models/extended-pagination.model';

export enum ExtendedPaginationActionTypes {
  LoadDataExtendedPagination = '[ExtendedPagination] Load data extendedPagination',
  DataLoadedExtendedPagination = '[ExtendedPagination] Data loaded extendedPagination'
}

export class LoadExtendedPaginations implements Action {
  readonly type = ExtendedPaginationActionTypes.LoadDataExtendedPagination;
}

export class DataLoadedExtendedPagination implements Action {
  readonly type = ExtendedPaginationActionTypes.DataLoadedExtendedPagination;
  constructor(public payload: { data: ExtendedPaginationModel[] }) { }
}

export type ExtendedPaginationActions = LoadExtendedPaginations | DataLoadedExtendedPagination;
