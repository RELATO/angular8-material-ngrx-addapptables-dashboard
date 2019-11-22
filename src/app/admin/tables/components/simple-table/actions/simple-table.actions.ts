import { Action } from '@ngrx/store';
import { SimpleTableModel } from '../models/simple-table.model';

export enum SimpleTableActionType {
  LoadData = '[SimpleTable] Load Data',
  DataLoaded = '[SimpleTable] Data loaded'
}

export class LoadDataSimpleTable implements Action {
  readonly type = SimpleTableActionType.LoadData;
}

export class DataLoadedSimpleTable implements Action {
  readonly type = SimpleTableActionType.DataLoaded;

  constructor(public payload: { data: SimpleTableModel[] }) { }
}

export type SimpleTableActions = LoadDataSimpleTable | DataLoadedSimpleTable;
