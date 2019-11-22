import { SimpleTableStoreModel } from '../models/simple-table-store.model';
import { createSelector } from '@ngrx/store';

export const selectSimpleTableState = state => <SimpleTableStoreModel>state.tables.simple;

export const selectAllData = createSelector(
    selectSimpleTableState,
    table => table.data
);

export const selectLoading = createSelector(
    selectSimpleTableState,
    table => table.loading
);
