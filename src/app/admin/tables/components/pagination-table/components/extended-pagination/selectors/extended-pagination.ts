import { createSelector } from '@ngrx/store';
import { ExtendedPaginationStoreModel } from '../models/extended-pagination-store.model';

export const selectTablePaginationState = state => <ExtendedPaginationStoreModel>state.tables.extendedPagination;

export const selectAllData = createSelector(
    selectTablePaginationState,
    table => table.data
);

export const selectLoading = createSelector(
    selectTablePaginationState,
    table => table.loading
);
