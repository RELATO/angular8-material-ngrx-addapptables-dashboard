import { createSelector } from '@ngrx/store';
import { TablePaginationStoreModel } from '../models/table-pagination-store.model';

export const selectTablePaginationState = state => <TablePaginationStoreModel>state.tables.pagination;

export const selectAllData = createSelector(
    selectTablePaginationState,
    table => table.data.items
);

export const selectTotalCount = createSelector(
    selectTablePaginationState,
    table => table.data.total_count
);

export const selectLoading = createSelector(
    selectTablePaginationState,
    table => table.loading
);

export const selectIsRateLimitReached = createSelector(
    selectTablePaginationState,
    table => table.isRateLimitReached
);
