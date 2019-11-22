import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TablePaginationService } from '../services/table-pagination.service';
import { ofAction } from '@addapptables/ngrx-actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { LoadDataTablePagination, DataLoadedTablePagination, ErrorLoadDataTablePagination } from '../actions/table.-pagination.actions';
import { of } from 'rxjs';
import { TablePaginationModel } from '../models/table-pagination.model';


@Injectable()
export class PaginationTableEffect {

  constructor(private _actions$: Actions, private _tablePaginationService: TablePaginationService) { }

  @Effect()
  loadData$ = this._actions$.pipe(
    ofAction(LoadDataTablePagination),
    switchMap(({ payload }) =>
      this._tablePaginationService.getRepoIssues(payload.sort, payload.order, payload.page)
        .pipe(
          catchError(() => of({
            isRateLimitReached: true
          }))
        )
    ),
    map(data => {
      if ((<any>data).isRateLimitReached) {
        return new ErrorLoadDataTablePagination();
      } else {
        return new DataLoadedTablePagination({ data: <TablePaginationModel>data });
      }
    })
  );
}
