import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AddapptableState } from 'src/app/reducers';
import { selectProductLoading, selectAllProducts } from '../selectors/product.selector';
import { takeUntil, tap } from 'rxjs/operators';
import { LoadProducts } from '../actions/product.actions';
import { MatTableDataSource } from '@angular/material';

@Injectable()
export class ProductDataSourceServiceService extends MatTableDataSource<ProductModel> {

  private _unsubscribeAll: Subject<ProductModel[]> = new Subject();

  displayedColumns: string[] = ['actions', 'id', 'image', 'name', 'category', 'price', 'quantity', 'active'];

  loading$: Observable<boolean>;

  constructor(private _store: Store<AddapptableState>) {
    super();
    this._initLoading();
  }

  loadData() {
    this._store.pipe(
      select(selectAllProducts),
      takeUntil(this._unsubscribeAll),
      tap(result => {
        if (result.length === 0) {
          this._store.dispatch(new LoadProducts());
        } else {
          this.data = result;
        }
      })
    ).subscribe();
  }

  disconnect(): void {
    super.disconnect();
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  private _initLoading() {
    this.loading$ = this._store.pipe(
      select(selectProductLoading)
    );
  }
}
