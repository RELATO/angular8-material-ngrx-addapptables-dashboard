import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofAction } from '@addapptables/ngrx-actions';
import { LoadReportWeeks, ReportWeeksLoaded } from '../actions/report-week.actions';
import { switchMap, map } from 'rxjs/operators';
import { ReportService } from '../services/report.service';


@Injectable()
export class ReportEffect {

  constructor(private _actions$: Actions, private _reportService: ReportService) { }

  @Effect()
  reportWeek$ = this._actions$.pipe(
    ofAction(LoadReportWeeks),
    switchMap(() => this._reportService.getAllReportOfWeek()),
    map(reportWeek => new ReportWeeksLoaded({ reportWeek }))
  );
}
