import { Action } from '@ngrx/store';
import { ReportkWeekModel } from '../models/report-week.model';

export enum ReportWeekActionTypes {
  LoadReportWeeks = '[ReportWeek] Load ReportWeeks',
  ReportWeekActionTypes = '[ReportWeek] ReportWeeks loaded'
}

export class LoadReportWeeks implements Action {
  readonly type = ReportWeekActionTypes.LoadReportWeeks;
}

export class ReportWeeksLoaded implements Action {
  readonly type = ReportWeekActionTypes.ReportWeekActionTypes;
  constructor(public payload: { reportWeek: ReportkWeekModel[] }) { }
}

export type ReportWeekActions = LoadReportWeeks | ReportWeeksLoaded;
