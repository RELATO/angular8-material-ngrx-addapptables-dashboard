import { ExtendedPaginationModel } from './extended-pagination.model';

export interface ExtendedPaginationStoreModel {
    loading: boolean;
    data: ExtendedPaginationModel[];
}
