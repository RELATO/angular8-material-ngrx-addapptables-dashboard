import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ExtendedPaginationService } from '../services/extended-pagination.service';
import { ofAction } from '@addapptables/ngrx-actions';
import { LoadExtendedPaginations, DataLoadedExtendedPagination } from '../actions/extended-pagination.actions';
import { switchMap, map } from 'rxjs/operators';


@Injectable()
export class ExtendedPaginationEffects {

  constructor(private _actions$: Actions, private _extendedPaginationService: ExtendedPaginationService) { }

  @Effect()
  loadData$ = this._actions$.pipe(
    ofAction(LoadExtendedPaginations),
    switchMap(() => this._extendedPaginationService.getAllData()),
    map(data => new DataLoadedExtendedPagination({ data }))
  );
}
