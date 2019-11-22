import { createSelector } from '@ngrx/store';
import * as fromEvents from '../stores/product.store';
import { ProductStoreModel } from '../models/product-store.model';

export const selectProductState = state => <ProductStoreModel>state.product.list;

export const selectAllProducts = createSelector(
    selectProductState,
    fromEvents.selectAll
);

export const selectProductLoading = createSelector(
    selectProductState,
    store => store.loading
);
