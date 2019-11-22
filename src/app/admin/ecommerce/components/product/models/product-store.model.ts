import { EntityState } from '@ngrx/entity';
import { ProductModel } from './product.model';

export interface ProductStoreModel extends EntityState<ProductModel> {
    loading: boolean;
}
