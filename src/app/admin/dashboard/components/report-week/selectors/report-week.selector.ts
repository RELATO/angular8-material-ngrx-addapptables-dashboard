import { ReportStoreModel } from '../models/report.store.model';
import { createSelector } from '@ngrx/store';

export const selectReportWeekState = state => <ReportStoreModel>state.dashboard.report;

export const selectAllReportWeek = createSelector(
    selectReportWeekState,
    report => report.reportWeek
);
