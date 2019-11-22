import { TablePaginationModel } from './table-pagination.model';

export interface TablePaginationStoreModel {
    loading: boolean;
    sort: string;
    order: string;
    page: number;
    data: TablePaginationModel;
    isRateLimitReached: boolean;
}
