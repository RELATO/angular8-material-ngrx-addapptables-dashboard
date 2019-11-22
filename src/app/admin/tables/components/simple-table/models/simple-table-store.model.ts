import { SimpleTableModel } from './simple-table.model';

export interface SimpleTableStoreModel {
    loading: boolean;
    data: SimpleTableModel[];
}
