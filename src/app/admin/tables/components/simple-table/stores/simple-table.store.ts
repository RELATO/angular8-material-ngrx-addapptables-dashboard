import { Store, Action } from '@addapptables/ngrx-actions';
import { SimpleTableStoreModel } from '../models/simple-table-store.model';
import { LoadDataSimpleTable, DataLoadedSimpleTable } from '../actions/simple-table.actions';

@Store<SimpleTableStoreModel>({
    loading: false,
    data: []
})
export class SimpleTableStore {

    @Action(LoadDataSimpleTable)
    loadDataSimpleTable(state: SimpleTableStoreModel) {
        return { ...state, loading: true };
    }

    @Action(DataLoadedSimpleTable)
    DataLoadedSimpleTable(state: SimpleTableStoreModel, { payload: { data } }: DataLoadedSimpleTable) {
        return { ...state, loading: false, data };
    }

}
