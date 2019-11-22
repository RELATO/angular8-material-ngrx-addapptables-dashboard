import { Store, Action } from '@addapptables/ngrx-actions';
import { ExtendedPaginationStoreModel } from '../models/extended-pagination-store.model';
import { LoadExtendedPaginations, DataLoadedExtendedPagination } from '../actions/extended-pagination.actions';


@Store<ExtendedPaginationStoreModel>({
    loading: false,
    data: []
})
export class ExtendedPaginationStore {

    @Action(LoadExtendedPaginations)
    loadExtendedPaginations(state: ExtendedPaginationStoreModel) {
        return { ...state, loading: true };
    }

    @Action(DataLoadedExtendedPagination)
    dataLoadedExtendedPagination(state: ExtendedPaginationStoreModel, { payload: { data } }: DataLoadedExtendedPagination) {
        return { ...state, loading: false, data };
    }

}
