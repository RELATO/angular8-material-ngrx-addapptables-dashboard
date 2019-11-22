import { Store, Action } from '@addapptables/ngrx-actions';
import { ReportStoreModel } from '../models/report.store.model';
import { LoadReportWeeks, ReportWeeksLoaded } from '../actions/report-week.actions';

@Store<ReportStoreModel>({
    loading: false,
    reportWeek: []
})
export class ReportStore {

    @Action(LoadReportWeeks)
    loadReportWeeks(state: ReportStoreModel) {
        return { ...state, loading: true };
    }

    @Action(ReportWeeksLoaded)
    reportWeeksLoaded(state: ReportStoreModel, { payload: { reportWeek } }: ReportWeeksLoaded) {
        return { ...state, loading: false, reportWeek };
    }

}
