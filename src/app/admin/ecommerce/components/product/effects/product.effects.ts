import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ProductService } from '../services/product.service';
import { ProductsCancelRequest, LoadProducts, ProductActionTypes, ProductsLoaded } from '../actions/product.actions';
import { ofAction } from '@addapptables/ngrx-actions';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private _productService: ProductService
  ) { }

  @Effect()
  load$ = this.actions$.pipe(
    ofAction(LoadProducts, ProductsCancelRequest),
    switchMap((action) => action.type === ProductActionTypes.ProductsCancelRequest ? of([]) : this._productService.getAll()),
    map(result => new ProductsLoaded({ products: result }))
  );
}
