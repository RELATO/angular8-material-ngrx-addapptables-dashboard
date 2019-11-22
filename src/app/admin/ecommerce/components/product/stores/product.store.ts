import { Store, Action } from '@addapptables/ngrx-actions';
import { ProductStoreModel } from '../models/product-store.model';
import { LoadProducts, ProductsLoaded } from '../actions/product.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProductModel } from '../models/product.model';

export const productAdapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();
const initialState = productAdapter.getInitialState({
    loading: false
});

@Store<ProductStoreModel>(initialState)
export class ProductStore {

    @Action(LoadProducts)
    loadProducts(state: ProductStoreModel) {
        return { ...state, loading: true };
    }

    @Action(ProductsLoaded)
    productsLoaded(state: ProductStoreModel, { payload: { products } }: ProductsLoaded) {
        return productAdapter.addMany(products, {
            ...state,
            loading: false
        });
    }
}

export const {
    selectAll
} = productAdapter.getSelectors();
