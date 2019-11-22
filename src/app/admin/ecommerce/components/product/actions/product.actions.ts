import { Action } from '@ngrx/store';
import { ProductModel } from '../models/product.model';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  ProductsLoaded = '[Product] Products Loaded',
  ProductsCancelRequest = '[Product] Products Cancel Request'
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
}

export class ProductsLoaded implements Action {
  readonly type = ProductActionTypes.ProductsLoaded;
  constructor(public payload: { products: ProductModel[] }) { }
}

export class ProductsCancelRequest implements Action {
  readonly type = ProductActionTypes.ProductsCancelRequest;
  constructor(public payload: { products: ProductModel[] }) { }
}
