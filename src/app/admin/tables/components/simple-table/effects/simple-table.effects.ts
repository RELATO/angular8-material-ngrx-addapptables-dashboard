import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LoadDataSimpleTable, DataLoadedSimpleTable } from '../actions/simple-table.actions';
import { ofAction } from '@addapptables/ngrx-actions';
import { switchMap, map } from 'rxjs/operators';
import { SimpleTableService } from '../services/simple-table.service';


@Injectable()
export class SimpleTableEffects {

  constructor(private _actions$: Actions, private _simpleTableService: SimpleTableService) { }

  @Effect()
  loadDataSimpleTable$ = this._actions$.pipe(
    ofAction(LoadDataSimpleTable),
    switchMap(() => this._simpleTableService.getAllData()),
    map(data => new DataLoadedSimpleTable({ data }))
  );

}
