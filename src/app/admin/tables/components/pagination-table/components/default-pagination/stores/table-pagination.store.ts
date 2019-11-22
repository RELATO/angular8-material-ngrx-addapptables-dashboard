import { Store, Action } from '@addapptables/ngrx-actions';
import { TablePaginationModel } from '../models/table-pagination.model';
import { LoadDataTablePagination, DataLoadedTablePagination, ErrorLoadDataTablePagination } from '../actions/table.-pagination.actions';
import { TablePaginationStoreModel } from '../models/table-pagination-store.model';


@Store<TablePaginationStoreModel>({
    data: <TablePaginationModel>{},
    loading: true,
    isRateLimitReached: false,
    order: '',
    sort: '',
    page: 0
})
export class TablePaginationStore {

    @Action(LoadDataTablePagination)
    loadDataPaginationTable(state: TablePaginationStoreModel, { payload }: LoadDataTablePagination) {
        return { ...state, loading: true, isRateLimitReached: false, ...payload };
    }

    @Action(DataLoadedTablePagination)
    dataLoadedPaginationTable(state: TablePaginationStoreModel, { payload: { data } }: DataLoadedTablePagination) {
        return { ...state, loading: false, isRateLimitReached: false, data };
    }

    @Action(ErrorLoadDataTablePagination)
    errorLoadDataTablePagination(state: TablePaginationStoreModel) {
        return { ...state, loading: false, isRateLimitReached: true };
    }
}
